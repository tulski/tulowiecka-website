import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

import AboutSvg from 'assets/svgs/about.svg';

import SectionTemplate from 'templates/SectionTemplate';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

const AboutWrapper = styled.div`
  ${media.tablet`
    width: 60%;
  `}

  ${media.laptop`
    width: 90%;
    display: flex;
    flex-direction: row-reverse;
    align-items:center;
    justify-content:center;
  `}
`;

const StyledAboutSvg = styled(AboutSvg)`
  padding: 2rem 0;

  ${media.laptop`
    padding-left: 6rem;
    flex: 0 0 50%;
    max-width:50%;
  `}
`;

const TextWrapper = styled.div`
  text-align: center;

  ${media.laptop`
    text-align: left;
    flex: 0 0 50%;
    max-width: 34rem;
  `}
`;

const AboutSection = ({ content: { heading, paragraph } }) => (
  <SectionTemplate name="about">
    <AboutWrapper>
      <StyledAboutSvg />
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </TextWrapper>
    </AboutWrapper>
  </SectionTemplate>
);

export default AboutSection;
