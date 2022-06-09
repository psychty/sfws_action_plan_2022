import React from 'react'
import styled from 'styled-components';
import {Link, useParams, NavLink, useLocation } from 'react-router-dom'
import hic_df from '../hic.json';

function Chosen_hic() {
  
let params = useParams();

    return (

<div> 
        <NavLink to={'/'}>
        <p className = 'i_will_show_link'>Click here to go back to the home page.</p>
        </NavLink>



            {hic_df.filter(item => item.hic_class === params.hic_class).map(chosen_hic_info => (

            <div key={chosen_hic_info.hic_class}>
                <ChosenHicItemDiv className = {params.hic_class}>
                    <p>{chosen_hic_info.hic_title}</p>
                </ChosenHicItemDiv>
                <p>{chosen_hic_info.hic_label}</p>
                <div>
                <h3>What did the Department of Health say about this high impact change?</h3>
                <p>{chosen_hic_info.hic_description}</p>
                </div>
            </div>
            ))}

    </div>
  )
}

const ChosenHicItemDiv = styled.div `
min-width: 90px;
min-height: 90px;
width: 6vw;
height: 6vw;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
padding: 5px;
margin: 3px;
`
export default Chosen_hic