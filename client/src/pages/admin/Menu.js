import React, { useState } from "react";
import styled from "styled-components";
import { 
  FaUtensils, 
  FaSearch, 
  FaPlusCircle, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaToggleOn, 
  FaToggleOff
} from "react-icons/fa";

const MenuContainer = styled.div``;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.5rem;
`;

const CategoryTab = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary : '#6c757d'};
  border: none;
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuTable = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }
  
  th {
    font-weight: 500;
    color: #6c757d;
    font-size: 0.9rem;
    background-color: #f8f9fa;
  }
  
  tbody tr {
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: #f9f9f9;
    }
  }
`;

const MenuItemImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  background-color: #f8f9fa;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.color || '#6c757d'};
  cursor: pointer;
  font-size: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.isActive ? '#198754' : '#6c757d'};
  cursor: pointer;
  font-size: 1.2rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  font-size: 0.7rem;
  background-color: ${props => {
    switch (props.type) {
      case 'vegetarian':
        return '#e8f5e9';
      case 'vegan':
        return '#e0f2f1';
      case 'gluten-free':
        return '#fff3e0';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'vegetarian':
        return '#2e7d32';
      case 'vegan':
        return '#00796b';
      case 'gluten-free':
        return '#e65100';
      default:
        return '#6c757d';
    }
  }};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

const PageInfo = styled.div`
  color: #6c757d;
  font-size: 0.9rem;
`;

const PaginationButtons = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : '#6c757d'};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : '#ddd'};
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : '#f8f9fa'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Sample categories
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "appetizers", name: "Appetizers" },
    { id: "mainCourses", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" }
  ];
  
  // Sample menu data
  const menuItems = [
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with wild mushrooms, truffle oil, and Parmesan cheese",
      price: 14.99,
      image: "/images/menu/appetizer1.jpg",
      category: "appetizers",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isActive: true,
      popularity: 4.8
    },
    {
      id: 2,
      name: "Tuna Tartare",
      description: "Fresh tuna, avocado, cucumber, and wasabi mayo with wonton crisps",
      price: 18.99,
      image: "/images/menu/appetizer2.jpg",
      category: "appetizers",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isActive: true,
      popularity: 4.7
    },
    {
      id: 5,
      name: "Pan-Seared Salmon",
      description: "Norwegian salmon with herb butter, asparagus, and lemon risotto",
      price: 28.99,
      image: "/images/menu/main1.jpg",
      category: "mainCourses",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
      isActive: true,
      popularity: 4.9
    },
    {
      id: 6,
      name: "Filet Mignon",
      description: "8oz grass-fed beef tenderloin, truffle mashed potatoes, seasonal vegetables, and red wine reduction",
      price: 42.99,
      image: "/images/menu/main2.jpg",
      category: "mainCourses",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: true,
      isActive: true,
      popularity: 5.0
    },
    {
      id: 11,
      name: "Classic Tiramisu",
      description: "Espresso-soaked ladyfingers, mascarpone cream, and cocoa powder",
      price: 10.99,
      image: "/images/menu/dessert1.jpg",
      category: "desserts",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isActive: false,
      popularity: 4.6
    },
    {
      id: 16,
      name: "Signature Cocktail",
      description: "Vodka, elderflower liqueur, fresh lime, mint, and soda water",
      price: 12.99,
      image: "/images/menu/drink1.jpg",
      category: "drinks",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
      isActive: true,
      popularity: 4.5
    }
  ];
  
  // Filter menu items based on active category
  const filteredMenuItems = menuItems.filter(item => 
    activeCategory === "all" || item.category === activeCategory
  );
  
  return (
    <MenuContainer>
      <ActionBar>
        <SearchBox>
          <FaSearch color="#6c757d" />
          <SearchInput 
            placeholder="Search menu items" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>
        
        <AddButton>
          <FaPlusCircle />
          Add New Item
        </AddButton>
      </ActionBar>
      
      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab 
            key={category.id} 
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>
      
      <MenuTable>
        <Table>
          <thead>
            <tr>
              <th style={{ width: '60px' }}>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Dietary</th>
              <th>Status</th>
              <th>Popularity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMenuItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <MenuItemImage style={{ backgroundImage: `url(${item.image})` }} />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{categories.find(cat => cat.id === item.category)?.name || 'Unknown'}</td>
                <td>
                  <TagsContainer>
                    {item.isVegetarian && <Tag type="vegetarian">Vegetarian</Tag>}
                    {item.isVegan && <Tag type="vegan">Vegan</Tag>}
                    {item.isGlutenFree && <Tag type="gluten-free">Gluten-Free</Tag>}
                  </TagsContainer>
                </td>
                <td>
                  <ToggleButton isActive={item.isActive}>
                    {item.isActive ? <FaToggleOn /> : <FaToggleOff />}
                  </ToggleButton>
                </td>
                <td>{item.popularity.toFixed(1)}</td>
                <td>
                  <ActionButtons>
                    <ActionButton title="View">
                      <FaEye />
                    </ActionButton>
                    <ActionButton title="Edit" color={props => props.theme?.colors?.primary}>
                      <FaEdit />
                    </ActionButton>
                    <ActionButton title="Delete" color="#dc3545">
                      <FaTrash />
                    </ActionButton>
                  </ActionButtons>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MenuTable>
      
      <Pagination>
        <PageInfo>
          Showing 1 to 6 of 18 entries
        </PageInfo>
        <PaginationButtons>
          <PageButton disabled>&lt;</PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>&gt;</PageButton>
        </PaginationButtons>
      </Pagination>
    </MenuContainer>
  );
};

export default Menu;
