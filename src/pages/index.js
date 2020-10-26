import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { colors, shadows, typography } from 'src/utils';

import Navbar from 'src/components/Navbar';
import HomeSection from 'src/sections/HomeSection';
import ServicesSection from 'src/sections/ServicesSection';
import AboutSection from 'src/sections/AboutSection';
import ContactSection from 'src/sections/ContactSection';

const pageContent = {
  home: {
    heading:
      'Nawyk zarządzania pieniędzmi jest ważniejszy niż ilość posiadanych pieniędzy',
    author: 'T. Harv Eker',
  },
  services: {
    cards: [
      'Optymalizacja Podatkowa',
      'Rozliczenia',
      'Ubezpieczenia',
      'Dokumenty Urzędowe',
      'Księgi Rachunkowe',
    ],
    detailed: [
      {
        heading: 'Ksiegowość',
        paragraph:
          'Zajmujemy się szeroko pojętą księgowością. Prowadzimy działalności takie jak m.in.: usługi budowlane, usługi transportowe , produkcja maszyn i sprzedaży samochodów.',
      },
      {
        heading: 'Ubezpieczenia',
        paragraph:
          'Zabezpieczymy cały Twój majątek. Oferujemy m. in. ubezpieczenia komunikacyjne i majątkowe. Kompleksowa obsługa floty.',
      },
    ],
  },
  about: {
    heading: 'O nas',
    paragraph:
      'Biurem rachunkowo- ubezpieczeniowym. Swoją ofertę kierujemy do małych i średnich firm. Dzięki wieloletniemu doświadczeniu usługi, które świadczymy są na największym poziomie. Za nasz największy sukces uznajemy zaufanie, jakim nas Państwo obdarzacie.',
  },
  contact: {
    name: 'Agnieszka Tułowiecka',
    email: 'agnieszkatul2@wp.pl',
    phone: '+48 503 155 242',
    adress: (
      <span>
        ul. Okrzei 3 lok. 3
        <br />
        07-300 Ostrów Mazowiecka
      </span>
    ),
  },
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }
`;

const RootWrapper = styled.main`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const IndexPage = () => (
  <ThemeProvider theme={{ ...colors, ...shadows, ...typography }}>
    <Helmet>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <title>Agnieszka Tułowiecka</title>
    </Helmet>
    <GlobalStyle />
    <Navbar />
    <RootWrapper id="root">
      <HomeSection content={pageContent.home} />
      <ServicesSection content={pageContent.services} />
      <AboutSection content={pageContent.about} />
      <ContactSection content={pageContent.contact} />
    </RootWrapper>
  </ThemeProvider>
);

export default IndexPage;
