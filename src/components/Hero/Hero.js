import React from 'react';

import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { NavLink } from '../Header/HeaderStyles';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I`m a Frontend JavaScript Developer with more than 4 years of experience in Frontend Development, 2 years of this as commercial development.
        </SectionText>
        <SectionText>
          I`m glad to see you here!
        </SectionText>
        <Button onClick={props.handleClick}>
          <Link href="#about">
            <NavLink>Learn more</NavLink>
          </Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
