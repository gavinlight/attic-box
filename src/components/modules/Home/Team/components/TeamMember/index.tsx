import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { disableBodyScroll } from 'body-scroll-lock';

import { useModal } from 'hooks';
import { Modal } from 'common/layout';

import { mapSocials } from './mapper';
import {
  TeamMemberContainer, MemberName, MemberFunction,
  ModalCard, ModalColumn, ModalClose, ModalScroll,
  MemberImage, MemberContent, MemberLinks, MemberLink,
} from './styled';

export const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const { slug, open, setOpen } = useModal(member.name || 'Member');
  const modalScrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        if (modalScrollRef.current) {
          disableBodyScroll(modalScrollRef.current);
        }
      }, 0);
    }
  }, [open]);

  const socials = mapSocials(member);

  return (
    <>
      <TeamMemberContainer>
        <img
          src={member.image?.url}
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
        disableScrollLock
        variant="card"
      >
        <ModalCard ref={modalScrollRef}>
          <ModalClose onClick={() => setOpen(false)} />
          <ModalScroll>
            <ModalColumn left>
              <MemberImage
                src={member.image?.url}
                alt={member.name}
              />
              <MemberLinks wrap={socials.length > 0}>
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
      </Modal>
    </>
  );
};

type TeamMemberProps = {
  member: GatsbyTypes.TeamMemberFragment;
};
