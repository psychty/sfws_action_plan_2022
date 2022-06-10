import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation} from 'react-router-dom';
import ten_hic_df from '../hic.json';

function Ten_hic() {

 const location=useLocation()

    return (
    <div>                  
            <div className = 'hic_buttons'>
                {ten_hic_df.map(hic => (
                    <SLink to={'/hic/' + hic.hic_class} key = {hic.hic_class} >

{/* We are using this component on both the home page and on the high impact focus page. But I want the circles to be smaller on the focus page. So here I have used useLocation and an if statement to say if the path is home then use the regular div style but if it is not (i.e. on the /hic/ route) then create divs with the smaller style */}

{/* This way, I can reuse the same react component twice, which is as i understand, the point of react. */}

                {location.pathname !== '/' && 
                <HicItemSmallerDiv className = {hic.hic_class}>
                <p>{hic.hic_title}</p>
                </HicItemSmallerDiv>
                    }

                {location.pathname === '/' && 
                <HicItemDiv className = {hic.hic_class}>
                <p>{hic.hic_title}</p>
                </HicItemDiv>
                    }
                      
                    </SLink>          
                ))}
            </div>
    
    </div>

    ); 

}

const HicItemDiv = styled.div `
min-width: 85px;
min-height: 85px;
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

const HicItemSmallerDiv = styled.div`
min-width: 60px;
min-height: 60px;
width: 3vw;
height: 3vw;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
padding: 5px;
margin: 3px;
`
const SLink = styled(NavLink)`
border-radius: 50%;

&.active{
    background: #000;
}`

export default Ten_hic