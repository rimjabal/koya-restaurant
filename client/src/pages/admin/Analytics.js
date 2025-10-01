import React, { useState } from "react";
import styled from "styled-components";
import { 
  FaUsers, 
  FaUtensils, 
  FaCalendarCheck, 
  FaMoneyBillWave,
  FaChartLine,
  FaChartPie,
  FaChartBar,
  FaDownload,
  FaFilter
} from "react-icons/fa";

const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.$primary ? props.theme.colors.primary : 'white'};
  color: ${props => props.$primary ? 'white' : '#6c757d'};
  border: 1px solid ${props => props.$primary ? props.theme.colors.primary : '#ddd'};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.$primary ? props.theme.colors.primaryDark : '#f8f9fa'};
  }
`;

const DateRangeSelector = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const DateOption = styled.button`
  background-color: ${props => props.$active ? props.theme.colors.primary : 'white'};
  color: ${props => props.$active ? 'white' : '#6c757d'};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.$active ? props.theme.colors.primaryDark : '#f8f9fa'};
  }
`;

const StatCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: ${props => props.$color}20;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StatTitle = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StatChange = styled.div`
  font-size: 0.85rem;
  color: ${props => props.$positive ? '#28a745' : '#dc3545'};
`;

const ChartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ChartTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

// Placeholder for chart - in a real app, you'd use a charting library
const ChartPlaceholder = styled.div`
  height: 300px;
  background-color: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
`;

const TableContainer = styled.div`
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

const ProgressBar = styled.div`
  height: 6px;
  background-color: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 3px;
  background-color: ${props => props.$color};
  width: ${props => props.$percentage}%;
`;

