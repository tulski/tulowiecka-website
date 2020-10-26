import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import styled from 'styled-components';
import { media } from 'src/utils';

import SectionTemplate from 'src/components/SectionTemplate';
import Heading from 'src/components/Heading';
import Paragraph from 'src/components/Paragraph';
import HomeDecor from 'src/components/HomeDecor';
import Blob from 'src/components/Blob';

const HomeSvg = loadable(() => import('src/components/HomeSvg'));
const SwipeArrow = loadable(() => import('src/components/SwipeArrow'));

const HomeWrapper = styled.div`
  margin-top: 5rem;

  ${media.tablet`
    margin-top: 0;
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
    max-width: 50%;
`}

  ${media.laptopL`
    max-width: 37rem;
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
  <SectionTemplate name="home">
    <HomeWrapper>
      <SvgWrapper>
        <HomeSvg />
        <StyledBlob />
      </SvgWrapper>
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Paragraph decor>{author}</Paragraph>
      </TextWrapper>
    </HomeWrapper>
    <SwipeArrow />
    <HomeDecor />
  </SectionTemplate>
);

HomeSection.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeSection;
