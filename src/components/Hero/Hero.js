import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am Vladyslav <br />
          Dovzhenko
        </SectionTitle>
        <SectionText>
        A versatile and passionate developer with hands-on experience in multiple programming languages and frameworks.
        </SectionText>
        <a href="#projects"><Button >Explore</Button></a>
      </LeftSection>
    </Section>
);

export default Hero;