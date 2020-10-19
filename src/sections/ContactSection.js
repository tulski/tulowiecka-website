import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import TextareaAutosize from 'react-textarea-autosize';

import SectionTemplate from 'templates/SectionTemplate';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Input from 'components/Input/Input';

import ContactSvg from 'assets/svgs/contactSvg.svg';
import avatarIcon from 'assets/icons/avatar.svg';
import emailIcon from 'assets/icons/email.svg';
import phoneIcon from 'assets/icons/phone.svg';
import adressIcon from 'assets/icons/adress.svg';

const ContactWrapper = styled.div`
  background-color: ${({ theme }) => theme.dark};
  border: solid ${({ theme }) => theme.dark} 0.5rem;
  border-radius: 1rem;
  display: grid;
  grid-template: repeat(2, auto) / 1fr;

  ${media.tablet`
    width: 60%;
  `}

  ${media.laptop`
    height: 75%;
    width: 75%;
    border: solid ${({ theme }) => theme.dark} 1rem;
    grid-template: 1fr / repeat(2,1fr);
  `}
`;

const StyledContactSvg = styled(ContactSvg)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 80%;
  width: 100%;
  overflow: visible;

  ${media.laptop`
  top: 50%;
  left: 50%;
  height: 80%;
  width: 160%;
  transform: translate(-50%,-50%);
  `}
`;

const InfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
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
  background-color: ${({ theme }) => theme.light};
  border-radius: 0 0 0.5rem 0.5rem;

  ${media.laptop`
    border-radius: 0 0.5rem 0.5rem 0;
  `}
`;

const Button = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 0.75rem;

  ${media.laptop`
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  `}
`;

const ContactSection = ({ content: { name, email, phone, adress } }) => (
  <SectionTemplate name="contact">
    <StyledContactSvg />
    <ContactWrapper>
      <InfoWrapper>
        <StyledHeading>Dane kontaktowe</StyledHeading>
        <Paragraph url={avatarIcon}>{name}</Paragraph>
        <Paragraph url={emailIcon}>{email}</Paragraph>
        <Paragraph url={phoneIcon}>{phone}</Paragraph>
        <Paragraph url={adressIcon}>{adress[0]}</Paragraph>
        <Paragraph url>{adress[1]}</Paragraph>
      </InfoWrapper>
      <FormWrapper>
        <div>
          <StyledHeading>Skontaktuj się z nami</StyledHeading>
          <Input placeholder="Imię" />
          <Input placeholder="numer telefonu" />
          <Input placeholder="e-mail" />
          <Input as={TextareaAutosize} maxRows="5" placeholder="wiadomość" />
        </div>
        <Button>Wyślij</Button>
      </FormWrapper>
    </ContactWrapper>
  </SectionTemplate>
);

export default ContactSection;
