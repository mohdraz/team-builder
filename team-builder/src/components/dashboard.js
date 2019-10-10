import React from "react";

const Dashboard = props => {

    return (
        <div>
           {props.memberDash.map( dash => {
               return (
                   <div key={dash.id}>
                      
                       <h2>{dash.name}</h2>
                       <p>{dash.email}</p>
                       <p>{dash.role}</p>
                   </div>
               );
           })} 
        </div>
    );
}

export default Dashboard;