import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>              
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/webcooljedi" target={'_blank'}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/damirkhamzin" target={'_blank'}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://telegram.me/teledam2003" target={'_blank'}>
          <FaTelegram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
