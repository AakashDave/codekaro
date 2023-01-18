import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footerstep1">
        <div className="f_box1">
            <h3>Socials :</h3>
            <a rel='noreferrer' target={"_blank"} href="https://github.com/AakashDave">Github</a>
            <a rel='noreferrer' target={"_blank"} href="https://www.linkedin.com/in/dave-aakash-b2206b213/">LinkedIN</a>
            <a rel='noreferrer' target={"_blank"} href="https://instagram.com/__aakash_dave__?igshid=ZmZhODViOGI=">Instagram</a>
        </div>
        <div className="f_box2">
            <h1 className='logo'>&#10100;;&#10101;</h1>
            <h1 className='headLogo'>CodeKaro</h1>
            <p className='subHead'>FREE ONLINE EDITOR</p>
        </div>
      </div>
      <div className="footerstep2">
        <p>
            Thanks For Using CodeKaro, ❤️ from Developer : Aakash Dave
        </p>
      </div>
    </footer>
  )
}

export default Footer
