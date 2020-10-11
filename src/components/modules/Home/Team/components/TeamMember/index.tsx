import * as i from 'types';
import React from 'react';

import { useModal } from 'hooks';
import { Modal } from 'common/layout';

import { TeamMemberContainer, MemberName, MemberFunction } from './styled';

export const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const { slug, open, setOpen } = useModal(member.name);

  return (
    <>
      <TeamMemberContainer>
        <img
          src={member.image}
          alt={member.name}
          onClick={() => setOpen(true)}
        />
        <MemberName>  {member.name}</MemberName>
        <MemberFunction>{member.function}</MemberFunction>
      </TeamMemberContainer>
      <Modal
        url={slug}
        open={open}
        setModalOpen={setOpen}
      >
        {member.name}
      </Modal>
    </>
  );
};

type TeamMemberProps = {
  member: i.TeamMemberType;
};
