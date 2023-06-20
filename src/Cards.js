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
    
      const items = ["Uncover valuable insights and patterns hidden within your data. Our advanced analytics techniques and tools provide actionable intelligence to drive strategic decision-making and optimize business performance.", 'Seamlessly connect and consolidate data from various sources to create a unified view. Our data integration services ensure that you have a reliable, accurate, and up-to-date data foundation for analysis and reporting.', 'Build a scalable and secure data warehousing infrastructure tailored to your organization needs. Our experts design, implement, and manage data warehouses that enable efficient storage, retrieval, and management of large volumes of data.', 'Transform complex data into intuitive visualizations and interactive dashboards. Our data visualization solutions enable you to communicate insights effectively, enabling stakeholders to understand complex information at a glance.', 'Establish robust data governance frameworks to ensure data quality, security, and compliance. We help you define data policies, implement data governance processes, and establish controls to protect and manage your data effectively.', 'Highlight your proficiency in handling large volumes of data and working with big data technologies such as Apache Hadoop, Spark, or other distributed computing frameworks. Showcase your knowledge of data processing, data streaming, and real-time analytics.', 'Emphasize your experience in leveraging cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform for data storage, processing, and analytics. Highlight your expertise in cloud data services, serverless computing, and scalability.', 'Strategy and Consulting: Highlight your ability to provide strategic guidance and consulting services to organizations looking to develop a data-driven culture. Showcase your expertise in defining data strategies, roadmaps, and conducting data maturity assessments.', 'Emphasize your skills in data engineering tasks such as data extraction, data transformation, data pipeline development, and data automation. Mention your proficiency in programming languages such as Python, R, SQL, or other relevant technologies.', ' Showcase your understanding of data security best practices, compliance regulations (such as GDPR or CCPA), and data privacy measures. Highlight your expertise in implementing data encryption, access controls, and data anonymization techniques.'];
      const titles = ["Data Insights and Analytics", "Data Integration", "Data Warehousing", "Data Visualization", "Data Governance", "Big Data Technologies", "Cloud Computing", "Data Strategy and Consulting", "Data Engineering", "Data Security and Privacy"]
      const duplicatedItems = [...items, ...items, ...items,...items,...items,...items,];
      const duplicatedtitles = [...titles, ...titles, ...titles,...titles,...titles,...titles,];
    
      const Cont = styled.div`
        width : 1600px;
        height: 550px;
        margin-top:200px;
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
    font-weight:900;
    font-size:3rem;
    font-family: 'Kanit', sans-serif;

    @media (max-width: 1650px) {
      font-size:2rem;
    }
    @media (max-width: 1307px) {
      font-size:1.5rem;
    }
    `;
    
    
    const Marg = styled.div`
    text-align:center;
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
