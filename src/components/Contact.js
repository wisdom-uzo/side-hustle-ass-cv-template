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
                <p>24 cemetery road
                LAGOS 101212</p>
            </div>

            <div className="row">
                <GrContactInfo  className="icon"/>
                <p>+234 7018 410663</p>
            </div>

            <div className="row">
               <GrMail  className="icon"/>
                <p>Wisdomuzodimna@gmai
                .com</p>
            </div>

            <div className="row">
                <GrGithub className='icon'/>
                <p>https://github.com/wisdom-uzo</p>
            </div>
            
        </div>
    </div>
  )
}

export default Contact