import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { media } from 'src/utils';

import SectionTemplate from 'src/components/SectionTemplate';
import ContactBlob from 'src/components/ContactBlob';
import Heading from 'src/components/Heading';
import Paragraph from 'src/components/Paragraph';
import Input from 'src/components/Input';

import avatarIcon from 'src/assets/svgs/avatar.svg';
import emailIcon from 'src/assets/svgs/email.svg';
import phoneIcon from 'src/assets/svgs/phone.svg';
import adressIcon from 'src/assets/svgs/adress.svg';

const ContactWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.secondary};
  border: solid ${({ theme }) => theme.secondary} 0.5rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.large};
  display: grid;
  grid-template: repeat(2, auto) / 1fr;

  ${media.tablet`
    width: 60%;
  `}

  ${media.laptop`
    height: 75%;
    width: 75%;
    border: solid ${({ theme }) => theme.secondary} 1rem;
    grid-template: 1fr / repeat(2,1fr);
  `}
`;

const StyledContactBlob = styled(ContactBlob)`
  position: absolute;
  height: 125%;
  width: 125%;
  top: -12.5%;
  left: -12.5%;
  z-index: -1;
  transform: rotate(90deg) scale(1.7, 3);

  ${media.laptop`
    transform: none;
  `}
`;

const InfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 0 2rem;
`;

const StyledHeading = styled(Heading)`
  width: 100%;
  text-align: center;

  ${media.laptopL`
    font-size: ${({ theme }) => theme.fontSize.l};
  `}
`;

const FormWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0 0 0.5rem 0.5rem;

  ${media.laptop`
    border-radius: 0 0.5rem 0.5rem 0;
  `}
`;

const Button = styled.button`
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 0.75rem;

  ${media.laptop`
    margin-bottom: 2rem;
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  `}
`;

const ContactSection = ({ content: { name, email, phone, adress } }) => (
  <SectionTemplate name="contact">
    <ContactWrapper>
      <StyledContactBlob />
      <InfoWrapper>
        <StyledHeading>Dane kontaktowe</StyledHeading>
        <Paragraph url={avatarIcon}>{name}</Paragraph>
        <Paragraph as={styled.a``} href={`mailto:${email}`} url={emailIcon}>
          {email}
        </Paragraph>
        <Paragraph as={styled.a``} href={`tel:${phone}`} url={phoneIcon}>
          {phone}
        </Paragraph>
        <Paragraph url={adressIcon}>{adress}</Paragraph>
      </InfoWrapper>
      <FormWrapper name="contact" method="POST" data-netlify="true">
        <div>
          <StyledHeading>Skontaktuj się z nami</StyledHeading>
          <Input placeholder="imię" name="name" />
          <Input placeholder="numer telefonu" name="phone" />
          <Input placeholder="e-mail" type="email" name="email" />
          <Input as={TextareaAutosize} maxRows="5" placeholder="wiadomość" />
        </div>
        <Button type="submit">Wyślij</Button>
      </FormWrapper>
    </ContactWrapper>
  </SectionTemplate>
);

ContactSection.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    adress: PropTypes.node.isRequired,
  }).isRequired,
};

export default ContactSection;
