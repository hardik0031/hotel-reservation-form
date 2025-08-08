import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className='mid'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto quae, quasi distinctio beatae animi debitis
            blanditiis aspernatur numquam quod dolorum ex alias nam
            natus tempora ab aliquam assumenda fugit nulla sit? Incidunt
            pariatur necessitatibus, placeat molestiae labore alias sint
            optio temporibus eligendi soluta, voluptates unde molestias eos,
            ducimus dignissimos error.
          </p>
          <Link to={"/"}>Explore Menu <span>
            <HiOutlineArrowNarrowRight />
          </span></Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About;