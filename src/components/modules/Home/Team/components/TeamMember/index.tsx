import React from 'react';
import sanitizeHtml from 'sanitize-html';

import ModalCardBorderSvg from 'vectors/modal-card-border.svg';
import { slugify } from 'services';
import { GatsbyModal } from 'common/layout';

import { navigate } from 'gatsby';
import { mapSocials } from './mapper';
import {
  TeamMemberContainer, MemberName, MemberFunction,
  ModalCard, ModalColumn, ModalClose, ModalScroll,
  MemberImage, MemberContent, MemberLinks, MemberLink,
} from './styled';

export const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  modalIsOpen,
}) => {
  // const { slug, open, setOpen } = useModal(member.name || 'Member');
  const modalScrollRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   if (open) {
  //     setTimeout(() => {
  //       if (modalScrollRef.current) {
  //         disableBodyScroll(modalScrollRef.current);
  //       }
  //     }, 0);
  //   }
  // }, [open]);

  if (!member?.name) return null;
  const socials = mapSocials(member);

  return (
    <>
      <TeamMemberContainer to={`/team/${slugify(member.name)}`}>
        <img
          src={member.image?.url}
          alt={member.name}
        />
        <MemberName>{member.name}</MemberName>
        <MemberFunction>{member.function}</MemberFunction>
      </TeamMemberContainer>
      {modalIsOpen && (
        <GatsbyModal
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
                <MemberContent
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(member.content) }}
                />
              </ModalColumn>
            </ModalScroll>
          </ModalCard>
        </GatsbyModal>
      )}
    </>
  );
};

type TeamMemberProps = {
  member: GatsbyTypes.TeamMemberFragment;
  modalIsOpen: boolean;
};
