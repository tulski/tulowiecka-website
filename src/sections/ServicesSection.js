import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import styled, { css } from 'styled-components';
import { media } from 'src/utils';

import SectionTemplate from 'src/components/SectionTemplate';
import Card from 'src/components/Card';
import Heading from 'src/components/Heading';
import Paragraph from 'src/components/Paragraph';

const ServicesBlob = loadable(() => import('src/components/ServicesBlob'));

const ServicesWrapper = styled.div`
  ${media.tablet`
    width: 60%;
  `}

  ${media.laptop`
    width: 90%;
    display: flex;
    align-items: center;
  `}
`;

const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.laptop`
    flex: 0 0 50%;
    max-width: 50%;
  `}
`;

const StyledServicesBlob = styled(ServicesBlob)`
  position: absolute;
  top: -1%;
  height: 110%;
  width: 140%;
  overflow: visible;

  ${media.laptop`
    top: -14%;
    height:135%;
  `};
`;

const StyledColumn = styled.div`
  width: 45%;
  max-width: 15rem;

  ${({ second }) =>
    second &&
    css`
      margin: 0 0 0 1rem;

      ${media.laptop`
        margin: 0 4rem;
      `}
    `}

  ${({ empty }) =>
    empty &&
    css`
      display: none;
      opacity: 0.5;
      margin: -7.5rem 2.5rem 0 -15rem;

      ${media.tablet`
        display: block;
      `}
    `}
`;

const DetailedWrapper = styled.div`
  margin-top: 4rem;
  text-align: center;

  ${media.laptop`
    margin-top: 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:left;
    flex: 0 0 50%;
    max-width: 50%;
    margin-left: 4rem;
  `};
`;

const DetailedText = styled.div`
  ${media.laptop`
    max-width: 33rem;
    &:nth-child(2) {
      margin-left: 3rem;
    }
`}
`;

const ServicesSection = ({ content: { cards, detailed } }) => (
  <SectionTemplate name="services">
    <ServicesWrapper>
      <CardsWrapper>
        <StyledServicesBlob />
        <StyledColumn empty>
          <Card />
          <Card />
          <Card />
        </StyledColumn>
        <StyledColumn>
          <Card key={cards[0]} value={cards[0]} />
          <Card key={cards[1]} value={cards[1]} darkBackground />
          <Card key={cards[2]} value={cards[2]} />
        </StyledColumn>
        <StyledColumn second>
          <Card key={cards[3]} value={cards[3]} darkBackground />
          <Card key={cards[4]} value={cards[4]} />
        </StyledColumn>
      </CardsWrapper>
      <DetailedWrapper>
        <DetailedText>
          <Heading>{detailed[0].heading}</Heading>
          <Paragraph>{detailed[0].paragraph}</Paragraph>
        </DetailedText>
        <DetailedText>
          <Heading>{detailed[1].heading}</Heading>
          <Paragraph>{detailed[1].paragraph}</Paragraph>
        </DetailedText>
      </DetailedWrapper>
    </ServicesWrapper>
  </SectionTemplate>
);

ServicesSection.propTypes = {
  content: PropTypes.exact({
    cards: PropTypes.arrayOf(PropTypes.string).isRequired,
    detailed: PropTypes.arrayOf(
      PropTypes.exact({
        heading: PropTypes.string,
        paragraph: PropTypes.string,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default ServicesSection;
