import * as i from 'types';
import React from 'react';
import { navigate } from 'gatsby';

import ModalCardBorderSvg from 'vectors/modal-card-border.svg';
import { slugify } from 'services';
import { Modal } from 'common/layout';
import { RichText } from 'common/typography';

import { mapSocials } from './mapper';
import {
  TeamMemberContainer, MemberName, MemberFunction,
  ModalCard, ModalColumn, ModalClose, ModalScroll,
  MemberImage, MemberLinks, MemberLink,
} from './styled';

export const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  modalIsOpen,
}) => {
  if (!member?.name) return null;
  const socials = mapSocials(member);

  return (
    <>
      <TeamMemberContainer to={`/team/${slugify(member.name)}`} state={{ modal: true }}>
        <img
          src={member.image?.url}
          alt={member.name}
        />
        <MemberName>{member.name}</MemberName>
        <MemberFunction>{member.function}</MemberFunction>
      </TeamMemberContainer>
      {modalIsOpen && (
        <Modal
          mainUrl="/"
          variant="card"
        >
          <ModalCard>
            <ModalCardBorderSvg />
            <ModalClose onClick={() => navigate('/')} />
            <ModalScroll>
              <ModalColumn left>
                <MemberImage
                  src={member.image?.url}
                  alt={member.name}
                />
                <MemberLinks $wrap={socials.length > 0}>
                  {socials.map((social) => {
                    return (
                      <React.Fragment key={social.url}>
                        <MemberLink href={social.url}>
                          {social.title}
                        </MemberLink>
                      </React.Fragment>
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
                {member.description?.raw && (
                  <RichText
                    data={member.description as i.RichText}
                  />
                )}
              </ModalColumn>
            </ModalScroll>
          </ModalCard>
        </Modal>
      )}
    </>
  );
};

type TeamMemberProps = {
  member: GatsbyTypes.TeamMemberFragment;
  modalIsOpen: boolean;
};
