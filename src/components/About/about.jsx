import React from 'react'
import profilePic from '../images/profile.jpg'
import css from './about.css';

function about() {
  return (
    <div style={css}>
        <header>
            <nav id="navigation">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-brand">
                    <i class="fa-solid fa-code"></i>
                    <p>Co<span>D</span>eR</p>
                </div>
                <div class="menu">
                    <a href="#home">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#skills1">Skills</a>
                    <a href="#contact1">Contacts</a>
                    <a href="#rate">Review</a>
                </div>

                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </nav>
        </header>

        <section id="about">
            <div class="head">
                <h1>About Me</h1>
            </div>
            <div class="about-container">
                <div class="info">
                    <h2>I Create Products Not Just Art.</h2>
                    <p>I'm a Web developer, from Patiala in Punjab. On my free time, I enjoy expanding my programming knowledge, building dynamic web applications, and helping others learn to code. Other than programming, I like mountain biking, skateboarding,
                        exercising, traveling, and enjoying life. Have a nice day and thanks for visiting my page!</p>
                    <button id="resume-download">
                        <i class="fas fa-download"></i>
                        Resume</button>
                </div>
                <div class="image">
                    <img src={profilePic} alt="Loading.."/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default about