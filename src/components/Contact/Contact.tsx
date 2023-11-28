import React from 'react';
import styled from 'styled-components';


// Importing the background image
const backgroundImage = require('../img/doggo.jpeg');


// Styled component for the page container  
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    background-size: cover; 
    background-position: top center;
  }
`;

// Styled component for the navigation bar
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  background: transparent;
`;

// Styled component for navigation items
const NavItem = styled.h1`
  color: #fefefe;
  text-decoration: none;
  font-weight: bold;
  font-family: Papyrus, fantasy;
  margin-top: 1em;
  margin-left: 12em;
  margin-bottom: 2em;
  font-size: 32px;

  @media (max-width: 768px) {
    margin-left: 1em; 
    font-size: 24px; 
  }
`;

// Styled component for the description text
const Description = styled.p`
  color: #fefefe;
  font-family: Papyrus, fantasy;
  max-width: 500px;
  margin-top: 1em; 
  margin-left: 4em;
  margin-bottom: 10em;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-left: 1em; 
    margin-right: 1em; 
    font-size: 18px; 
    margin-bottom: 2em; 
  }
`;


// Main App component
const App: React.FC = () => {
  return (
    <PageContainer>
      <Navbar>
        <NavItem>Get in Touch with The Pets Store Crew!</NavItem>
      </Navbar>
      <Description>
      <b>Phone:</b><br/>
For a pawsitively swift response, give us a ring! <br/><b>Dial (123) 456-7890 </b>
      
      <br/><br/><b>Email:</b><br/>
If you're the pen pal type, shoot us an email at <b>pets@storeemail.com</b> 

<br/><br/><b>Address:</b><br/>
Want to sniff us out in person? Our den is at:
<b>123 Furry Friends Lane,
Whiskerville, CAT 90210</b>
      </Description>
    </PageContainer>
  );
};

export default App;
