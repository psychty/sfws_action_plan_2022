import { useParams, NavLink } from 'react-router-dom';
import card_df from '../sfws_2022.json';
import styled from "styled-components";

function Action_card_detail() {

    let params = useParams();

      return (

          <div>
              
             <NavLink to={'/'}>
              <p className = 'i_will_show_link'>Click here to go back to the home page.</p>
             </NavLink>

               <div className='action_card'>
                    {card_df.filter(card => card.ap_number === +params.ap_number).map(chosen_action => (
                        <div key={chosen_action.ap_number}>
                            <h4>Action {chosen_action.ap_number} - {chosen_action.title}</h4>           
                            <CardDiv className={chosen_action.hic_}><p>{chosen_action.hic_title}</p></CardDiv>
                            <p>{chosen_action.text}</p>
                            <h4>What does success look like?</h4>
                            <p>{chosen_action.success}</p>
                            <h4>Which partners are involved?</h4>
                            <p>{chosen_action.partners}</p>
                            <h4>June 2022 update</h4>
                            <p>{chosen_action.latest_update}</p>
                            <div className='flexy_beast_3'>
                            <h4>This action is {chosen_action.status.toLocaleLowerCase()}</h4>
                            <StatusDiv className={chosen_action.status.toLowerCase()}></StatusDiv>
                            </div>
                </div>
                    ))}
                </div>
        </div>
  );
}

const CardDiv = styled.div `
min-width: 65px;
min-height: 65px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 4vw;
height: 4vw;
padding: 5px;
margin: 3px;

p{
padding-left: 0px;
font-size: .7rem;
}
`

const StatusDiv = styled.div `
position: relative;
padding: 0px;
margin-left: 10px;
z-index: 10;
left: 0px;
bottom: 0px;
border-radius: 50%;
width: 20px;
height: 20px;
flex-shrink: 0
`

export default Action_card_detail