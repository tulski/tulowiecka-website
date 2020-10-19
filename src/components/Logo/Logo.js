import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { media } from 'utils';

const LogoWrapper = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  width: min-content;

  ${media.tablet`
  margin: 0;
  `}
`;

const Circle = styled(motion.div)`
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;

  ${({ red }) =>
    red &&
    css`
      background-color: #c93565;
    `}
  ${({ blue }) =>
    blue &&
    css`
      background-color: #338fff;
    `};
`;

const LogoText = styled(motion.p)`
  width: max-content;
  padding-left: 2rem;
  margin: 0;
  color: #002c6f;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Maven Pro', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  line-height: 1;
`;

const Logo = () => {
  const circleVariants = {
    hidden: {
      x: '0%',
    },
    reveal: custom => ({
      x: custom,
    }),
  };
  return (
    <LogoWrapper initial="hidden" animate="reveal" whileHover="hidden">
      <Circle red custom="-25%" variants={circleVariants} />
      <Circle blue custom="25%" variants={circleVariants} />
      <LogoText>Tułowiecka</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
