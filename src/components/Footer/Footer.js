import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillRedditCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+48-606-370-527" style={{ fontSize:"18px" }}>+48-606-370-527</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vladyslav.skyrise@gmail.com">
            vladyslav.skyrise@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Joykeeper">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://pl.linkedin.com/in/vladyslav-dovzhenko-4599b0252?trk=people-guest_people_search-card">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.reddit.com/user/One-Speaker4776/">
            <AiFillRedditCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
