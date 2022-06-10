// I want this to be able to take a parameter (be in complete status or partner or hic) and return only those appropriate cards from the action plan
import styled from "styled-components";
import cards_df from '../sfws_2022.json';
import progress_df from '../progress.json';
import { NavLink, useLocation, useParams} from 'react-router-dom';

function Filtered_by_status_cards() {
    const location=useLocation()

    return(
        <div> 

    {location.pathname === '/progress/Complete' && 
     <div>
     <h3>Complete actions</h3>
     <p>These are coloured by the high impact change, click/tap on an action to find out more.</p>
            <div className="action_cards_wrapper">
                    {cards_df.filter(card => card.status === 'Complete').map(chosen_cards => (
                    <NavLink to={'/action/' + chosen_cards.ap_number} key={chosen_cards.ap_number}>
                        <div>
                            <Chosen_card_item className={chosen_cards.hic_}>
                                <h4 className="action_card_title">{chosen_cards.title}</h4>
                                <p className="action_card_text">{chosen_cards.text}</p>
                                <p className="action_number">{chosen_cards.ap_number}</p>
                            </Chosen_card_item>
                        </div>
                    </NavLink>    
                    ))}
            </div>    
     </div>
     }

     
    {location.pathname === '/progress/Incomplete' && 
        <div>
        <h3>Incomplete actions</h3>
        <p>These are coloured by the high impact change, click/tap on an action to find out more.</p>
            <div className="action_cards_wrapper">               
                    {cards_df.filter(card => card.status === 'Incomplete').map(chosen_cards => (
                    <NavLink to={'/action/' + chosen_cards.ap_number} key={chosen_cards.ap_number}>
                        <div>
                            <Chosen_card_item  className={chosen_cards.hic_}>
                                <h4 className="action_card_title">{chosen_cards.title}</h4>
                                <p className="action_card_text">{chosen_cards.text}</p>
                                <p className="action_number">{chosen_cards.ap_number}</p>
                            </Chosen_card_item>
                        </div>
                    </NavLink>    
                    ))}
         </div>    
            </div>
     }
             
        </div>
      );
    }

const Chosen_card_item = styled.div `
   height: 15vh;
//    width: 16vw;
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

export default Filtered_by_status_cards
