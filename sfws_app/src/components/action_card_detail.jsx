import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import card_df from '../sfws_2022.json';

function Action_card_detail() {

    let params = useParams();

      return (

          <div>
              
             <NavLink to={'/'}>
              <p className = 'i_will_show_link'>Click here to go back to the home page.</p>
             </NavLink>

               <div>
                    {card_df.filter(card => card.ap_number === +params.ap_number).map(chosen_action => (
                        <div key={chosen_action.ap_number}>
                            <h4>Action {chosen_action.ap_number} - {chosen_action.title}</h4>
                            <p>{chosen_action.text}</p>
                            <h4>What does success look like?</h4>
                            <p>{chosen_action.success}</p>
                            <h4>Which partners are involved?</h4>
                            <p>{chosen_action.partners}</p>
                            <h4>June 2022 update</h4>
                            <p>{chosen_action.latest_update}</p>

                            <h4>This action is {chosen_action.status}</h4>



                        </div>
                    ))}
                </div>
        </div>
  );
}

export default Action_card_detail