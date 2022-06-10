import { NavLink } from 'react-router-dom';
import styled from 'styled-components'; 
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import card_df from '../sfws_2022.json';

function Cards() {

return (
  <div>
     <Wrapper>
      <h3>SFWS Actions</h3>
      <p>The carousel below shows all SFWS actions, you can click on the left and right arrows or click/point on an action and drag them left and right to see other actions.</p>
     
      <Splide options = {{
         perPage: 3,
         arrows: true,
         pagination: false,
         gap: '15px',
      }}>
         
       {card_df.map((card)=> {
      return (
       <SplideSlide key = {card.ap_number}>
        <Card_item className = {card.hic_} >
          <h4>{card.title}</h4>
          <p className = 'action_card_text'>{card.text}</p>
          <p>{card.status}</p>
          <NavLink to={'/action/' + card.ap_number}>
             <p className = 'more_info'>Click here to see more</p>
          </NavLink>   
          <p className = 'action_number'>{card.ap_number}</p>
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
// margin: 4rem 0rem;
`
const Card_item = styled.div `
   // min-height: 20vh;
   // max-height: 30vh;
   height: 30vh;
   max-width: 25vw;
   padding: 5px;
   padding-left: 10px;
   border-radius: 25px;
   border: 1px solid #c9c9c9;
   overflow: hidden;

.action_number {
   position: absolute;
   padding: 0px;
   margin: 0px;
   z-index: 10;
   right: 5%;
   bottom: 0%;
   font-size: 3rem;
   font-family: 'Poppins', serif;
   font-weight: bold;
}

.more_info {
   position: absolute;
   padding: 0px;
   margin: 0px;
   z-index: 10;
   font-weight: bold;
   font-size: 1rem;
 }
 

// TODO if the div is bigger then apply no gradient to the text
.action_card_text {
   -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
   max-height: 18vh;
}

h4{
   margin-top: 5px;
   color: #ffffff;
   font-size: 1.1rem;
}    
`
export default Cards