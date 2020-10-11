import * as i from 'types';
import React from 'react';

import { useModal } from 'hooks';
import { Modal } from 'common/layout';

import {
  TeamMemberContainer, MemberName, MemberFunction,
  ModalCard, ModalColumn, ModalClose,
  MemberImage, MemberContent, MemberLink,
} from './styled';

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
        <MemberName>{member.name}</MemberName>
        <MemberFunction>{member.function}</MemberFunction>
      </TeamMemberContainer>
      <Modal
        url={slug}
        open={open}
        setModalOpen={setOpen}
        variant="card"
      >
        <ModalCard>
          <ModalClose onClick={() => setOpen(false)} />
          <ModalColumn left>
            <MemberImage
              src={member.image}
              alt={member.name}
            />
            <MemberLink href="mailto:gavin.ligthart@gmail.com">
              gavin.ligthart@gmail.com
            </MemberLink>
            <MemberLink href="http://www.gavinligthart.nl">
              www.gavinligthart.nl
            </MemberLink>
          </ModalColumn>
          <ModalColumn right>
            <MemberName as="h1">
              {member.name}
            </MemberName>
            <MemberFunction as="h2">
              {member.function}
            </MemberFunction>
            <MemberContent>
              Hi, I am Collin, one of the founders of Attic Box Studio. I help with the development of map design, layout, gameplay as well as writing and implementing the story. I manage the overall flow of the game and design the player’s journey to keep it engaging from begin to end.
              <br /><br />
              Next to this, I handle all the business related matters of the company. I am working as a data analyst at Goedemensen and currently stationed at Advanced Programs as an application developer.
            </MemberContent>
          </ModalColumn>
        </ModalCard>
      </Modal>
    </>
  );
};

type TeamMemberProps = {
  member: i.TeamMemberType;
};
