import React from 'react';
import styled from 'styled-components';


// Importing background image
const backgroundImage = require('../img/doggo.jpeg');


// Styled-component for the main container of the page
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  // Media query for responsiveness on screens smaller than 768px
  @media (max-width: 768px) {
    background-size: cover; 
    background-position: top center;
  }
`;


// Styled-component for the navigation bar
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  background: transparent;
`;


// Styled-component for navigation items
const NavItem = styled.h1`
  color: #fefefe;
  text-decoration: none;
  font-weight: bold;
  font-family: Papyrus, fantasy;
  margin-top: 1em;
  margin-left: 15em;
  margin-bottom: 2em;
  font-size: 32px;

  @media (max-width: 768px) {
    margin-left: 1em; // Adjust margin for smaller screens
    font-size: 24px; // Smaller font size for smaller screens
  }
`;


// Styled-component for the description text
const Description = styled.p`
  color: #fefefe;
  font-family: Papyrus, fantasy;
  max-width: 500px;
  margin-top: 1em; 
  margin-left: 4em;
  margin-bottom: 10em;
  font-size: 24px;


  // Media query for responsiveness on smaller screens
  @media (max-width: 768px) {
    margin-left: 1em; // Adjusting left margin
    margin-right: 1em; 
    font-size: 18px; // Smaller font size for better fit
    margin-bottom: 2em; 
  }
`;


// Main App component
const App: React.FC = () => {
  return (
    <PageContainer>
      <Navbar>
        <NavItem>Welcome to The Pets Store</NavItem>
      </Navbar>
      <Description>
        Our cozy corner for cuddly companions in the heart of Boston! Our sanctuary is more than just a store; it's a vibrant community where animal lovers unite in their passion for pets. <br /><br/>
        
        At The Pets Store, we go beyond the adoption experience. We offer expert advice on pet care, nutrition, and training to help you and your new furry friend get off to the best start.
        Join us at The Pets Store, where little paws make big impressions. <br/> <br/> It's not just about finding a pet; it's about discovering your new best friend!
      </Description>
    </PageContainer>
  );
};

export default App;
