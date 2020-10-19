import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo/Logo';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paragraph = styled.p`
  margin: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.gray};
`;

const Footer = () => (
  <FooterWrapper>
    <Logo />
    <Paragraph>© 2020 Michał Tułowiecki</Paragraph>
  </FooterWrapper>
);

export default Footer;
