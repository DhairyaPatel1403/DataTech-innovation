import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import { Displayh } from './Displayh';
import styled from 'styled-components';


export const Cards = () => {


    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
      ];
    
      const items = ["Uncover valuable insights and patterns hidden within your data. Our advanced analytics techniques and tools provide actionable intelligence to drive strategic decision-making and optimize business performance.", 
      'Transform complex data into impactful visualizations and interactive dashboards. Communicate insights effectively through compelling design and powerful storytelling, empowering confident decision-making.', 
      "Cloud Data Excellence: Revolutionize storage, processing, and analytics with leading cloud platforms like AWS, Azure, and GCP. Our expertise in cloud services, serverless computing, and scalability ensures secure, and future-proof data infrastructure. ", 
      'Data-Driven Success: Our strategic guidance cultivates a data-driven culture for organizations. Seasoned consultants define strategies and assess data maturity. We align your data initiatives with business goals, ensuring a clear vision for success.', 
      'Optimal Data Engineering: Our expertise lies in data engineering, the backbone of successful data-driven initiatives. With a skilled team proficient in pipeline development and automation, we streamline your data processes while ensuring integrity.', 
      'Engage and Convert Audience: DataTech Innovations crafts captivating websites that drive user engagement. Our talented team combines creativity and technical expertise for visually stunning, functional sites. Delivering impressive visuals for optimal engagement.', 
      "Distinct Online Presence: Our web development services make you stand out in the digital crowd. We create a unique online identity through innovative design and striking visuals, leaving a lasting impact on your audience.", 
      "Effortless Website Control: Streamlined content management for hassle-free updates. User-friendly systems let you make changes effortlessly. Focus on delivering relevant, up-to-date content to your audience with ease."];

      const titles = ["Data Insights and Analytics", "Data Visualization", "Cloud Computing", "Data Strategy and Consulting", "Data Engineering", "Craft Engaging Experiences:", "Elevate Your Online Presence:", "Streamlined Management"]
      const duplicatedItems = [...items, ...items, ...items,...items,...items,...items,];
      const duplicatedtitles = [...titles, ...titles, ...titles,...titles,...titles,...titles,];
    
      const Cont = styled.div`
        width : 1600px;
        margin-top:130px;

        margin-left:50px;


        @media (max-width: 1650px) {
          width: 90%; 
          height:30%;
        }
    `;

    const CardHeader = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Bebas+Neue&family=Gentium+Book+Plus:wght@700&family=Geologica:wght@300&family=Josefin+Sans:wght@400;500&family=Kanit:wght@300;400;800&family=Karla&family=Mukta:wght@700&family=PT+Sans:wght@700&family=Raleway:ital,wght@0,300;1,400&display=swap');
    font-weight: bold;
    margin-bottom: 10px;
    color:white;
    text-align:center;
    top: 0;
    font-weight:900;
    font-size:3rem;
    font-family: "Segoe UI", "SegoeUI", "Helvetica Neue", "Helvetica", "Arial", "sans-serif";

    @media (max-width: 1650px) {
      font-size:2rem;
    }
    @media (max-width: 1307px) {
      font-size:1.5rem;
    }
    @media (max-width: 1209px) {
      font-size:1.3rem;
    }
    @media (max-width: 1150px) {
      font-size:1rem;
    }
    `;
    
    
    const Marg = styled.div`
    text-align:center;
    height:780px;
    `;
    
    
    const Iteminside = styled.div`
    display:grid;
    align-items:center;
    `;


    

  return (
    <div>
        <Marg className='margstyle'>
            <Displayh/>
      <Cont>
      <Carousel breakPoints={breakPoints} showArrows={false}   isRTL={false} enableMouseSwipe={true}   itemsToScroll={1}  enableAutoPlay={true} autoPlaySpeed={3500} easing="ease" transitionMs={1000}  enableSwipe={true} pagination={true} preventDefaultTouchmoveEvent={true}>
          {duplicatedItems.map((item, index) => (
              <Item key={index}>
                <CardHeader>{duplicatedtitles[index]}</CardHeader>
                <Iteminside>{item}</Iteminside>
              </Item>
            ))}
          
        </Carousel>
      </Cont>

      </Marg>
    </div>
  )
}
