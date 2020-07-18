import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

const StyledWrapper = styled.div`
  margin: 30px 0;
  text-align: center;

  ${media.laptop`
  margin: 90px 0;
  text-align: inherit;
  `}

  ${media.laptop`
  &:nth-child(2) {
    margin-left: -30px;
  }
  `}
`;

const Heading = styled.h3`
  max-width: 420px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 16px auto;

  ${media.laptop`
  max-width: 500px;
  `}
`;

const Paragraph = styled.p`
  max-width: 420px;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 16px auto;

  ${media.laptop`
  max-width: 500px;
  `}
`;

const DetailedText = ({ heading, paragraph }) => (
  <StyledWrapper>
    <Heading>{heading}</Heading>
    <Paragraph>{paragraph}</Paragraph>
  </StyledWrapper>
);

export default DetailedText;
