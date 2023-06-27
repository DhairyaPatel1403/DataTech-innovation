import React from 'react'
import data from './data.png';
import datagrowth from './data-growth.png';
import team from './team.png';

export const About = () => {
  return (
    <div className='about'>
      <div className='about-header'>About Us</div>
      <div className='about-image'>
      <p><img height={'190px'} src={data} alt="Data" /></p>
      <p><img height={'190px'} src={datagrowth} alt="DataGrowth" /></p>
      <p><img height={'190px'} src={team} alt="Team" /></p>
      </div>
      <div className='about-p'>
        <p className='p1'><b style={{"font-size":"1.5rem", "font-weight":"800"}}>Data Analytics Machine Learning:</b><br/>Unlock actionable insights through data analytics and machine learning at DataTech Innovations. Our expert team delves deep into your data, revealing valuable information to drive informed decisions and achieve tangible results </p>
        <p><b style={{"font-size":"1.5rem", "font-weight":"800"}}>Empowering Businesses with Seamless Digital Experiences:</b><br/>
            At DataTech Innovations, we go beyond just creating websites. We strive to empower businesses with seamless digital experiences that captivate users and drive conversions. 
        </p>
        <p><b style={{"font-size":"1.5rem", "font-weight":"800"}}>Custom Solutions Tailored to Your Business Needs:</b><br/>
        Customized web development tailored to your business. We collaborate closely to understand your unique requirements, goals, and audience, delivering tailored solutions that align with your needs.
        </p>
        
      </div>

      <center><div className='about-last'>DataTech Innovations is a leader in data solutions, helping businesses use data to grow, make smart decisions, and find new opportunities. Our advanced technology and expert team offer customized data services for all types of companies. Whether you're a small startup or a big company, our solutions will speed up your data-driven progress. We also specialize in web development, creating modern and user-friendly websites for a smooth online experience.</div></center>

    </div>
  )
}
