import React from 'react'

const AboutComp = (props) => {
  return (
    <div className='aboutBox'>
        <div className="aboutHead">
            <h3>{props.title}</h3>
        </div>
        <div className="aboutText">
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default AboutComp
