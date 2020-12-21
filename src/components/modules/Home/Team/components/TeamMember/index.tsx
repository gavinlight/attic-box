import * as i from 'types';
import React from 'react';
import sanitizeHtml from 'sanitize-html';

import { useModal } from 'hooks';
import { Modal } from 'common/layout';

import { mapper } from './mapper';
import {
  TeamMemberContainer, MemberName, MemberFunction,
  ModalCard, ModalColumn, ModalClose,
  MemberImage, MemberContent, MemberLinks, MemberLink,
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
            <MemberLinks
              wrap={Boolean(member.urls && Object.keys(member.urls).length > 2)}
            >
              {member.urls && Object.entries(member.urls).map((link) => {
                const [type, url] = link as [i.TeamMemberSocialMediaTypes, string | undefined];

                return (
                  <>
                    {type === 'email' ? (
                      <MemberLink href={`mailto:${url}`}>
                        {mapper(type)}
                      </MemberLink>
                    ) : (
                      <MemberLink href={`https://${url}`}>
                        {mapper(type)}
                      </MemberLink>
                    )}
                  </>
                );
              })}
            </MemberLinks>
          </ModalColumn>
          <ModalColumn right>
            <MemberName as="h1">
              {member.name}
            </MemberName>
            <MemberFunction as="h2">
              {member.function}
            </MemberFunction>
            <MemberContent
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(member.content) }}
            />
          </ModalColumn>
        </ModalCard>
      </Modal>
    </>
  );
};

type TeamMemberProps = {
  member: i.TeamMemberType;
};
