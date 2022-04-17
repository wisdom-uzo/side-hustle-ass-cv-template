import React from 'react'
import '../App.css'

const Education = () => {
  return (
    <div className='app-Education'>
        <h2 className="app-header">Education</h2>

        <div className="app-exp-section">
          <h3 className="experience-title">National Diploma</h3>
          <h4>GATEWAY ICT POLYTECHNIC SAAPADE, OGUN STATE</h4>
          <p>2019 Sep - 2021 Aug</p>
          <p>Course: Computer Science</p>
        </div>

        <div className="app-exp-section">
          <h3 className="experience-title">Diploma</h3>
          <h4>CT COMPUTER INSTIITUTE YABA LAGOS</h4>
          <p>2018 Sep – 2019 May</p>
          <p>Course: Web Development</p>
      </div>

      <div className="app-exp-section">
          <h3 className="experience-title">Diploma</h3>
          <h4>CODE LAGOS</h4>
          <p>2018 Sep – 2019 May</p>
          <p>Course: Web Design</p>
      </div>

    </div>
  )
}

export default Education