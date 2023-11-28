import React from 'react';
import styled from 'styled-components';


// Styled component for the footer element
const StyledFooter = styled.footer`
  background-color: #12141e;
  padding-top: 12px;
  background-color: #9c6e6e;
`;

const Container = styled.div`
 // Potential place for container-specific styles
`;

// Flex container for layout within the footer
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; 
  background-color: #9c6e6e;

  @media (min-width: 640px) { 
    width: 100%;
  }

  @media (min-width: 768px) { 
    gap: 2rem; 
  }
`;


// Styled component for footer text
const FooterText = styled.p`
  font-size: 12px; 
  line-height: 5; 
  font-weight: 100;
  color: #000000;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #9c6e6e;
  font-weight: bold;
  font-family: 'Droid Sans Mono', monospace;

  @media (min-width: 768px) { 
    font-size: 25px; 
  }
`;


// Footer component
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      {/*================= footer top ================ */}
      <Container>
        <FlexContainer>
          <div className='w-full sm:w-1/2'> 
            <FooterText>
              &copy; {year} The Pets Store. All rights reserved
            </FooterText>
          </div>
        </FlexContainer>
      </Container>
      {/*================= footer top end ================ */}
    </StyledFooter>
  );
};

export default Footer;