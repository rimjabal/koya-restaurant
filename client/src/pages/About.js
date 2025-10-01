import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLeaf, FaAward, FaHeart } from "react-icons/fa";

const AboutContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const PageHeader = styled.section`
  position: relative;
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/about-header.jpg") no-repeat center center/cover;
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

const Section = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const StorySection = styled(Section)`
  background-color: white;
`;

const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    bottom: -15px;
    left: 0;
  }
`;

const StoryText = styled.p`
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.lightText};
  line-height: 1.8;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const ImageBox = styled.div`
  height: 200px;
  overflow: hidden;
  
  &:first-child {
    grid-column: 1 / -1;
    height: 300px;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ValuesSection = styled(Section)`
  background-color: ${props => props.theme.colors.lightBg};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background-color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ValueText = styled.p`
  color: ${props => props.theme.colors.lightText};
`;

const TeamSection = styled(Section)`
  background-color: white;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  box-shadow: ${props => props.theme.shadows.small};
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TeamPosition = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 1.5rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <PageHeader>
        <div>
          <PageTitle>About Us</PageTitle>
          <PageSubtitle>
            Learn about our restaurant's story, values, and the team behind our exceptional cuisine.
          </PageSubtitle>
        </div>
      </PageHeader>
      
      <StorySection>
        <Container>
          <StoryContainer>
            <StoryContent>
              <SectionTitle>Our Story</SectionTitle>
              <StoryText>
                Founded in 2010, KOYAKO Restaurant began as a small family-owned establishment with a passion for creating exceptional dining experiences. Our founder, Chef Mohammed Alaoui, brought his culinary expertise from years of training in Morocco and France to create a unique fusion cuisine that celebrates both traditional Moroccan flavors and contemporary innovation.
              </StoryText>
              <StoryText>
                Over the years, KOYAKO has grown from a hidden gem to one of the most celebrated restaurants in Marrakech. We've maintained our commitment to quality ingredients, artistic presentation, and warm Moroccan hospitality while continuously evolving our menu to showcase seasonal offerings and creative new dishes.
              </StoryText>
              <StoryText>
                Today, KOYAKO stands as a testament to culinary excellence, having earned numerous accolades including prestigious culinary awards and being named among the top restaurants in North Africa. Despite our growth and recognition, we remain true to our original vision: creating memorable dining experiences that delight all the senses with the flavors of Morocco.
              </StoryText>
            </StoryContent>
            
            <ImageGrid>
              <ImageBox>
                <StoryImage src="/images/about1.jpg" alt="KOYA Restaurant Exterior" />
              </ImageBox>
              <ImageBox>
                <StoryImage src="/images/about2.jpg" alt="KOYA Restaurant Interior" />
              </ImageBox>
              <ImageBox>
                <StoryImage src="/images/about3.jpg" alt="KOYA Chef Cooking" />
              </ImageBox>
            </ImageGrid>
          </StoryContainer>
        </Container>
      </StorySection>
      
      <ValuesSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle style={{ textAlign: "center", margin: "0 auto 3rem" }}>
              Our Core Values
            </SectionTitle>
            <ValuesGrid>
              <ValueCard>
                <ValueIcon>
                  <FaLeaf />
                </ValueIcon>
                <ValueTitle>Sustainability</ValueTitle>
                <ValueText>
                  We are committed to sustainable practices, from sourcing ingredients locally to minimizing waste and using eco-friendly materials wherever possible.
                </ValueText>
              </ValueCard>
              <ValueCard>
                <ValueIcon>
                  <FaAward />
                </ValueIcon>
                <ValueTitle>Excellence</ValueTitle>
                <ValueText>
                  We strive for excellence in every aspect of our service, from the quality of our ingredients to the precision of our cooking techniques and attentiveness of our staff.
                </ValueText>
              </ValueCard>
              <ValueCard>
                <ValueIcon>
                  <FaHeart />
                </ValueIcon>
                <ValueTitle>Passion</ValueTitle>
                <ValueText>
                  Our team brings passion to their work every day, continuously innovating and perfecting their craft to create extraordinary culinary experiences.
                </ValueText>
              </ValueCard>
            </ValuesGrid>
          </motion.div>
        </Container>
      </ValuesSection>
      
      <TeamSection>
        <Container>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <SectionTitle style={{ textAlign: "center", margin: "0 auto 1.5rem" }}>
              Meet Our Team
            </SectionTitle>
            <p style={{ color: "#777", marginBottom: "2rem" }}>
              Our talented team of culinary professionals brings passion, creativity and expertise to KOYA Restaurant every day.
            </p>
          </div>
          
          <TeamGrid>
            <TeamMember>
              <TeamImageWrapper>
                <TeamImage src="/images/chef1.jpg" alt="Chef Mohammed Alaoui" />
              </TeamImageWrapper>
              <TeamName>Mohammed Alaoui</TeamName>
              <TeamPosition>Executive Chef & Founder</TeamPosition>
              <TeamBio>
                With over 20 years of experience in fine dining, Chef Mohammed brings his mastery of traditional Moroccan and French cuisines to create KOYAKO's signature dishes.
              </TeamBio>
            </TeamMember>
            
            <TeamMember>
              <TeamImageWrapper>
                <TeamImage src="/images/chef2.jpg" alt="Chef Fatima Benhaddou" />
              </TeamImageWrapper>
              <TeamName>Fatima Benhaddou</TeamName>
              <TeamPosition>Head Chef</TeamPosition>
              <TeamBio>
                Chef Fatima specializes in innovative flavor combinations and artistic plating, contributing her creative vision to KOYAKO's ever-evolving menu inspired by Moroccan traditions.
              </TeamBio>
            </TeamMember>
            
            <TeamMember>
              <TeamImageWrapper>
                <TeamImage src="/images/chef3.jpg" alt="Youssef El Fassi" />
              </TeamImageWrapper>
              <TeamName>Youssef El Fassi</TeamName>
              <TeamPosition>Pastry Chef</TeamPosition>
              <TeamBio>
                Youssef creates KOYAKO's exquisite desserts, combining traditional Moroccan sweet techniques with modern presentation to provide the perfect end to your meal.
              </TeamBio>
            </TeamMember>
            
            <TeamMember>
              <TeamImageWrapper>
                <TeamImage src="/images/staff1.jpg" alt="Leila Mansouri" />
              </TeamImageWrapper>
              <TeamName>Leila Mansouri</TeamName>
              <TeamPosition>Restaurant Manager</TeamPosition>
              <TeamBio>
                Leila ensures that every guest at KOYAKO receives exceptional service, overseeing operations to maintain our high standards of authentic Moroccan hospitality.
              </TeamBio>
            </TeamMember>
          </TeamGrid>
        </Container>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
