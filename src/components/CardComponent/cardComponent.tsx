import React, { FunctionComponent,useEffect,useState } from "react";
import "./cardComponent.css";
import styled from 'styled-components';
import { dataType } from "../../types"; 
import moment from 'moment';



// Defining the types for props
type CardProps = {
    selection:boolean;
    handleSelected :(pet:dataType)=>void;
    pet:dataType
}


// Functional component for individual cards
const CardComponent : FunctionComponent<CardProps> = ({selection,pet,handleSelected}) =>{
    const [checked, setChecked] = useState(false);


// useEffect hook to handle selection changes
useEffect(() => {
        if(selection){
            handleSelected(pet);
        }
        if(!selection){
            setChecked(false);
        }
}, [checked,selection]);




    // Card component layout
    return (
        <div className="container">
            <CheckboxContainer isVisible = {selection}>
            <HiddenCheckbox checked={checked} onChange={()=>setChecked(!checked)} />
            <StyledCheckbox checked = {checked} onChange = {()=>setChecked(!checked)} >
            </StyledCheckbox>
          </CheckboxContainer>
         
            <div className="card-image">
                <img src = {pet?.url} />
            </div>
            <div className="card-title">
                <h2>{pet?.title}</h2>
            </div>
            <CardDesc>
                <p>{pet?.description}</p>
            </CardDesc>
            <div className="created-date">
                <p>{moment(pet?.created).format('YYYY-MM-DD')}</p>
            </div>
        </div>
    )
}

export default CardComponent;

// Interface for controlling visibility of components
interface VisibilityToggleProps {
  isVisible: boolean;
}


// Hidden checkbox for accessibility and styling purposes
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    border-radius: 90%;
  `;

// Container for the checkbox, visibility controlled by props
const CheckboxContainer = styled.div<VisibilityToggleProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

// Styled checkbox for custom appearance
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #333;
  border-radius: 90%;
  background-color: ${(props) => (props.checked ? 'f09603' : 'transparent')};
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for card description
const CardDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap; // Wrap the buttons on smaller screens
  gap: 10px; // Add space between wrapped items
  margin: 30px;
`;

const Emptydiv = styled.label`
  min-height: 16px;
`;