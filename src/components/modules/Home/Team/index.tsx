import * as React from 'react';

import LogoSvg from 'vectors/logo-reversed.svg';
import BrianImage from 'images/media/team/brian.jpg';
import GavinImage from 'images/media/team/gavin.jpg';
import TomImage from 'images/media/team/tom.jpg';

import { Container } from 'common/layout';

import {
  TeamContainer, ContentContainer, Text, TeamHeader,
  TeamMembersContainer, TeamMember, MemberName, MemberFunction,
} from './styled';

export const Team: React.FC = () => (
  <TeamContainer>
    <Container>
      <ContentContainer>
        <LogoSvg />
        <Text>
          <b>Attic Box Games</b> is a game development studio founded by students from several universities in the Netherlands. These students practice different courses representing different roles in our studio such as; game development, game artist, business & IT management, web development and sound design. Attic Box Games strives to create games that go beyond ordinairy games. We aim to create experiences with new engaging worlds, enchanting stories and thrilling adventure.
        </Text>
      </ContentContainer>
      <TeamHeader as="h2">
        Meet our team
      </TeamHeader>
      <TeamMembersContainer>
        <TeamMember>
          <img src={BrianImage} alt="Brian" />
          <MemberName>Brian Harman</MemberName>
          <MemberFunction>Sound designer</MemberFunction>
        </TeamMember>
        <TeamMember>
          <img src={GavinImage} alt="Gavin" />
          <MemberName>Gavin Ligthart</MemberName>
          <MemberFunction>Digital brand manager</MemberFunction>
        </TeamMember>
        <TeamMember>
          <img src={TomImage} alt="Tom" />
          <MemberName>Tom verkerk</MemberName>
          <MemberFunction>CEO mofo</MemberFunction>
        </TeamMember>
        <TeamMember>
          <img src={BrianImage} alt="Brian" />
          <MemberName>Brian Harman</MemberName>
          <MemberFunction>Sound designer</MemberFunction>
        </TeamMember>
        <TeamMember>
          <img src={GavinImage} alt="Gavin" />
          <MemberName>Gavin Ligthart</MemberName>
          <MemberFunction>Digital brand manager</MemberFunction>
        </TeamMember>
        <TeamMember>
          <img src={TomImage} alt="Tom" />
          <MemberName>Tom verkerk</MemberName>
          <MemberFunction>CEO mofo</MemberFunction>
        </TeamMember>
      </TeamMembersContainer>
    </Container>
  </TeamContainer>
);
