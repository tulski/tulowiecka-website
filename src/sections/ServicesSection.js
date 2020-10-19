import React from 'react';
import { media } from 'utils';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import SectionTemplate from 'templates/SectionTemplate';
import Card from 'components/Card/Card';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

import CardsBlob from 'assets/svgs/cardsBlob.svg';

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

const StyledCardsBlob = styled(CardsBlob)`
  position: absolute;
  top: -10%;
  height: 110%;
  width: 140%;
  overflow: visible;

  ${media.laptop`
    top: -20%;
    right: -6rem;
    height:140%;
  `};
`;

// const Decor = styled(motion.div)`
//   display: none;
//   position: absolute;
//   top: 5%;
//   right: 30%;
//   height: 70px;
//   width: 70px;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.light};
//   opacity: 0.5;

//   ${media.laptop`
//     display: block;
//   `}

//   ${({ second }) =>
//     second &&
//     css`
//       top: 100%;
//       right: 35%;
//     `}
// `;

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

      ${media.laptop`
        display: block;
      `}
    `}
`;

const DetailedWrapper = styled.div`
  text-align: center;

  ${media.laptop`
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

const ServicesSection = ({ content: { cards, detailed } }) => {
  return (
    <SectionTemplate name="services">
      <ServicesWrapper>
        <CardsWrapper>
          <StyledCardsBlob />
          {/* <Decor
            animate={{ rotate: 360 }}
            transition={{
              loop: Infinity,
              duration: 10,
            }}
          />
          <Decor
            animate={{ rotate: 360 }}
            transition={{
              loop: Infinity,
              duration: 20,
            }}
            second
          /> */}
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
};

export default ServicesSection;
