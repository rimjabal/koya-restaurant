import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GalleryContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const PageHeader = styled.section`
  position: relative;
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/gallery-header.jpg") no-repeat center center/cover;
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

const GallerySection = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

// Fix for active prop warning - using $active instead of active as a transient prop
const FilterButton = styled.button`
  background-color: ${props => props.$active ? props.theme.colors.primary : "transparent"};
  color: ${props => props.$active ? "white" : props.theme.colors.text};
  border: 1px solid ${props => props.$active ? props.theme.colors.primary : "#ddd"};
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.$active ? props.theme.colors.primary : "#f5f5f5"};
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: ${props => props.size === "large" ? "400px" : props.size === "medium" ? "350px" : "300px"};
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.medium};
  
  &:hover img {
    transform: scale(1.1);
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const OverlayTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const OverlayText = styled.p`
  font-size: 0.9rem;
`;

const ViewButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-direction: column;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 80%;
  object-fit: contain;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const LightboxCaption = styled.div`
  color: white;
  padding: 1rem;
  text-align: center;
  max-width: 600px;
`;

const LightboxNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 2rem;
`;

const LightboxButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

// Gallery data
const galleryData = [
  {
    id: 1,
    title: "Restaurant Interior",
    description: "Our elegantly designed dining space with ambient lighting",
    image: "/images/gallery/interior1.jpg",
    category: "interior",
    size: "large",
  },
  {
    id: 2,
    title: "Signature Dish",
    description: "Pan-seared sea bass with seasonal vegetables",
    image: "/images/gallery/food1.jpg",
    category: "food",
    size: "medium",
  },
  {
    id: 3,
    title: "Private Dining Room",
    description: "Intimate space for special celebrations",
    image: "/images/gallery/interior2.jpg",
    category: "interior",
    size: "small",
  },
  {
    id: 4,
    title: "Cocktail Craftsmanship",
    description: "Our mixologist preparing signature drinks",
    image: "/images/gallery/drinks1.jpg",
    category: "drinks",
    size: "medium",
  },
  {
    id: 5,
    title: "Chef's Special",
    description: "Truffle-infused risotto with wild mushrooms",
    image: "/images/gallery/food2.jpg",
    category: "food",
    size: "large",
  },
  {
    id: 6,
    title: "Seasonal Dessert",
    description: "Deconstructed lemon tart with berry compote",
    image: "/images/gallery/food3.jpg",
    category: "food",
    size: "small",
  },
  {
    id: 7,
    title: "Bar Area",
    description: "Our well-stocked bar with premium spirits",
    image: "/images/gallery/interior3.jpg",
    category: "interior",
    size: "medium",
  },
  {
    id: 8,
    title: "Wine Collection",
    description: "Select wines from our extensive cellar",
    image: "/images/gallery/drinks2.jpg",
    category: "drinks",
    size: "large",
  },
  {
    id: 9,
    title: "Outdoor Terrace",
    description: "Alfresco dining with city views",
    image: "/images/gallery/interior4.jpg",
    category: "interior",
    size: "medium",
  },
  {
    id: 10,
    title: "Gourmet Appetizer",
    description: "Seared scallops with citrus reduction",
    image: "/images/gallery/food4.jpg",
    category: "food",
    size: "small",
  },
  {
    id: 11,
    title: "Craft Beer Selection",
    description: "Local and imported craft beers",
    image: "/images/gallery/drinks3.jpg",
    category: "drinks",
    size: "medium",
  },
  {
    id: 12,
    title: "Chef's Table",
    description: "Exclusive dining experience with our head chef",
    image: "/images/gallery/interior5.jpg",
    category: "interior",
    size: "large",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState({
    open: false,
    currentImage: null,
  });
  
  const filteredImages = filter === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === filter);
    
  const openLightbox = (id) => {
    setLightbox({
      open: true,
      currentImage: galleryData.findIndex((item) => item.id === id),
    });
    document.body.style.overflow = "hidden";
  };
  
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      open: false,
    });
    document.body.style.overflow = "auto";
  };
  
  const navigateLightbox = (direction) => {
    const totalImages = galleryData.length;
    let newIndex;
    
    if (direction === "next") {
      newIndex = (lightbox.currentImage + 1) % totalImages;
    } else {
      newIndex = (lightbox.currentImage - 1 + totalImages) % totalImages;
    }
    
    setLightbox({
      ...lightbox,
      currentImage: newIndex,
    });
  };
  
  const currentImage = lightbox.open ? galleryData[lightbox.currentImage] : null;
  
  return (
    <GalleryContainer>
      <PageHeader>
        <div>
          <PageTitle>Our Gallery</PageTitle>
          <PageSubtitle>
            A visual journey through our restaurant, cuisine, and atmosphere.
          </PageSubtitle>
        </div>
      </PageHeader>
      
      <GallerySection>
        <Container>
          <FilterButtons>
            <FilterButton 
              $active={filter === "all"} 
              onClick={() => setFilter("all")}
            >
              All
            </FilterButton>
            <FilterButton 
              $active={filter === "interior"} 
              onClick={() => setFilter("interior")}
            >
              Restaurant
            </FilterButton>
            <FilterButton 
              $active={filter === "food"} 
              onClick={() => setFilter("food")}
            >
              Food
            </FilterButton>
            <FilterButton 
              $active={filter === "drinks"} 
              onClick={() => setFilter("drinks")}
            >
              Drinks
            </FilterButton>
          </FilterButtons>
          
          <GalleryGrid
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredImages.map((item) => (
              <GalleryItem 
                key={item.id}
                size={item.size}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GalleryImage src={item.image} alt={item.title} />
                <ImageOverlay className="overlay">
                  <OverlayTitle>{item.title}</OverlayTitle>
                  <OverlayText>{item.description}</OverlayText>
                  <ViewButton onClick={() => openLightbox(item.id)}>
                    View Larger
                  </ViewButton>
                </ImageOverlay>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </Container>
      </GallerySection>
      
      {lightbox.open && (
        <LightboxOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CloseButton onClick={closeLightbox}></CloseButton>
          <LightboxImage 
            src={currentImage.image} 
            alt={currentImage.title} 
          />
          <LightboxCaption>
            <h3>{currentImage.title}</h3>
            <p>{currentImage.description}</p>
          </LightboxCaption>
          <LightboxNav>
            <LightboxButton onClick={() => navigateLightbox("prev")}>
              
            </LightboxButton>
            <LightboxButton onClick={() => navigateLightbox("next")}>
              
            </LightboxButton>
          </LightboxNav>
        </LightboxOverlay>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
