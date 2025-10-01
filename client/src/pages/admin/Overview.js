import React from "react";
import styled from "styled-components";
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaUtensils, 
  FaDollarSign, 
  FaArrowUp, 
  FaArrowDown 
} from "react-icons/fa";

const OverviewContainer = styled.div``;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StatTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #6c757d;
  font-weight: 500;
`;

const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${props => props.$bgColor};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StatTrend = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: ${props => props.$isPositive ? '#198754' : '#dc3545'};
`;

const TrendIcon = styled.span`
  margin-right: 0.25rem;
  display: flex;
  align-items: center;
`;

const TrendValue = styled.span``;

const RecentBookingsCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const BookingsTable = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }
  
  th {
    font-weight: 500;
    color: #6c757d;
    font-size: 0.9rem;
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
      default:
        return '#6c757d';
    }
  }};
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const TasksCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TaskCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const TaskLabel = styled.label`
  ${props => props.$completed && `
    text-decoration: line-through;
    color: #6c757d;
  `}
`;

const AddTaskButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #f8f9fa;
  border: 1px dashed #dee2e6;
  border-radius: 4px;
  color: #6c757d;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

const Overview = () => {
  // Mocked data for demonstration
  const stats = [
    { 
      title: "Today's Reservations", 
      value: 24, 
      trend: 12, 
      isPositive: true, 
      icon: <FaCalendarAlt />, 
      bgColor: '#0d6efd' 
    },
    { 
      title: "New Customers", 
      value: 42, 
      trend: 8, 
      isPositive: true, 
      icon: <FaUsers />, 
      bgColor: '#198754' 
    },
    { 
      title: "Popular Dishes", 
      value: 15, 
      trend: 3, 
      isPositive: false, 
      icon: <FaUtensils />, 
      bgColor: '#6f42c1' 
    },
    { 
      title: "Today's Revenue", 
      value: "$2,150", 
      trend: 5, 
      isPositive: true, 
      icon: <FaDollarSign />, 
      bgColor: '#fd7e14' 
    }
  ];
  
  const recentBookings = [
    { 
      id: '12345',
      name: 'John Smith',
      guests: 4,
      date: 'Aug 30, 2025',
      time: '7:00 PM',
      status: 'confirmed'
    },
    { 
      id: '12346',
      name: 'Emily Johnson',
      guests: 2,
      date: 'Aug 30, 2025',
      time: '8:30 PM',
      status: 'confirmed'
    },
    { 
      id: '12347',
      name: 'Michael Davis',
      guests: 6,
      date: 'Aug 31, 2025',
      time: '7:30 PM',
      status: 'pending'
    },
    { 
      id: '12348',
      name: 'Sarah Wilson',
      guests: 3,
      date: 'Aug 31, 2025',
      time: '6:00 PM',
      status: 'confirmed'
    },
    { 
      id: '12349',
      name: 'Robert Brown',
      guests: 2,
      date: 'Aug 31, 2025',
      time: '8:00 PM',
      status: 'cancelled'
    }
  ];
  
  const tasks = [
    { id: 1, text: 'Review weekend reservations', completed: true },
    { id: 2, text: 'Update menu for seasonal specials', completed: false },
    { id: 3, text: 'Order supplies for bar', completed: false },
    { id: 4, text: 'Schedule staff for next week', completed: false },
    { id: 5, text: 'Call wine distributor', completed: true }
  ];
  
  return (
    <OverviewContainer>
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatHeader>
              <StatTitle>{stat.title}</StatTitle>
              <StatIcon $bgColor={stat.bgColor}>
                {stat.icon}
              </StatIcon>
            </StatHeader>
            <StatValue>{stat.value}</StatValue>
            <StatTrend $isPositive={stat.isPositive}>
              <TrendIcon>
                {stat.isPositive ? <FaArrowUp /> : <FaArrowDown />}
              </TrendIcon>
              <TrendValue>{stat.trend}% from last week</TrendValue>
            </StatTrend>
          </StatCard>
        ))}
      </StatsGrid>
      
      <TwoColumnLayout>
        <RecentBookingsCard>
          <CardHeader>
            <CardTitle>Recent Reservations</CardTitle>
            <ViewAllButton>View All</ViewAllButton>
          </CardHeader>
          
          <BookingsTable>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Guests</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>#{booking.id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>
                      <StatusBadge $status={booking.status}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </BookingsTable>
        </RecentBookingsCard>
        
        <TasksCard>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          
          <TaskList>
            {tasks.map((task) => (
              <TaskItem key={task.id}>
                <TaskCheckbox id={`task-${task.id}`} defaultChecked={task.completed} />
                <TaskLabel htmlFor={`task-${task.id}`} $completed={task.completed}>
                  {task.text}
                </TaskLabel>
              </TaskItem>
            ))}
          </TaskList>
          
          <AddTaskButton>+ Add Task</AddTaskButton>
        </TasksCard>
      </TwoColumnLayout>
    </OverviewContainer>
  );
};

export default Overview;
