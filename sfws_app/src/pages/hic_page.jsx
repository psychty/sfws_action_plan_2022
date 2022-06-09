import Filtered_cards from '../components/filtered_cards';
import Chosen_hic from '../components/chosen_hic';

function HIC() {

  return (
    <div>
      <Chosen_hic /> {/* here we want to bring in information about the chosen high impact change*/}
      <Filtered_cards /> {/* Here we wamt tp show the relevant cards based on the chosen_hic*/}
    </div>
  )
}

export default HIC