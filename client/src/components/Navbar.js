import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${props => props.$isScrolled ? "rgba(0, 0, 0, 0.85)" : "transparent"};
  box-shadow: ${props => props.$isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
`;

const Logo = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  font-family: "Playfair Display", serif;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 280px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 6rem 2rem;
    transition: all 0.5s ease;
    z-index: 999;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  
  @media (max-width: 768px) {
    margin: 20px 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${props => props.$active ? "700" : "400"};
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    width: ${props => props.$active ? "100%" : "0"};
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.2rem;
    padding: 10px 0;
    
    &::after {
      bottom: 5px;
    }
  }
`;

const ReservationButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 12px 25px;
    width: 100%;
    text-align: center;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close menu when changing route
  useEffect(() => {
    closeMenu();
  }, [location]);
  
  return (
    <Nav $isScrolled={isScrolled}>
      <Logo to="/">Koyako</Logo>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      <NavMenu $isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>
          <FaTimes />
        </CloseButton>
        <NavItem>
          <NavLink to="/" $active={location.pathname === "/"}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" $active={location.pathname === "/about"}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/menu" $active={location.pathname === "/menu"}>Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/gallery" $active={location.pathname === "/gallery"}>Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" $active={location.pathname === "/contact"}>Contact</NavLink>
        </NavItem>
        <NavItem>
          <ReservationButton to="/reservations">Make Reservation</ReservationButton>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
