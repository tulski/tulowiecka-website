import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';
import TextareaAutosize from 'react-textarea-autosize';

import Input from 'components/Input/Input';
import Blob from 'components/Blob/Blob';

import avatarIcon from 'assets/icons/avatar.svg';
import emailIcon from 'assets/icons/email.svg';
import phoneIcon from 'assets/icons/phone.svg';
import adressIcon from 'assets/icons/adress.svg';

const ContactWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.laptop`
  flex-direction: row;
  `}
`;

const StyledBlob = styled(Blob)`
  position: absolute;
  height: 100%;
  width: 180%;
  z-index: -1;

  ${media.tablet`
  height: 90%;
  width: 90%;
  transform: skew(-10deg, -15deg);
  `}
`;

const InfoWrapper = styled.div`
  padding: 20px 40px;
  max-height: 45%;
  max-width: 550px;
  width: 95%;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  border: ${({ theme }) => theme.dark} solid 10px;
  border-radius: 16px 16px 0 0;

  ${media.laptop`
  height: 75vh;
  width: 40vw;
  max-height: none;
  max-width: none;
  border-radius: 16px 0 0 16px;
  `}
`;

const FormWrapper = styled.div`
  padding: 20px;
  min-height: 45%;
  width: 95%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.light};
  border: ${({ theme }) => theme.dark} solid 10px;
  border-radius: 0 0 16px 16px;

  ${media.laptop`
  height: 75vh;
  width: 40vw;
  max-height: none;
  max-width: none;
  border-radius: 0 16px 16px 0;
  `}
`;

const Heading = styled.h3`
  margin-top: 0;
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Paragraph = styled.p`
  margin-bottom: 0;
  padding: 4px 0 4px 40px;
  padding-left: 40px;
  background: url(${({ url }) => url}) no-repeat;
  background-position: 0 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  white-space: pre-wrap;
`;

const Button = styled.button`
  padding: 6px 16px;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: ${({ theme }) => theme.dark} solid 1px;
  border-radius: 12px;
`;

const ContactTemplate = ({ content: { name, email, phone, adress } }) => (
  <ContactWrapper>
    <StyledBlob />
    <InfoWrapper>
      <Heading>Dane kontaktowe</Heading>
      <Paragraph url={avatarIcon}>{name}</Paragraph>
      <Paragraph url={emailIcon}>{email}</Paragraph>
      <Paragraph url={phoneIcon}>{phone}</Paragraph>
      <Paragraph url={adressIcon}>{adress}</Paragraph>
    </InfoWrapper>
    <FormWrapper>
      <Heading>Skontaktuj się z nami</Heading>
      <Input placeholder="Imię" />
      <Input placeholder="numer telefonu" />
      <Input placeholder="e-mail" />
      <Input as={TextareaAutosize} maxRows="7" placeholder="wiadomość" />
      <Button>Wyślij</Button>
    </FormWrapper>
  </ContactWrapper>
);

export default ContactTemplate;
