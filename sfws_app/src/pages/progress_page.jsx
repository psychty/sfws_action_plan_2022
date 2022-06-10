import Progress_component from '../components/progress'
import Filtered_by_status_cards from '../components/filtered_by_status_cards'
import { NavLink } from 'react-router-dom';

function Progress_summary() {
  return (
    <div>
      <NavLink to={'/'}>
         <p className = 'i_will_show_link'>Click here to go back to the home page.</p>
      </NavLink>
      
      <Progress_component />
      <Filtered_by_status_cards />
  
        </div>
  )
}

export default Progress_summary; 