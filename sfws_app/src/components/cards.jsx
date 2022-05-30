import { useEffect, useState } from "react";
// import styled from 'styled-components';
// import {Splide, SplideSlide} from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';

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

return <div>
   {cards.map((card) => {
      return(
         // <Wrapper>
         //    <h3>SFWS Actions</h3>
         //    {cards.map((card)=> {
         // return (
         //    <Card_item>
         //       <p>{card.title}</p>
         //    </Card_item>
         //    );
         //  })}
         // </Wrapper> 

         <div key = {card.ap_number}>
            <p>{card.title}</p>
            </div>
   );

  })}
        </div>;
   
}

// const Wrapper = styled.div ` 
// margin: 4rem 0rem;
// `
// const Card_item = styled.div `
//    min-height: 20rem;
//    border-radius: 2rem;
// `
export default Cards