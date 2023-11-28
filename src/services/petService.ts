import axios from "axios";
import { dataType } from "../types";

export const fetchData = async () => {
    const response = await fetch('https://eulerity-hackathon.appspot.com/pets');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  export const download  = (pets:dataType[]) =>{
    pets.map(pet =>{
      axios({
        url: pet?.url, 
        method: 'GET',
        responseType: 'blob', 
    }).then((response) => {
        // creating file link in browser's memory
        const href = URL.createObjectURL(response.data);
    
        // creates "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', pet?.title + '.jpg'); //or any other extension
        document.body.appendChild(link);
        link.click();
    
        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    });
    })
    
    
  }

  

