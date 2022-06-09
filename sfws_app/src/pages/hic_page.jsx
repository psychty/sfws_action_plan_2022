import Filtered_by_hic_cards from '../components/filtered_by_hic_cards';
import Ten_hic from '../components/ten_hic';
import Chosen_hic from '../components/chosen_hic';

function HIC() {

  return (
    <div>
      <h4>High Impact Change in focus</h4>
      <Ten_hic />
      <Chosen_hic /> {/* here we want to bring in information about the chosen high impact change*/}
      <Filtered_by_hic_cards /> {/* Here we wamt tp show the relevant cards based on the chosen_hic*/}
    </div>
  )
}

export default HIC