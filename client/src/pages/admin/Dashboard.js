import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import { 
  FaCalendarAlt, 
  FaUtensils, 
  FaUsers, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt, 
  FaBars,
  FaTimes,
  FaBell
} from "react-icons/fa";

// Admin dashboard components
import Overview from "./Overview";
import Reservations from "./Reservations";
import Menu from "./Menu";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Settings from "./Settings";

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 260px;
  background-color: #212529;
  color: #fff;
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1000;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (min-width: 992px) {
    transform: translateX(0);
  }
`;

const SidebarHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const SidebarNav = styled.nav`
  padding: 1.5rem 0;
`;

const NavItem = styled.div`
  margin-bottom: 0.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  background-color: ${props => props.$active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid ${props => props.$active ? props.theme.colors.primary : 'transparent'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const NavIcon = styled.div`
  margin-right: 0.75rem;
  width: 20px;
  display: flex;
  justify-content: center;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: ${props => props.$sidebarOpen ? '260px' : '0'};
  transition: all 0.3s ease;
  
  @media (max-width: 992px) {
    margin-left: 0;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  margin: 0;
  color: #333;
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const TopBarRight = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 992);
  const [currentPage, setCurrentPage] = useState("Overview");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Extract current page from location
    const path = location.pathname.split('/').pop();
    if (path && path !== 'admin') {
      setCurrentPage(path.charAt(0).toUpperCase() + path.slice(1));
    } else {
      setCurrentPage("Overview");
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Remove authentication token
    localStorage.removeItem('isAdminLoggedIn');
    // Redirect to login page
    navigate('/admin/login');
  };

  return (
    <DashboardContainer>
      <Sidebar $isOpen={sidebarOpen}>
        <SidebarHeader>
          <Logo>KÔYA Admin</Logo>
          <CloseButton onClick={toggleSidebar}>
            <FaTimes />
          </CloseButton>
        </SidebarHeader>
        <SidebarNav>
          <NavItem>
            <NavLink to="/admin" $active={currentPage === "Overview" ? "true" : undefined}>
              <NavIcon><FaChartBar /></NavIcon>
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/reservations" $active={currentPage === "Reservations" ? "true" : undefined}>
              <NavIcon><FaCalendarAlt /></NavIcon>
              Reservations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/menu" $active={currentPage === "Menu" ? "true" : undefined}>
              <NavIcon><FaUtensils /></NavIcon>
              Menu Management
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/customers" $active={currentPage === "Customers" ? "true" : undefined}>
              <NavIcon><FaUsers /></NavIcon>
              Customers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/analytics" $active={currentPage === "Analytics" ? "true" : undefined}>
              <NavIcon><FaChartBar /></NavIcon>
              Analytics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/settings" $active={currentPage === "Settings" ? "true" : undefined}>
              <NavIcon><FaCog /></NavIcon>
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={handleLogout}>
              <NavIcon><FaSignOutAlt /></NavIcon>
              Logout
            </NavLink>
          </NavItem>
        </SidebarNav>
      </Sidebar>
      
      <Content $sidebarOpen={window.innerWidth >= 992 && sidebarOpen}>
        <TopBar>
          <MobileMenuButton onClick={toggleSidebar}>
            <FaBars />
          </MobileMenuButton>
          <PageTitle>{currentPage}</PageTitle>
          <TopBarRight>
            <NotificationButton>
              <FaBell />
              <NotificationBadge>3</NotificationBadge>
            </NotificationButton>
            <UserInfo>
              <UserAvatar>A</UserAvatar>
            </UserInfo>
          </TopBarRight>
        </TopBar>
        
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
