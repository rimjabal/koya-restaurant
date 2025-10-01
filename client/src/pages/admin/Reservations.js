import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { 
  FaCalendarAlt, 
  FaSearch, 
  FaFilter, 
  FaEllipsisH, 
  FaCheck, 
  FaTimes, 
  FaEye, 
  FaTrash, 
  FaEdit,
  FaSpinner
} from "react-icons/fa";

const ReservationsContainer = styled.div``;

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

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const DateFilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const DateInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const ReservationsTable = styled.div`
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

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.$status) {
      case 'confirmed':
        return '#d1e7dd';
      case 'pending':
        return '#fff3cd';
      case 'cancelled':
        return '#f8d7da';
      case 'completed':
        return '#e2e3e5';
      default:
        return '#e9ecef';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'confirmed':
        return '#0f5132';
      case 'pending':
        return '#856404';
      case 'cancelled':
        return '#721c24';
      case 'completed':
        return '#41464b';
      default:
        return '#6c757d';
    }
  }};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ActionsDropdown = styled.div`
  position: relative;
`;

const DropdownToggle = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
  z-index: 10;
  min-width: 160px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const DropdownItem = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  svg {
    font-size: 0.8rem;
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
  background-color: ${props => props.$active ? props.theme.colors.primary : 'white'};
  color: ${props => props.$active ? 'white' : '#6c757d'};
  border: 1px solid ${props => props.$active ? props.theme.colors.primary : '#ddd'};
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.$active ? props.theme.colors.primary : '#f8f9fa'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  svg {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Alert = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: ${props => props.type === 'error' ? '#f8d7da' : '#d1e7dd'};
  color: ${props => props.type === 'error' ? '#721c24' : '#0f5132'};
`;

const Reservations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalReservations, setTotalReservations] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");
  const [refreshData, setRefreshData] = useState(0);
  
  // Fetch reservations from API
  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Build query params
        const params = new URLSearchParams();
        params.append('page', currentPage);
        params.append('limit', 10);
        
        if (searchTerm) {
          params.append('search', searchTerm);
        }
        
        if (startDate) {
          params.append('startDate', startDate);
        }
        
        if (endDate) {
          params.append('endDate', endDate);
        }
        
        if (statusFilter) {
          params.append('status', statusFilter);
        }
        
        const response = await fetch(`http://localhost:5000/api/reservations?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }
        
        const data = await response.json();
        
        setReservations(data.data);
        setTotalPages(data.totalPages);
        setTotalReservations(data.total);
        
      } catch (error) {
        console.error('Error fetching reservations:', error);
        setError(error.message || 'Failed to load reservations');
      } finally {
        setLoading(false);
      }
    };
    
    fetchReservations();
  }, [currentPage, searchTerm, startDate, endDate, statusFilter, refreshData]);
  
  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };
  
  const handleSearch = () => {
    setCurrentPage(1);
  };
  
  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/reservations/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update reservation status');
      }
      
      // Refresh the reservations data
      setRefreshData(prev => prev + 1);
      
    } catch (error) {
      console.error('Error updating reservation status:', error);
      setError(error.message || 'Failed to update reservation status');
    }
  };
  
  const handleDeleteReservation = async (id) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/reservations/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete reservation');
        }
        
        // Refresh the reservations data
        setRefreshData(prev => prev + 1);
        
      } catch (error) {
        console.error('Error deleting reservation:', error);
        setError(error.message || 'Failed to delete reservation');
      }
    }
  };
  
  // Function to handle filter application
  const applyFilters = () => {
    setCurrentPage(1);
    setRefreshData(prev => prev + 1);
  };

  return (
    <ReservationsContainer>
      <ActionBar>
        <SearchBox>
          <FaSearch color="#6c757d" />
          <SearchInput 
            placeholder="Search by name, email, or phone" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </SearchBox>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <DateFilterContainer>
            <DateInput 
              type="date"
              placeholder="Start date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <DateInput 
              type="date"
              placeholder="End date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </DateFilterContainer>
          
          <FilterButton onClick={applyFilters}>
            <FaFilter />
            Filter
          </FilterButton>
        </div>
      </ActionBar>
      
      {error && <Alert type="error">{error}</Alert>}
      
      {loading ? (
        <LoadingSpinner>
          <FaSpinner size={40} />
        </LoadingSpinner>
      ) : (
        <>
          <ReservationsTable>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Guests</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations && reservations.length > 0 ? (
                  reservations.map((reservation) => (
                    <tr key={reservation._id}>
                      <td>{reservation._id.substring(0, 8)}</td>
                      <td>{reservation.name}</td>
                      <td>
                        {reservation.email}<br />
                        <small>{reservation.phone}</small>
                      </td>
                      <td>{reservation.guests}</td>
                      <td>{new Date(reservation.date).toLocaleDateString()}</td>
                      <td>{reservation.time}</td>
                      <td>
                        <StatusBadge $status={reservation.status}>
                          {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                        </StatusBadge>
                      </td>
                      <td>{new Date(reservation.createdAt).toLocaleDateString()}</td>
                      <td>
                        {reservation.status !== 'confirmed' && (
                          <ActionButton 
                            title="Confirm" 
                            onClick={() => handleStatusChange(reservation._id, 'confirmed')}
                          >
                            <FaCheck />
                          </ActionButton>
                        )}
                        {reservation.status !== 'canceled' && (
                          <ActionButton 
                            title="Cancel"
                            onClick={() => handleStatusChange(reservation._id, 'canceled')}
                          >
                            <FaTimes />
                          </ActionButton>
                        )}
                        <ActionsDropdown>
                          <DropdownToggle onClick={() => toggleDropdown(reservation._id)}>
                            <FaEllipsisH />
                          </DropdownToggle>
                          <DropdownMenu isOpen={activeDropdown === reservation._id}>
                            <DropdownItem>
                              <FaEye />
                              View Details
                            </DropdownItem>
                            <DropdownItem>
                              <FaEdit />
                              Edit
                            </DropdownItem>
                            <DropdownItem 
                              style={{ color: '#dc3545' }}
                              onClick={() => handleDeleteReservation(reservation._id)}
                            >
                              <FaTrash />
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </ActionsDropdown>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" style={{ textAlign: 'center', padding: '2rem' }}>
                      No reservations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </ReservationsTable>
          
          <Pagination>
            <PageInfo>
              Showing {reservations && reservations.length > 0 ? (currentPage - 1) * 10 + 1 : 0} to {Math.min(currentPage * 10, totalReservations)} of {totalReservations} entries
            </PageInfo>
            <PaginationButtons>
              <PageButton 
                disabled={currentPage <= 1} 
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                &lt;
              </PageButton>
              
              {totalPages && [...Array(totalPages).keys()].map(page => (
                <PageButton 
                  key={page + 1}
                  $active={currentPage === page + 1}
                  onClick={() => setCurrentPage(page + 1)}
                >
                  {page + 1}
                </PageButton>
              ))}
              
              <PageButton 
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                &gt;
              </PageButton>
            </PaginationButtons>
          </Pagination>
        </>
      )}
    </ReservationsContainer>
  );
};

export default Reservations;
