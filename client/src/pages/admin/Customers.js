import React, { useState } from "react";
import styled from "styled-components";
import { 
  FaSearch,
  FaUserPlus,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaEllipsisV,
  FaRegStar,
  FaStar,
  FaDownload,
  FaFilter
} from "react-icons/fa";

const CustomersContainer = styled.div``;

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

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.primary ? props.theme.colors.primary : 'white'};
  color: ${props => props.primary ? 'white' : '#6c757d'};
  border: 1px solid ${props => props.primary ? props.theme.colors.primary : '#ddd'};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.primary ? props.theme.colors.primaryDark : '#f8f9fa'};
  }
`;

const CustomersTable = styled.div`
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

const IconButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
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

const ActionsDropdown = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 10;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: #333;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
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
    background-color: ${props => props.active ? props.theme.colors.primaryDark : '#f8f9fa'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} color="#FFC107" />);
    } else {
      stars.push(<FaRegStar key={i} color="#FFC107" />);
    }
  }
  
  return <div style={{ display: 'flex', gap: '0.25rem' }}>{stars}</div>;
};

const CustomerDropdown = ({ onView, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ActionsDropdown>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <FaEllipsisV />
      </IconButton>
      <DropdownMenu visible={isOpen}>
        <DropdownItem onClick={() => {
          onView();
          setIsOpen(false);
        }}>
          View Profile
        </DropdownItem>
        <DropdownItem onClick={() => {
          onEdit();
          setIsOpen(false);
        }}>
          Edit
        </DropdownItem>
        <DropdownItem onClick={() => {
          onDelete();
          setIsOpen(false);
        }}>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </ActionsDropdown>
  );
};

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample customers data
  const customers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+212-666-123456",
      registeredDate: "2023-01-15",
      visits: 12,
      lastVisit: "2023-06-10",
      rating: 5,
      totalSpent: 1250.50
    },
    {
      id: 2,
      name: "Emma Johnson",
      email: "emma.j@example.com",
      phone: "+212-677-654321",
      registeredDate: "2023-02-20",
      visits: 8,
      lastVisit: "2023-06-08",
      rating: 4,
      totalSpent: 780.25
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "mbrown@example.com",
      phone: "+212-688-111222",
      registeredDate: "2023-01-05",
      visits: 15,
      lastVisit: "2023-06-12",
      rating: 5,
      totalSpent: 1845.75
    },
    {
      id: 4,
      name: "Sophia Williams",
      email: "sophia.w@example.com",
      phone: "+212-699-333444",
      registeredDate: "2023-03-10",
      visits: 6,
      lastVisit: "2023-05-28",
      rating: 3,
      totalSpent: 520.00
    },
    {
      id: 5,
      name: "David Lee",
      email: "david.lee@example.com",
      phone: "+212-655-555666",
      registeredDate: "2023-04-22",
      visits: 4,
      lastVisit: "2023-06-05",
      rating: 4,
      totalSpent: 375.50
    }
  ];
  
  const handleViewCustomer = (id) => {
    console.log("View customer:", id);
  };
  
  const handleEditCustomer = (id) => {
    console.log("Edit customer:", id);
  };
  
  const handleDeleteCustomer = (id) => {
    console.log("Delete customer:", id);
  };
  
  return (
    <CustomersContainer>
      <ActionBar>
        <SearchBox>
          <FaSearch color="#6c757d" />
          <SearchInput 
            placeholder="Search customers" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>
        
        <ActionButtons>
          <Button>
            <FaFilter />
            Filter
          </Button>
          <Button>
            <FaDownload />
            Export
          </Button>
          <Button primary>
            <FaUserPlus />
            Add Customer
          </Button>
        </ActionButtons>
      </ActionBar>
      
      <CustomersTable>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Registered</th>
              <th>Visits</th>
              <th>Last Visit</th>
              <th>Rating</th>
              <th>Total Spent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>#{customer.id}</td>
                <td>{customer.name}</td>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaEnvelope color="#6c757d" size={12} />
                      {customer.email}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaPhone color="#6c757d" size={12} />
                      {customer.phone}
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaCalendarAlt color="#6c757d" size={14} />
                    {new Date(customer.registeredDate).toLocaleDateString('en-US', { 
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </td>
                <td>{customer.visits}</td>
                <td>
                  {new Date(customer.lastVisit).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </td>
                <td>
                  <StarRating rating={customer.rating} />
                </td>
                <td>${customer.totalSpent.toFixed(2)}</td>
                <td>
                  <CustomerDropdown 
                    onView={() => handleViewCustomer(customer.id)}
                    onEdit={() => handleEditCustomer(customer.id)}
                    onDelete={() => handleDeleteCustomer(customer.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CustomersTable>
      
      <Pagination>
        <PageInfo>
          Showing 1 to 5 of 20 entries
        </PageInfo>
        <PaginationButtons>
          <PageButton disabled>&lt;</PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>&gt;</PageButton>
        </PaginationButtons>
      </Pagination>
    </CustomersContainer>
  );
};

export default Customers;
