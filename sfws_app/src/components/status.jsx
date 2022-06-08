import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// This function just returns a div
function Action_status() {
    return (
        <div>
            <p>You can also look at just those actions which are complete or in progress.</p>
        
        <div className="status_button">
        <NavLink to={'/incomplete_actions'}><StatusItemDiv className="status_button_in_progress">In progress</StatusItemDiv> </NavLink>
        <NavLink to={'/complete_actions'}><StatusItemDiv className="status_button_complete">Complete</StatusItemDiv> </NavLink>
        </div>
        </div>
    )
}

const StatusItemDiv = styled.div `
min-width: 70px;
min-height: 70px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 5vw;
height: 5vw;
border-radius: 50%;
padding: 5px;
margin: 3px;



`


export default Action_status