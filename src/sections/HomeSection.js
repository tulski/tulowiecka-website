import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

import HeroSvg from 'assets/svgs/hero.svg';

import SectionTemplate from 'templates/SectionTemplate';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Blob from 'components/Blob/Blob';

const StyledSectionTemplate = styled(SectionTemplate)`
  height: 100%;
`;

const HomeWrapper = styled.div`
  ${media.tablet`
  width: 60%;
`}

  ${media.laptop`
    width:80%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content:center;
`}
`;

const TextWrapper = styled.div`
  ${media.laptop`
    flex: 100 50%;
`}

  ${media.laptopL`
    max-width: 34rem;
`}
`;

const SvgWrapper = styled.div`
  position: relative;
  padding: 2rem 0 2rem;

  ${media.laptop`
  padding-left: 4rem;
  flex: 0 0 50%;
  max-width: 50%;
  `}

  ${media.laptopL`
  padding-left: 6rem;
  `}
`;

const StyledBlob = styled(Blob)`
  position: absolute;
  bottom: 25%;
  left: 0;
  right: 0;
  height: 85%;
  width: 100%;
  z-index: -1;
`;

const HomeSection = ({ content: { heading, author } }) => (
  <StyledSectionTemplate name="home">
    <HomeWrapper>
      <SvgWrapper>
        <HeroSvg />
        <StyledBlob />
      </SvgWrapper>
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Paragraph decor>{author}</Paragraph>
      </TextWrapper>
    </HomeWrapper>
  </StyledSectionTemplate>
);

export default HomeSection;
