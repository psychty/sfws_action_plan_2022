// I want this to be able to take a parameter (be in complete status or partner or hic) and return only those appropriate cards from the action plan
// import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import cards_df from '../sfws_2022.json';
import { NavLink } from 'react-router-dom';

function Filtered_cards() {

let params = useParams();

return(
    <div> 
        <h3>Actions related to this high impact change</h3>

        <div className = 'action_cards_wrapper'>
        {cards_df.filter(card => card.hic_ === params.hic_class).map(chosen_hic_cards => (

        <NavLink to={'/action/' + chosen_hic_cards.ap_number} key={chosen_hic_cards.ap_number}>
            <div>
                <Chosen_card_item>
                {/* <Chosen_card_item className = {chosen_hic_cards.hic_}> */}
                    <h4 className="action_card_title">{chosen_hic_cards.title}</h4>
                    <p className="action_card_text">{chosen_hic_cards.text}</p>
                    <p className="action_number">{chosen_hic_cards.ap_number}</p>
                </Chosen_card_item>
            </div>
        </NavLink>    
        ))}
        </div>
        </div>
      );
    }

const Chosen_card_item = styled.div `
   height: 15vh;
   width: 18vw;
   padding: 5px;
   padding-left: 10px;
   margin: 5px;
   border-radius: 25px;
   border: 1px solid #c9c9c9;
   overflow: hidden;

.action_number {
   position: relative;
   padding: 0px;
   margin: 0px;
   z-index: 10;
   left: 90%;
   bottom: 0%;
   font-size: 1rem;
   font-family: 'Poppins', serif;
   font-weight: bold;
}

.action_card_title {
    // margin-top: 5px;
    // padding: 5px;
    color: #02103c;
    font-size: .8rem;
 }    

// TODO if the div is bigger then apply no gradient to the text
.action_card_text {
   font-size: .8rem;
   -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
   max-height: 10vh;
}  


`

export default Filtered_cards
