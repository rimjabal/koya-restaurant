import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWineGlassAlt, FaLeaf, FaBreadSlice } from "react-icons/fa";

const MenuContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const PageHeader = styled.section`
  position: relative;
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/menu-header.jpg") no-repeat center center/cover;
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

const MenuSection = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MenuNav = styled.div`
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
const MenuButton = styled.button`
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

const MenuCategory = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h2`
  font-size: 2.5rem;
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

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MenuItem = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const MenuImageContainer = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.small};
  
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const MenuContent = styled.div`
  flex-grow: 1;
`;

const MenuItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const MenuItemTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
`;

const MenuItemPrice = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;

const MenuItemDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const MenuItemTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MenuItemTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  background-color: ${props => {
    switch (props.type) {
      case "vegetarian":
        return "#e8f5e9";
      case "vegan":
        return "#e0f2f1";
      case "gluten-free":
        return "#fff3e0";
      default:
        return "#f5f5f5";
    }
  }};
  color: ${props => {
    switch (props.type) {
      case "vegetarian":
        return "#2e7d32";
      case "vegan":
        return "#00796b";
      case "gluten-free":
        return "#e65100";
      default:
        return props.theme.colors.text;
    }
  }};
`;

// Mock menu data
const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls infused with black truffle and Parmesan, served with truffle aioli",
      price: 80,
      image: "/images/menu/appetizer1.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 2,
      name: "Tuna Tartare",
      description: "Fresh tuna diced and seasoned with sesame oil, avocado, and crispy wonton chips",
      price: 130,
      image: "/images/menu/appetizer2.jpg",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 3,
      name: "Caprese Salad",
      description: "Heirloom tomatoes, buffalo mozzarella, fresh basil, and balsamic reduction",
      price: 70,
      image: "/images/menu/appetizer3.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: true,
    },
    {
      id: 4,
      name: "Shrimp Cocktail",
      description: "Chilled jumbo shrimp with classic cocktail sauce and lemon",
      price: 90,
      image: "/images/menu/appetizer4.jpg",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
  ],
  mainCourses: [
    {
      id: 5,
      name: "Filet Mignon",
      description: "8oz Prime beef tenderloin with truffle butter, garlic mashed potatoes and seasonal vegetables",
      price: 190,
      image: "/images/menu/main1.jpg",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
    {
      id: 6,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with lemon herb butter, wild rice pilaf and asparagus",
      price: 160,
      image: "/images/menu/main2.jpg",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
    {
      id: 7,
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle, wild mushrooms, and Parmesan cream sauce",
      price: 150,
      image: "/images/menu/main3.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 8,
      name: "Rack of Lamb",
      description: "Herb-crusted New Zealand lamb rack, mint jus, roasted fingerling potatoes and glazed carrots",
      price: 220,
      image: "/images/menu/main4.jpg",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
    {
      id: 9,
      name: "Sea Bass",
      description: "Pan-seared Chilean sea bass with citrus beurre blanc, saffron risotto and broccolini",
      price: 210,
      image: "/images/menu/main5.jpg",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
    },
    {
      id: 10,
      name: "Vegetable Risotto",
      description: "Creamy Arborio rice with seasonal vegetables, Parmesan and white truffle oil",
      price: 120,
      image: "/images/menu/main6.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: true,
    },
  ],
  desserts: [
    {
      id: 11,
      name: "Chocolate Soufflé",
      description: "Decadent chocolate soufflé with vanilla bean ice cream and berry compote",
      price: 70,
      image: "/images/menu/dessert1.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 12,
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard with caramelized sugar crust",
      price: 60,
      image: "/images/menu/dessert2.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: true,
    },
    {
      id: 13,
      name: "New York Cheesecake",
      description: "Creamy cheesecake with graham cracker crust and seasonal berry sauce",
      price: 65,
      image: "/images/menu/dessert3.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 14,
      name: "Fresh Berry Pavlova",
      description: "Light meringue topped with fresh cream and seasonal berries",
      price: 60,
      image: "/images/menu/dessert4.jpg",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: true,
    },
  ],
  drinks: [
    {
      id: 15,
      name: "Signature Cocktails",
      description: "Selection of house specialty cocktails crafted by our master mixologists",
      price: 70,
      image: "/images/menu/drink1.jpg",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
    },
    {
      id: 16,
      name: "Fine Wines",
      description: "Curated selection of international wines available by the glass or bottle",
      price: "Various",
      image: "/images/menu/drink2.jpg",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
    },
    {
      id: 17,
      name: "Craft Beers",
      description: "Selection of local and imported craft beers",
      price: 50,
      image: "/images/menu/drink3.jpg",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: false,
    },
    {
      id: 18,
      name: "Premium Non-Alcoholic Options",
      description: "House-made sodas, fresh juices, and mocktails",
      price: "Various",
      image: "/images/menu/drink4.jpg",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filterMenuItems = (category) => {
    if (category === "all") {
      return {
        appetizers: menuData.appetizers,
        mainCourses: menuData.mainCourses,
        desserts: menuData.desserts,
        drinks: menuData.drinks,
      };
    }
    
    if (category === "vegetarian" || category === "vegan" || category === "gluten-free") {
      const filteredData = {};
      Object.keys(menuData).forEach((key) => {
        filteredData[key] = menuData[key].filter((item) => {
          if (category === "vegetarian") return item.isVegetarian;
          if (category === "vegan") return item.isVegan;
          if (category === "gluten-free") return item.isGlutenFree;
          return false;
        });
      });
      return filteredData;
    }
    
    return {
      [category]: menuData[category],
    };
  };
  
  const filteredMenu = filterMenuItems(activeCategory);
  
  return (
    <MenuContainer>
      <PageHeader>
        <div>
          <PageTitle>Our Menu</PageTitle>
          <PageSubtitle>
            Explore our carefully crafted menu featuring the finest ingredients and culinary expertise.
          </PageSubtitle>
        </div>
      </PageHeader>
      
      <MenuSection>
        <Container>
          <MenuNav>
            <MenuButton 
              $active={activeCategory === "all"} 
              onClick={() => setActiveCategory("all")}
            >
              All
            </MenuButton>
            <MenuButton 
              $active={activeCategory === "appetizers"} 
              onClick={() => setActiveCategory("appetizers")}
            >
              Appetizers
            </MenuButton>
            <MenuButton 
              $active={activeCategory === "mainCourses"} 
              onClick={() => setActiveCategory("mainCourses")}
            >
              Main Courses
            </MenuButton>
            <MenuButton 
              $active={activeCategory === "desserts"} 
              onClick={() => setActiveCategory("desserts")}
            >
              Desserts
            </MenuButton>
            <MenuButton 
              $active={activeCategory === "drinks"} 
              onClick={() => setActiveCategory("drinks")}
            >
              Drinks
            </MenuButton>
            <MenuButton 
              $active={activeCategory === "vegetarian"} 
              onClick={() => setActiveCategory("vegetarian")}
            >
              Vegetarian
            </MenuButton>
            <MenuButton 
              $active={activeCategory === "vegan"} 
              onClick={() => setActiveCategory("vegan")}
            >
              Vegan
            </MenuButton>
            <MenuButton 
              $active={activeCategory === "gluten-free"} 
              onClick={() => setActiveCategory("gluten-free")}
            >
              Gluten Free
            </MenuButton>
          </MenuNav>
          
          {filteredMenu.appetizers && filteredMenu.appetizers.length > 0 && (
            <MenuCategory
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CategoryTitle>Appetizers</CategoryTitle>
              <MenuGrid>
                {filteredMenu.appetizers.map((item) => (
                  <MenuItem key={item.id}>
                    <MenuImageContainer>
                      <MenuImage src={item.image} alt={item.name} />
                    </MenuImageContainer>
                    <MenuContent>
                      <MenuItemHeader>
                        <MenuItemTitle>{item.name}</MenuItemTitle>
                        <MenuItemPrice>{item.price} DHS</MenuItemPrice>
                      </MenuItemHeader>
                      <MenuItemDescription>{item.description}</MenuItemDescription>
                      <MenuItemTags>
                        {item.isVegetarian && (
                          <MenuItemTag type="vegetarian">
                            <FaLeaf size={10} /> Vegetarian
                          </MenuItemTag>
                        )}
                        {item.isVegan && (
                          <MenuItemTag type="vegan">
                            <FaLeaf size={10} /> Vegan
                          </MenuItemTag>
                        )}
                        {item.isGlutenFree && (
                          <MenuItemTag type="gluten-free">
                            <FaBreadSlice size={10} /> Gluten-free
                          </MenuItemTag>
                        )}
                      </MenuItemTags>
                    </MenuContent>
                  </MenuItem>
                ))}
              </MenuGrid>
            </MenuCategory>
          )}
          
          {filteredMenu.mainCourses && filteredMenu.mainCourses.length > 0 && (
            <MenuCategory
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CategoryTitle>Main Courses</CategoryTitle>
              <MenuGrid>
                {filteredMenu.mainCourses.map((item) => (
                  <MenuItem key={item.id}>
                    <MenuImageContainer>
                      <MenuImage src={item.image} alt={item.name} />
                    </MenuImageContainer>
                    <MenuContent>
                      <MenuItemHeader>
                        <MenuItemTitle>{item.name}</MenuItemTitle>
                        <MenuItemPrice>{item.price} DHS</MenuItemPrice>
                      </MenuItemHeader>
                      <MenuItemDescription>{item.description}</MenuItemDescription>
                      <MenuItemTags>
                        {item.isVegetarian && (
                          <MenuItemTag type="vegetarian">
                            <FaLeaf size={10} /> Vegetarian
                          </MenuItemTag>
                        )}
                        {item.isVegan && (
                          <MenuItemTag type="vegan">
                            <FaLeaf size={10} /> Vegan
                          </MenuItemTag>
                        )}
                        {item.isGlutenFree && (
                          <MenuItemTag type="gluten-free">
                            <FaBreadSlice size={10} /> Gluten-free
                          </MenuItemTag>
                        )}
                      </MenuItemTags>
                    </MenuContent>
                  </MenuItem>
                ))}
              </MenuGrid>
            </MenuCategory>
          )}
          
          {filteredMenu.desserts && filteredMenu.desserts.length > 0 && (
            <MenuCategory
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CategoryTitle>Desserts</CategoryTitle>
              <MenuGrid>
                {filteredMenu.desserts.map((item) => (
                  <MenuItem key={item.id}>
                    <MenuImageContainer>
                      <MenuImage src={item.image} alt={item.name} />
                    </MenuImageContainer>
                    <MenuContent>
                      <MenuItemHeader>
                        <MenuItemTitle>{item.name}</MenuItemTitle>
                        <MenuItemPrice>{item.price} DHS</MenuItemPrice>
                      </MenuItemHeader>
                      <MenuItemDescription>{item.description}</MenuItemDescription>
                      <MenuItemTags>
                        {item.isVegetarian && (
                          <MenuItemTag type="vegetarian">
                            <FaLeaf size={10} /> Vegetarian
                          </MenuItemTag>
                        )}
                        {item.isVegan && (
                          <MenuItemTag type="vegan">
                            <FaLeaf size={10} /> Vegan
                          </MenuItemTag>
                        )}
                        {item.isGlutenFree && (
                          <MenuItemTag type="gluten-free">
                            <FaBreadSlice size={10} /> Gluten-free
                          </MenuItemTag>
                        )}
                      </MenuItemTags>
                    </MenuContent>
                  </MenuItem>
                ))}
              </MenuGrid>
            </MenuCategory>
          )}
          
          {filteredMenu.drinks && filteredMenu.drinks.length > 0 && (
            <MenuCategory
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CategoryTitle>Drinks</CategoryTitle>
              <MenuGrid>
                {filteredMenu.drinks.map((item) => (
                  <MenuItem key={item.id}>
                    <MenuImageContainer>
                      <MenuImage src={item.image} alt={item.name} />
                    </MenuImageContainer>
                    <MenuContent>
                      <MenuItemHeader>
                        <MenuItemTitle>{item.name}</MenuItemTitle>
                        <MenuItemPrice>{typeof item.price === 'string' ? item.price : `${item.price} DHS`}</MenuItemPrice>
                      </MenuItemHeader>
                      <MenuItemDescription>{item.description}</MenuItemDescription>
                      <MenuItemTags>
                        {item.isVegetarian && (
                          <MenuItemTag type="vegetarian">
                            <FaLeaf size={10} /> Vegetarian
                          </MenuItemTag>
                        )}
                        {item.isVegan && (
                          <MenuItemTag type="vegan">
                            <FaLeaf size={10} /> Vegan
                          </MenuItemTag>
                        )}
                        {item.isGlutenFree && (
                          <MenuItemTag type="gluten-free">
                            <FaBreadSlice size={10} /> Gluten-free
                          </MenuItemTag>
                        )}
                      </MenuItemTags>
                    </MenuContent>
                  </MenuItem>
                ))}
              </MenuGrid>
            </MenuCategory>
          )}
          
          {Object.values(filteredMenu).every(array => array.length === 0) && (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <h3>No items found in this category</h3>
              <p>Please try another filter option</p>
            </div>
          )}
        </Container>
      </MenuSection>
    </MenuContainer>
  );
};

export default Menu;
