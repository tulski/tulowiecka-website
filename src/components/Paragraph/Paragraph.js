import styled, { css } from 'styled-components';
import { media } from 'utils';

const Paragraph = styled.p`
  margin: 1rem 0;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};

  ${media.laptop`
    font-size: ${({ theme }) => theme.fontSize.m};
  `}

  ${({ decor, theme }) =>
    decor &&
    css`
      width: max-content;
      border-bottom: solid ${theme.decor} 1px;
    `};

  ${({ url }) =>
    url &&
    css`
      margin: 0;
      margin-bottom: 1rem;
      padding: 0.5rem 2rem;
      background: url(${({ url }) => url}) no-repeat;
      background-position: 0 50%;

      &:nth-last-child(2) {
        margin-bottom: 0.25rem;
      }
    `}
`;

export default Paragraph;
