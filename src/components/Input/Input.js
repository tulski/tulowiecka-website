import styled from 'styled-components';
import { media } from 'utils';

const Input = styled.input`
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: transparent;
  border: none;
  border-bottom: ${({ theme }) => theme.gray} solid 1px;
  resize: none;

  ::placeholder {
    text-transform: lowercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.gray};
  }

  &:focus {
    outline: none;
  }

  ${media.laptop`
  font-size: ${({ theme }) => theme.fontSize.m};
`}
`;

export default Input;