const Analytics = () => {
  const [dateRange, setDateRange] = useState("month");
  
  // Sample data for statistics
  const stats = {
    totalRevenue: 24580.50,
    revenueChange: 12.8,
    reservations: 342,
    reservationsChange: 8.5,
    customers: 520,
    customersChange: 15.2,
    orders: 1890,
    ordersChange: 5.4
  };
  
  // Sample data for top selling items
  const topSellingItems = [
    { id: 1, name: "Filet Mignon", category: "Main Courses", sales: 215, revenue: 9245.85, percentage: 90 },
    { id: 2, name: "Truffle Arancini", category: "Appetizers", sales: 189, revenue: 2835.11, percentage: 80 },
    { id: 3, name: "Pan-Seared Salmon", category: "Main Courses", sales: 156, revenue: 4523.44, percentage: 65 },
    { id: 4, name: "Classic Tiramisu", category: "Desserts", sales: 142, revenue: 1559.58, percentage: 55 },
    { id: 5, name: "Signature Cocktail", category: "Drinks", sales: 118, revenue: 1529.82, percentage: 45 }
  ];
  
  // Sample data for reservations by time
  const reservationsByTime = [
    { time: "10:00 - 12:00", count: 42, percentage: 12 },
    { time: "12:00 - 14:00", count: 98, percentage: 28 },
    { time: "14:00 - 16:00", count: 65, percentage: 19 },
    { time: "16:00 - 18:00", count: 38, percentage: 11 },
    { time: "18:00 - 20:00", count: 124, percentage: 36 },
    { time: "20:00 - 22:00", count: 85, percentage: 25 }
  ];
  
  return (
    <AnalyticsContainer>
      <Header>
        <HeaderTitle>Analytics Dashboard</HeaderTitle>
        <ActionButtons>
          <DateRangeSelector>
            <DateOption 
              $active={dateRange === "week"}
              onClick={() => setDateRange("week")}
            >
              Week
            </DateOption>
            <DateOption 
              $active={dateRange === "month"}
              onClick={() => setDateRange("month")}
            >
              Month
            </DateOption>
            <DateOption 
              $active={dateRange === "year"}
              onClick={() => setDateRange("year")}
            >
              Year
            </DateOption>
          </DateRangeSelector>
          
          <Button>
            <FaFilter />
            Filter
          </Button>
          <Button $primary>
            <FaDownload />
            Export Report
          </Button>
        </ActionButtons>
      </Header>
      
      <StatCards>
        <StatCard>
          <StatIcon color="#4285f4">
            <FaMoneyBillWave />
          </StatIcon>
          <StatTitle>Total Revenue</StatTitle>
          <StatValue>${stats.totalRevenue.toLocaleString()}</StatValue>
          <StatChange positive={stats.revenueChange > 0}>
            {stats.revenueChange > 0 ? "+" : ""}{stats.revenueChange}% from previous period
          </StatChange>
        </StatCard>
        
        <StatCard>
          <StatIcon color="#ea4335">
            <FaCalendarCheck />
          </StatIcon>
          <StatTitle>Reservations</StatTitle>
          <StatValue>{stats.reservations}</StatValue>
          <StatChange positive={stats.reservationsChange > 0}>
            {stats.reservationsChange > 0 ? "+" : ""}{stats.reservationsChange}% from previous period
          </StatChange>
        </StatCard>
        
        <StatCard>
          <StatIcon color="#fbbc05">
            <FaUsers />
          </StatIcon>
          <StatTitle>New Customers</StatTitle>
          <StatValue>{stats.customers}</StatValue>
          <StatChange positive={stats.customersChange > 0}>
            {stats.customersChange > 0 ? "+" : ""}{stats.customersChange}% from previous period
          </StatChange>
        </StatCard>
        
        <StatCard>
          <StatIcon color="#34a853">
            <FaUtensils />
          </StatIcon>
          <StatTitle>Total Orders</StatTitle>
          <StatValue>{stats.orders}</StatValue>
          <StatChange positive={stats.ordersChange > 0}>
            {stats.ordersChange > 0 ? "+" : ""}{stats.ordersChange}% from previous period
          </StatChange>
        </StatCard>
      </StatCards>
      
      <ChartContainer>
        <ChartHeader>
          <ChartTitle>Revenue Overview</ChartTitle>
        </ChartHeader>
        <ChartPlaceholder>
          <FaChartLine size={40} />
          <div style={{ marginLeft: '1rem' }}>
            Revenue chart would display here using a chart library
          </div>
        </ChartPlaceholder>
      </ChartContainer>
      
      <TwoColumnGrid>
        <ChartContainer>
          <ChartHeader>
            <ChartTitle>Top Selling Items</ChartTitle>
          </ChartHeader>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Sales</th>
                  <th>Revenue</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {topSellingItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div>
                        <div style={{ fontWeight: '500' }}>{item.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>{item.category}</div>
                      </div>
                    </td>
                    <td>{item.sales}</td>
                    <td>${item.revenue.toFixed(2)}</td>
                    <td>
                      <ProgressBar>
                        <ProgressFill 
                          percentage={item.percentage} 
                          color={props => props.theme.colors.primary} 
                        />
                      </ProgressBar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </ChartContainer>
        
        <ChartContainer>
          <ChartHeader>
            <ChartTitle>Customer Demographics</ChartTitle>
          </ChartHeader>
          <ChartPlaceholder>
            <FaChartPie size={40} />
            <div style={{ marginLeft: '1rem' }}>
              Customer demographics chart would display here
            </div>
          </ChartPlaceholder>
        </ChartContainer>
      </TwoColumnGrid>
      
      <TwoColumnGrid>
        <ChartContainer>
          <ChartHeader>
            <ChartTitle>Reservations by Time</ChartTitle>
          </ChartHeader>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Count</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {reservationsByTime.map((item, index) => (
                  <tr key={index}>
                    <td>{item.time}</td>
                    <td>{item.count}</td>
                    <td>
                      <ProgressBar>
                        <ProgressFill 
                          percentage={item.percentage * 2} 
                          color="#fbbc05" 
                        />
                      </ProgressBar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </ChartContainer>
        
        <ChartContainer>
          <ChartHeader>
            <ChartTitle>Monthly Revenue Trend</ChartTitle>
          </ChartHeader>
          <ChartPlaceholder>
            <FaChartBar size={40} />
            <div style={{ marginLeft: '1rem' }}>
              Monthly revenue trend chart would display here
            </div>
          </ChartPlaceholder>
        </ChartContainer>
      </TwoColumnGrid>
    </AnalyticsContainer>
  );
};

export default Analytics;
