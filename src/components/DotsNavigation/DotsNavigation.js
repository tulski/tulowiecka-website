import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { media } from 'utils';

const StyledAside = styled.aside`
  width: min-content;
  display: none;

  ${media.tablet`
    position: fixed;
    display: block;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    z-index: 200;
  `}
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  cursor: pointer;
`;

const Dot = styled(motion.div)`
  display: block;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.dark};
`;

const DotsNavigation = ({ scrollYProgress }) => {
  const homeTransform = useTransform(scrollYProgress, [0, 0.3333], [1, 0.5]);
  const servicesTransform = useTransform(
    scrollYProgress,
    [0, 0.3333, 0.6666],
    [0.5, 1, 0.5]
  );
  const aboutTransform = useTransform(
    scrollYProgress,
    [0.3333, 0.6666, 1],
    [0.5, 1, 0.5]
  );
  const contactTransform = useTransform(scrollYProgress, [0.6666, 1], [0.5, 1]);
  return (
    <StyledAside>
      <StyledLink to="home" containerId="root" smooth>
        <Dot style={{ scale: homeTransform, opacity: homeTransform }} />
      </StyledLink>
      <StyledLink to="services" containerId="root" smooth>
        <Dot style={{ scale: servicesTransform, opacity: servicesTransform }} />
      </StyledLink>
      <StyledLink to="about" containerId="root" smooth>
        <Dot style={{ scale: aboutTransform, opacity: aboutTransform }} />
      </StyledLink>
      <StyledLink to="contact" containerId="root" smooth>
        <Dot style={{ scale: contactTransform, opacity: contactTransform }} />
      </StyledLink>
    </StyledAside>
  );
};

DotsNavigation.propTypes = {
  scrollYProgress: PropTypes.instanceOf(MotionValue).isRequired,
};

export default DotsNavigation;
