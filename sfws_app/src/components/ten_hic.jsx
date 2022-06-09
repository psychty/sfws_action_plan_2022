import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// This function just returns a div
function Ten_hic() {

    const [hics, setHIC] = useState([]);
    useEffect(() => {getHIC(); },[])
    
    // This function grabs the data - local data much be in the public folder
    const getHIC = async () => {
       const api = await fetch('hic.json');
       const data = await api.json();
       setHIC(data)
       }

    return (
        <div>
            <p>This page shows the 2019-22 Smokefree West Sussex Tobacco Control Strategy actions. These are a collection of actions agreed by members of the Smokefree West Sussex Partnership to take forward the tobacco control agenda in the county. Actions are coloured by the 2008 Department of Health (now called the Department of Health and Social Care) 10 high impact changes to achieve tobacco control.</p>
            <p>You can view the <a className = 'i_will_show_link' href = 'https://webarchive.nationalarchives.gov.uk/ukgwa/20130123193737/http://www.dh.gov.uk/en/Publicationsandstatistics/Publications/PublicationsPolicyAndGuidance/DH_084847'>Excellence in tobacco control: 10 High Impact Changes to achieve tobacco control report</a> on the government archive website.</p>
            <p>Click on a high impact change icon below to find out more.</p>
       
    <div className = 'hic_buttons'>
        {hics.map((hic)=> {
            return (
            <NavLink to={'/hic/' + hic.hic_class} key = {hic.hic_class} >
                <HicItemDiv className = {hic.hic_class}>
                 <p>{hic.hic_title}</p>
                </HicItemDiv>
            </NavLink>          
            );
         })}
    </div>

</div>

    );
        }

const HicItemDiv = styled.div `
min-width: 90px;
min-height: 90px;
width: 5vw;
height: 5vw;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
padding: 5px;
margin: 3px;
`

export default Ten_hic