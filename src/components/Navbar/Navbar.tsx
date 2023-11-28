import styled from 'styled-components';
import React from 'react';
import { FaPaw } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


// Styled component for the navigation bar
const Navbar = styled.nav`
  background-color: #bc9b96;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  align-items: center;
  height: 160px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
`;


// Styled component for the navigation header
const NavHeading = styled.h1`
  text-align: right;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px 0;
  }
`;

// Styled component for the navigation menu
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

// Styled component for navigation items
const NavItem = styled.a`
  padding: 10px 10px;
  cursor: pointer;
  margin-right: 100px;
  text-decoration: none;
  color: #000000;

  &:hover {
    background-color: #825959;
  }

  @media (max-width: 768px) {
    margin: 10px 5px;
    font-size: 18px;
  }
`;

// Styled component for the Paw icon
const StyledPawIcon = styled(FaPaw)`
  font-size: 60px;
  padding-left: 35px;
  color: black;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 40px;
    padding: 10px 0;
  }
`;

// Navbar component
const MyNavbar: React.FC = () => {

  const navigate = useNavigate();
  
  // Render the Navbar
  return (
    <Navbar>
      <NavHeading onClick={() => navigate('/')}>The Pets Store</NavHeading>
      <StyledPawIcon onClick={() => navigate('/')} />
      <NavMenu>
        <NavItem onClick={() => navigate('/about')}>About</NavItem>
        <NavItem onClick={() => navigate('/contact')}>Contact</NavItem>
      </NavMenu>
    </Navbar>
  );
};

export default MyNavbar;
