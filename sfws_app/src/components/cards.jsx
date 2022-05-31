import { useEffect, useState } from "react";
import styled from 'styled-components'; // create functions for stylings
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// This function just returns a div
function Cards() {

const [cards, setCards] = useState([]);

useEffect(() => {getActions(); },[])

// This function grabs the data - local data much be in the public folder
const getActions = async () => {
   const api = await fetch('sfws_2022.json');
   const data = await api.json();
   setCards(data)
   }

return (
  <div>
     <Wrapper>
      <h3>SFWS Actions</h3>
     
      <Splide options = {{
         perPage: 3,
         arrows: true,
         pagination: false,
         gap: '15px',
      }}>
       {cards.map((card)=> {
      return (
       <SplideSlide>
        <Card_item className = {card.hic_} key = {card.ap_number}>
          <h4>{card.title}</h4>
          <p>{card.status}</p>
        </Card_item>
       </SplideSlide>
             );
          })}
          </Splide>
         </Wrapper> 
        </div>
);
   }

const Wrapper = styled.div ` 
margin: 4rem 0rem;
`
const Card_item = styled.div `
   // min-height: 20vh;
   // max-height: 40vh;
   height: 40vh;
   max-width: 30vw;
   padding-left: 10px;
   border-radius: 25px;
   border: 1px solid #c9c9c9;
   overflow: hidden;




h4{
   margin-top: 5px;
   color: #ffffff;
}    
`
export default Cards