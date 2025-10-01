import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const PageHeader = styled.section`
  position: relative;
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/contact-header.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const InfoCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const InfoContent = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.3rem;
  }
  
  p {
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightBg};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    bottom: -10px;
    left: 0;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  align-self: flex-start;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.$isError ? "#ffe6e6" : "#e6ffe6"};
  color: ${props => props.$isError ? "#cc0000" : "#007e33"};
  font-size: 0.9rem;
  transition: all 0.3s ease;
`;

const MapSection = styled.section`
  height: 400px;
  margin-top: 5rem;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });
  
  const [formSubmitting, setFormSubmitting] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill in all required fields."
      });
      setFormSubmitting(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please enter a valid email address."
      });
      setFormSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent successfully."
      });
      setFormSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ""
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactContainer>
      <PageHeader>
        <div>
          <PageTitle>Contact Us</PageTitle>
          <PageSubtitle>
            We'd love to hear from you. Reach out to us with questions, reservations, or feedback.
          </PageSubtitle>
        </div>
      </PageHeader>
      
      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactInfo>
              <InfoCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <IconBox>
                  <FaMapMarkerAlt />
                </IconBox>
                <InfoContent>
                  <h3>Our Location</h3>
                  <p>123 Gourmet Avenue<br />Culinary District<br />New York, NY 10001</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <IconBox>
                  <FaPhone />
                </IconBox>
                <InfoContent>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <IconBox>
                  <FaEnvelope />
                </IconBox>
                <InfoContent>
                  <h3>Email</h3>
                  <p>info@koyarestaurant.com<br />reservations@koyarestaurant.com</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <IconBox>
                  <FaClock />
                </IconBox>
                <InfoContent>
                  <h3>Opening Hours</h3>
                  <p>
                    Monday - Friday: 11:00 AM - 11:00 PM<br />
                    Saturday - Sunday: 10:00 AM - 12:00 AM
                  </p>
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
                  </SocialLinks>
                </InfoContent>
              </InfoCard>
            </ContactInfo>
            
            <ContactForm 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              as={motion.form}
            >
              <FormTitle>Send us a Message</FormTitle>
              
              <FormGroup>
                <FormLabel htmlFor="name">Name *</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton 
                type="submit" 
                disabled={formSubmitting}
              >
                {formSubmitting ? "Sending..." : "Send Message"}
              </SubmitButton>
              
              {formStatus.submitted && (
                <FormMessage 
                  $isError={formStatus.error}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.message}
                </FormMessage>
              )}
            </ContactForm>
          </ContactGrid>
        </Container>
      </ContactSection>
      
      <MapSection>
        <MapIframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.91943686489!2d-73.9878584302246!3d40.7484268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2suk!4v1645019615279!5m2!1sen!2suk" 
          allowFullScreen 
          loading="lazy" 
          title="Restaurant Location"
        />
      </MapSection>
    </ContactContainer>
  );
};

export default Contact;
