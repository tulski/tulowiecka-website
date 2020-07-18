import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  position: relative;
  margin: 16px auto;
  background-color: ${({ theme }) => theme.light};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  ${({ darkBackground }) =>
    darkBackground &&
    css`
      background-color: ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.light};
    `}

  &::after {
    //Responsive Square with CSS
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const CardText = styled.p`
  position: absolute;
  margin: 0;
  bottom: 16px;
  left: 16px;
  right: 16px;
`;

const Card = ({ value, darkBackground = false }) => {
  return (
    <CardWrapper whileHover={{ scale: 1.05 }} darkBackground={darkBackground}>
      <Label>{value[0]}</Label>
      <CardText>{value}</CardText>
    </CardWrapper>
  );
};

export default Card;
