import React, { useRef } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import 'normalize.css';
import { colors, media, shadows, typography } from 'utils';
import { useElementScroll } from 'framer-motion';

import Logo from 'components/Logo/Logo';
import DotsNavigation from 'components/DotsNavigation/DotsNavigation';
import HomeSection from 'sections/HomeSection';
import ServicesSection from 'sections/ServicesSection';
import AboutSection from 'sections/AboutSection';
import ContactSection from 'sections/ContactSection';
import Footer from 'components/Footer/Footer';

const pageContent = {
  hero: {
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
    phone: '+48 538 777 372',
    adress: ['ul. Okrzei 3 lok. 3', '07-300 Ostrów Mazowiecka'],
  },
};

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${colors.light};
  color: ${colors.dark};
}
`;

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 1rem 0.5rem;
  z-index: 900;

  ${media.laptop`
    padding: 2rem 2rem 1rem;
  `}
`;

const RootWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const IndexPage = () => {
  const rootEl = useRef();
  const { scrollYProgress } = useElementScroll(rootEl);

  return (
    <>
      <Helmet>
        <html lang="pl" />
        <meta charSet="utf-8" />
        <title>Tulowiecka</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <ThemeProvider theme={{ ...colors, ...typography, ...shadows }}>
        <GlobalStyle />
        <RootWrapper id="root" ref={rootEl}>
          <Navbar>
            <Logo />
          </Navbar>
          <DotsNavigation scrollYProgress={scrollYProgress} />
          <HomeSection content={pageContent.hero} />
          <ServicesSection content={pageContent.services} />
          <AboutSection content={pageContent.about} />
          <ContactSection content={pageContent.contact} />
          <Footer />
        </RootWrapper>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
