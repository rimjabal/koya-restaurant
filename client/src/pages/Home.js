import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainer = styled.div`
  width: 100%;
`;

const Hero = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/hero-bg.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Button = styled(Link)`
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: 1px solid ${props => props.theme.colors.primary};
    
    &:hover {
      background-color: transparent;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    
    &:hover {
      background-color: white;
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const About = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageContainer = styled.div`
  position: relative;
  height: 500px;
  
  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 2rem;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutTitle = styled.h2`
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

const AboutText = styled.p`
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.lightText};
`;

const Features = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.lightBg};
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FeaturesTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
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

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  color: ${props => props.theme.colors.lightText};
`;

const Menu = styled.section`
  padding: 5rem 0;
`;

const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const MenuTitle = styled.h2`
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const MenuItem = styled.div`
  background-color: white;
  box-shadow: ${props => props.theme.shadows.small};
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const MenuImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  
  ${MenuItem}:hover & {
    transform: scale(1.1);
  }
`;

const MenuContent = styled.div`
  padding: 1.5rem;
`;

const MenuItemTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const MenuItemPrice = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const MenuItemDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 1.5rem;
`;

const CTA = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/cta-bg.jpg") no-repeat center center/cover;
  padding: 5rem 0;
  color: white;
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  margin-bottom: 2rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience Fine Dining at KOYAKO
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Indulge in exquisite culinary creations in an elegant atmosphere
          </HeroSubtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button to="/menu" className="primary">
              View Menu
            </Button>
            <Button to="/reservations" className="secondary">
              Make a Reservation
            </Button>
          </ButtonGroup>
        </HeroContent>
      </Hero>
      
      <About>
        <AboutContainer>
          <AboutImageContainer>
            <AboutImage src="/images/about-img.jpg" alt="KOYA Restaurant" />
          </AboutImageContainer>
          <AboutContent>
            <AboutTitle>Our Story</AboutTitle>
            <AboutText>
              Founded in 2020, KOYAKO has established itself as one of the premier fine dining destinations. 
              Our philosophy revolves around creating memorable culinary experiences with the freshest, 
              locally-sourced ingredients and innovative techniques.
            </AboutText>
            <AboutText>
              Led by our award-winning chef, our team is dedicated to providing an extraordinary 
              gastronomic journey complemented by impeccable service and an elegant atmosphere.
            </AboutText>
            <Button to="/about" className="primary">
              Learn More
            </Button>
          </AboutContent>
        </AboutContainer>
      </About>
      
      <Features>
        <FeaturesContainer>
          <FeaturesTitle>Why Choose Us</FeaturesTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon></FeatureIcon>
              <FeatureTitle>Fresh Ingredients</FeatureTitle>
              <FeatureText>
                We use only the freshest, locally-sourced ingredients to create our exquisite dishes.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon></FeatureIcon>
              <FeatureTitle>Expert Chefs</FeatureTitle>
              <FeatureText>
                Our team of experienced chefs brings creativity and expertise to every plate.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon></FeatureIcon>
              <FeatureTitle>Elegant Atmosphere</FeatureTitle>
              <FeatureText>
                Enjoy your meal in our beautifully designed space with impeccable service.
              </FeatureText>
            </FeatureCard>
          </FeatureGrid>
        </FeaturesContainer>
      </Features>
      
      <Menu>
        <MenuContainer>
          <MenuTitle>Featured Menu</MenuTitle>
          <MenuGrid>
            <MenuItem>
              <MenuImageContainer>
                <MenuImage src="/images/dish1.jpg" alt="Dish 1" />
              </MenuImageContainer>
              <MenuContent>
                <MenuItemTitle>Truffle Pasta</MenuItemTitle>
                <MenuItemPrice>150 DHS</MenuItemPrice>
                <MenuItemDescription>
                  Handmade pasta with black truffle, wild mushrooms, and Parmesan cream sauce.
                </MenuItemDescription>
                <Button to="/menu" className="primary">
                  View Details
                </Button>
              </MenuContent>
            </MenuItem>
            <MenuItem>
              <MenuImageContainer>
                <MenuImage src="/images/dish2.jpg" alt="Dish 2" />
              </MenuImageContainer>
              <MenuContent>
                <MenuItemTitle>Filet Mignon</MenuItemTitle>
                <MenuItemPrice>190 DHS</MenuItemPrice>
                <MenuItemDescription>
                  8oz Prime beef tenderloin with truffle butter, garlic mashed potatoes and seasonal vegetables.
                </MenuItemDescription>
                <Button to="/menu" className="primary">
                  View Details
                </Button>
              </MenuContent>
            </MenuItem>
            <MenuItem>
              <MenuImageContainer>
                <MenuImage src="/images/dish3.jpg" alt="Dish 3" />
              </MenuImageContainer>
              <MenuContent>
                <MenuItemTitle>Chocolate Soufflé</MenuItemTitle>
                <MenuItemPrice>70 DHS</MenuItemPrice>
                <MenuItemDescription>
                  Decadent chocolate soufflé with vanilla bean ice cream and berry compote.
                </MenuItemDescription>
                <Button to="/menu" className="primary">
                  View Details
                </Button>
              </MenuContent>
            </MenuItem>
          </MenuGrid>
          <Button to="/menu" className="primary">
            View Full Menu
          </Button>
        </MenuContainer>
      </Menu>
      
      <CTA>
        <CTAContainer>
          <CTATitle>Reserve Your Table Today</CTATitle>
          <CTAText>
            Experience the exquisite flavors and elegant atmosphere at KOYAKO Restaurant.
            Make a reservation now to secure your table.
          </CTAText>
          <Button to="/reservations" className="primary">
            Make a Reservation
          </Button>
        </CTAContainer>
      </CTA>
    </HomeContainer>
  );
};

export default Home;
