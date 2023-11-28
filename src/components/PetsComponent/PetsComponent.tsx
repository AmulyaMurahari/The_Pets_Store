import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPetsData } from '../../redux/actions/petActions';
import { AppDispatch } from '../../store';
import CardComponent from "../CardComponent/cardComponent";
import "./petsComponent.css";
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import { dataType } from '../../types';
import { download } from '../../services/petService';



// Main component for displaying pets
const PetsComponent = () => {
  
    const dispatch: AppDispatch = useDispatch();
    const [petData,setPetData] = useState<dataType[]>([])
    const [searchTerm, setSearchTerm] =  useState<string>('');
    const [selection,setSelection] = useState(false);
    const [downloadTerm, setDownloadTerm] = useState<string>('');
    const { data, loading, error } = useSelector((state:any) => state.pet);
    const [selected,setSelected] = useState<dataType[]>([]);
    const [isSearch,setIsSearch] = useState(false);


    
  // Fetching pets data on component mount  
  useEffect(() => {
    dispatch(fetchPetsData());
  }, [dispatch]);


  // Update petData state when redux data changes
  useEffect(() => {
    if(data !=null){
      setPetData(data);
    }
  }, [data]);


    const handleSearch = () => {
      if(searchTerm.trim().length === 0 || isSearch){
        setPetData(data);
        setIsSearch(false);
        setSearchTerm('');
      }
      else{
        let temp = petData.filter((item) => (item.title.toLowerCase().includes(searchTerm.toLowerCase())) || (item.description.toLowerCase().includes(searchTerm.toLowerCase())));
        setPetData([...temp]);
        setIsSearch(true);
      }
      }

      function sortByTitleAsc() {
        setPetData(petData.slice().sort((a, b) => a.title.localeCompare(b.title)));
      }
      
      function sortByTitleDesc(){
        setPetData(petData.slice().sort((a, b) => b.title.localeCompare(a.title)));
      }


  const handleDownload = () => {
    if(selected.length >0){
      download(selected)
    }
  }

  const handleSelection =() =>{
    if(!selection){
      setSelection(true);
      setSelected([]);
    }
    else{
      setSelection(false);
    }
   
  }


  const handleSelected = (pet:dataType) =>{
    let temp  = selected;
    let index = temp.indexOf(pet);
    if(index <0){
      setSelected([...temp,pet])
    }
    else{
      temp.splice(index, 1);
      setSelected([...temp]);
    }
  }

   // Render the component
  return(
    <>

  {/* Button and search bar container */}
<ButtonContainer>
     {/* Search functionality */}
    <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search Pets"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>{isSearch?'Clear':'Search'}</SearchButton>
      </SearchBar>
      <Download isVisible = {selection} onClick={() =>{handleDownload()}}>Download</Download>
      <ButtonStyle onClick={() =>sortByTitleAsc()}>Sort A-Z</ButtonStyle>
      <ButtonStyle onClick={() =>sortByTitleDesc()}>Sort Z-A</ButtonStyle>
      <ButtonStyle onClick={() =>{handleSelection()}}>{selection?'Clear':'Select'}</ButtonStyle>
    </ButtonContainer>
      <div className='petsContainer'>
       {petData.length >=0?(
          petData?.map( (items:dataType,key:number) =>(
            <CardComponent key = {key} 
             selection = {selection}
             handleSelected = {handleSelected}
              pet = {items}
             />
          ))
       ):(
        <>
        No pets found.

        </>
       )}
    </div>
    </>
  ); 

};

export default PetsComponent;

interface VisibilityToggleProps {
  isVisible: boolean;
}

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem;
  z-index: 100;
  max-width: 600px; 

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0;
    width: 95%;
    max-width: none; 
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #9c6e6e;
  border-radius: 4px;
  width: 100%; 
  

  @media (max-width: 768px) {
    margin-right: 0;
    
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #9c6e6e;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Droid Sans Mono', monospace;

  &:hover {
    background-color: #683c3c;
  }
`;

const Download = styled.button<VisibilityToggleProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #9c6e6e;
  color: white;
  cursor: pointer;
  font-family: 'Droid Sans Mono', monospace;
  font-weight: bold;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  &:hover {
    background-color: #683c3c;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap; // Wrap the buttons on smaller screens
  gap: 10px; // Add space between wrapped items
  margin: 10px;
`;

const ButtonStyle = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #9c6e6e;
  color: white;
  cursor: pointer;
  font-family: 'Droid Sans Mono', monospace;
  font-weight: bold;

  &:hover {
    background-color: #683c3c;
  }
`;

