import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { media } from 'utils';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

const CardWrapper = styled(motion.div)`
  position: relative;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.light};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.xLarge};

  ${({ darkBackground, theme }) =>
    darkBackground &&
    css`
      background-color: ${theme.dark};
      color: ${theme.light};
    `}

  ${({ empty, theme }) =>
    empty &&
    css`
      background-color: transparent;
      border: solid ${theme.light} 0.25rem;
      box-shadow: ${theme.boxShadow.base};
    `}

  &::after {
    //Responsive Square with CSS
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Label = styled(Heading)`
  position: absolute;
  margin: 0;
  top: 1rem;
  right: 1rem;

  ${media.laptop`
    margin: 0;
  `}
`;

const CardText = styled(Paragraph)`
  position: absolute;
  margin: 0;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
`;

const Card = ({ value, darkBackground }) => {
  return (
    <CardWrapper
      whileHover={{ scale: 1.05 }}
      darkBackground={darkBackground}
      empty={!value}
    >
      {value && (
        <>
          <Label>{value[0]}</Label>
          <CardText>{value}</CardText>
        </>
      )}
    </CardWrapper>
  );
};

Card.propTypes = {
  value: PropTypes.string,
  darkBackground: PropTypes.bool,
};

Card.defaultProps = {
  value: '',
  darkBackground: false,
};

export default Card;
