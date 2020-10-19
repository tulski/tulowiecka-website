import styled, { css } from 'styled-components';
import { media } from 'utils';

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${media.laptop`
  margin: 3.75rem 0 2rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  `}

  ${media.laptopL`
  font-size: ${({ theme }) => theme.fontSize.xl};
  `}
`;

export default Heading;
