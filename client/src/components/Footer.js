import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: 5rem 0 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterColumn = styled.div`
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const FooterText = styled.p`
  color: #aaa;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #aaa;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    padding-left: 5px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #aaa;
  font-size: 0.9rem;
`;

const ContactIcon = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  
  a {
    color: ${props => props.theme.colors.primary};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>About Us</FooterTitle>
          <FooterText>
            KOYAKO is a fine dining Moroccan restaurant offering exquisite cuisine in a luxurious atmosphere. Our team of experienced Moroccan chefs creates memorable dining experiences with the freshest local ingredients.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/menu">Menu</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/reservations">Reservations</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Opening Hours</FooterTitle>
          <FooterText>
            <strong>Monday - Friday</strong>
            <br />Lunch: 12:00pm - 3:00pm
            <br />Dinner: 6:00pm - 11:00pm
          </FooterText>
          <FooterText>
            <strong>Saturday - Sunday</strong>
            <br />Brunch: 10:30am - 3:30pm
            <br />Dinner: 6:00pm - 12:00am
          </FooterText>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact Info</FooterTitle>
          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <div>56 Avenue Mohammed V, Marrakech, Morocco</div>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <div>+212 524 123 456</div>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <div>info@koyakorestaurant.ma</div>
          </ContactItem>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          &copy; {currentYear} KOYAKO Restaurant. All rights reserved. Designed by <a href="/" target="_blank" rel="noopener noreferrer">YourName</a>
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
