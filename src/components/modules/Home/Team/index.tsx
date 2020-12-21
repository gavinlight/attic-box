import * as React from 'react';

import LogoSvg from 'vectors/logo-reversed.svg';

import { Container } from 'common/layout';

import { TeamMember } from './components';
import { TeamContent } from './content';
import { TeamContainer, ContentContainer, Text, TeamHeader, TeamMembersContainer } from './styled';

export const Team: React.FC = () => (
  <TeamContainer id="team">
    <Container>
      <ContentContainer>
        <TeamHeader as="h1">
          Attic box games
        </TeamHeader>
        <LogoSvg width="140px" height="140px" />
        <Text>
          <b>Attic Box Games</b> is an independent game development studio founded in the Netherlands. We strive to create games that go beyond the ordinary and aim to deliver experiences with new engaging worlds, enchanting stories and thrilling adventures.
        </Text>
      </ContentContainer>
      <TeamHeader as="h2" moveDown>
        Meet our team
      </TeamHeader>
      <TeamMembersContainer>
        {TeamContent.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </TeamMembersContainer>
    </Container>
  </TeamContainer>
);
