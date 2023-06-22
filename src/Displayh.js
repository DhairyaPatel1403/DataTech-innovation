import React from 'react';
import styled from "styled-components";



export const Displayh = () => {

    const Display = styled.div`
    display:grid;
    width:30%;
    color:white;
    display:flex;
    align-items:center; 
    justify-content: center;

    `;

    const H1 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=DM+Sans:wght@500&family=Josefin+Sans:wght@300&family=Kanit:wght@200&family=Ubuntu:wght@400;500&display=swap');
    font-size:4.5rem;
    font-weight:700;
    margin-top:12px;
    font-family: 'Segoe UI';
    `;


  return (
    <div>
        <center><Display><H1>Our Services</H1></Display></center>
    </div>
  )
}
