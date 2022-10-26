import styled from "styled-components";
import { NavLink, useLocation } from 'react-router-dom';
import progress_df from '../progress.json';
import progress_summary_df from '../progress_summary.json';

function Progress_component() { 
 const location=useLocation()

 const complete_action = progress_df.filter(item=> item.status === "Complete");
 const incomplete_action = progress_df.filter(item=> item.status === "Incomplete");

     return (
          
        <div>   
       
  {/* We are using this component on both the home page and on the progress focus page. But I want the circles to be smaller on the focus page. So here I have used useLocation and an if statement to say if the path is home then use the regular div style but if it is not (i.e. on the /hic/ route) then create divs with the smaller style */}
            
        {location.pathname === '/' && 
            <div className="status_button">
                           {progress_df.map(status => (
                    <SLink to={'/progress/' + status.status} key = {status.status} >
                        <StatusItemDiv className={status.status.toLowerCase()}>{status.status}</StatusItemDiv> 
                    </SLink>          
                ))}
            </div>    
        }
 

  {/* I also want to display some things about the progress but only on the focus page. By including them only in the next if true statement I can ensure the extra parts do not appear on the home page. */}

        {location.pathname !== '/' && 
        <div>
            {progress_summary_df.map(actions => ( 
                <div>
                   <p>There were a total of <b>69</b> actions in the SFWS 2019-22 action plan.</p>
                   <p>As part of the 2022 review, four actions were removed as no longer relevant and an additional <b>26</b> actions were added as a result of the Khan report. As such there are currently <b>88 actions</b> on the SFWS action plan.</p>
                   <p>Of these 88 actions, <b>{actions.Complete}</b> actions (<b>{Math.round((+actions.Complete / +actions.Total) * 100)}%</b>) were considered complete in the August 2022 review. This leaves <b>{actions.Incomplete}</b> actions left that are still in progress.</p>
                   <p>Use the icons below to show complete and incomplete actions.</p>
                </div>   
             ))}
                    <div className="status_button">
                        {progress_df.map(status => (
                            <SLink to={'/progress/' + status.status} key = {status.status} >
                                <StatusItemSmallerDiv className={status.status.toLowerCase()}>{status.status}</StatusItemSmallerDiv> 
                            </SLink>          
                        ))}
                    </div>   

         

        </div>
                    
                }

     
        </div>
    )
}

const StatusItemDiv = styled.div `
min-width: 65px;
min-height: 65px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 4vw;
height: 4vw;
border-radius: 50%;
padding: 5px;
margin: 3px;
`

const StatusItemSmallerDiv = styled.div `
min-width: 50px;
min-height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 3vw;
height: 3vw;
border-radius: 50%;
padding: 5px;
margin: 3px;
`

const SLink = styled(NavLink)`
border-radius: 50%;

&.active{
    background: #000;
}`



export default Progress_component