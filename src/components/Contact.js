import React from 'react'
import { GrMapLocation, GrContactInfo, GrMail, GrGithub } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
        <h1 className='App-name'>
            WISDOM <br /><span> MCHEAL</span>
        </h1>


        <div className="app-contact-de">
            <div className="row">
                <GrMapLocation  className="icon" />
                <p>City, State</p>
            </div>

            <div className="row">
                <GrContactInfo  className="icon"/>
                <p>123-234-5565-232</p>
            </div>

            <div className="row">
               <GrMail  className="icon"/>
                <p>yourGmail@gmail.com</p>
            </div>

            <div className="row">
                <GrGithub className='icon'/>
                <p>yourGmail@gmail.com</p>
            </div>
            
        </div>
    </div>
  )
}

export default Contact