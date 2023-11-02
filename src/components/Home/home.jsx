import React from "react";
import css from "./home.css";
import profilePic from "../images/profile.jpg";

const home = () => {
  window.onscroll = function () {
	scrollFunction();
  };
  function scrollFunction() {
	if (
	  document.body.scrollTop > 50 ||
	  document.documentElement.scrollTop > 50
	) {
	  document.getElementById("navigation").style.backgroundColor = "black";
	} else {
	  document.getElementById("navigation").style.backgroundColor =
		"transparent";
	}
  }
  return (
	<>
	  <body style={css}>
		<header>
		  <nav id="navigation" onScroll={scrollFunction}>
			<input type="checkbox" id="nav-check" />
			<div className="nav-brand">
			  <i className="fa-solid fa-code"></i>
			  <p>
				Co<span>D</span>eR
			  </p>
			</div>
			<div className="menu">
			  <a href="#home">Home</a>
			  <a href="#about1">About Me</a>
			  <a href="#skills">Skills</a>
			  <a href="#contact">Contacts</a>
			  <a href="#rate">Review</a>
			</div>

			<div className="nav-btn">
			  <label for="nav-check">
				<span></span>
				<span></span>
				<span></span>
			  </label>
			</div>
		  </nav>

		  <div className="heading">
			<div className="home-center">
			  <span>GET EVERY SINGLE SOLUTIONS.</span>
			  <h2>
				Welcome To My <span>Portfolio.</span>
			  </h2>
			  <p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
				debitis at minima? Earum possimus quia itaque dolorem unde
				explicabo voluptate hic veritatis magnam labore? Necessitatibus,
				dolore ea sint repudiandae ipsa voluptatibus facilis tempora
				iusto.
			  </p>
			</div>
			<div className="button">
			  <a href="#about1">
				<button className="btn1">Learn More</button>
			  </a>
			  <a href="#contact">
				<button className="btn1">Hire Me</button>
			  </a>
			</div>
		  </div>
		</header>

		<section id="about1">
		  <div className="head">
			<h1>About Me</h1>
		  </div>
		  <div className="about-container">
			<div className="info">
			  <h2 className="small-heading">I Create Products Not Just Art.</h2>
			  <p>
				As a computer engineering student, my objective is to gain
				hands-on experience in the industry, learning new programming
				languages and technologies, and contribute to meaningful
				projects. I aim to leverage my skills and knowledge to deliver
				high-quality code, collaborate effectively with my team members,
				and continuously improve my technical abilities
			  </p>
			  <a
				target="__blank"
				href="https://drive.google.com/file/d/1PhUkl_iM6__wW063sY0_IgFFDjWEAVcr/view?usp=share_link"
			  >
				<button id="resume-download">
				  <i className="fas fa-download"></i>
				  Resume
				</button>
			  </a>
			</div>
			<div className="image">
			  <img src={profilePic} alt="Loading.." />
			  <div className="below-profile">
				<i className="fa-solid fa-user-large" aria-hidden="true"></i>
				<strong>Harmandeep Singh</strong>
			  </div>
			</div>
		  </div>
		</section>

		{/* My Education */}

		<section id="education">
		  <div className="head">
			<h1>My Education</h1>
		  </div>

		  <div className="card-container">
			<div className="card">
			  <div className="card-head">
				<i className="fas fa-chart-line"></i>
				<h3>Graduation</h3>
			  </div>
			  <div className="edu-info">
				<strong>
				  Chandigarh University, Mohali, Punjab
				  <br />
				  ➤ Stream: Computer Science
				  <br />
				  ➤ Passing Year: 2024
				  <br />➤ CGPA: 8.57 / 10(till 5th sem)
				</strong>
			  </div>
			</div>
			<div className="card">
			  <div className="card-head">
				<i className="fas fa-chart-line"></i>
				<h3>Higher Education</h3>
			  </div>
			  <div className="edu-info">
				<strong>
				  Gian Jyoti Global School, Mohali, Punjab
				  <br />
				  ➤ Stream: Non-Medical
				  <br />
				  ➤ Passing Year: 2020
				  <br />➤ Percentage: 93%
				</strong>
			  </div>
			</div>
			<div className="card">
			  <div className="card-head">
				<i className="fas fa-chart-line"></i>
				<h3>Matriculation</h3>
			  </div>
			  <div className="edu-info">
				<strong>
				  Kendriya Vidyalaya Nabha Cantt, Patiala, Punjab
				  <br />
				  ➤ Stream: Science
				  <br />
				  ➤ Passing Year: 2018
				  <br />➤ Percentage: 76.8%
				</strong>
			  </div>
			</div>
		  </div>
		</section>

		{/* My Skills  */}

		<section id="skills">
		  <div className="head">
			<h1>My Skills</h1>
		  </div>
		  <div className="skills-container">
			<div className="experience">
			  <h3>My Creative Skills And Experience</h3>
			  <p>
				As a computer engineering student, my objective is to gain
				hands-on experience in the industry, learn new programming
				languages and technologies, and contribute to meaningful
				projects. I aim to leverage my skills and knowledge to deliver
				high-quality code, collaborate effectively with my team members,
				and continuously improve my technical abilities
			  </p>
			</div>
			<div className="graph">
			  <div className="skill">
				<div className="info">
				  <span>DSA</span>
				  <span>85%</span>
				</div>
				<div className="line dsa"></div>
			  </div>
			  <div className="skill">
				<div className="info">
				  <span>JAVA</span>
				  <span>75%</span>
				</div>
				<div className="line java"></div>
			  </div>
			  <div className="skill">
				<div className="info">
				  <span>HTML</span>
				  <span>90%</span>
				</div>
				<div className="line html"></div>
			  </div>
			  <div className="skill">
				<div className="info">
				  <span>CSS</span>
				  <span>90%</span>
				</div>
				<div className="line css"></div>
			  </div>
			  <div className="skill">
				<div className="info">
				  <span>REACTJS</span>
				  <span>80%</span>
				</div>
				<div className="line python"></div>
			  </div>
			  <div className="skill">
				<div className="info">
				  <span>MONGODB</span>
				  <span>75%</span>
				</div>
				<div className="line MONGODB"></div>
			  </div>
			  <div className="skill">
				<div className="info">
				  <span>JAVASCRIPT</span>
				  <span>70%</span>
				</div>
				<div className="line js"></div>
			  </div>
			</div>
		  </div>
		</section>

		{/* <!-- Contact Me--> */}
		<section id="contact">
		  <div className="head">
			<h1>Get In Touch</h1>
		  </div>
		  <div className="contact-container">
			<div className="left">
			  <div className="line">
				<div className="line-grid">
				  <div className="icon">
					<i className="fa fa-envelope"></i>
				  </div>
				  <div className="inp">
					<strong style={{ fontSize: "19px" }}>E-Mail</strong>
					<p style={{ fontStyle: "italic" }}>hs799746@gmail.com</p>
				  </div>
				</div>
				<div className="line-grid">
				  <div className="icon">
					<i className="fa-solid fa-at"></i>
					<strong style={{ fontSize: "19px" }}>Phone Number</strong>
				  </div>
				  <div className="inp">
					<p style={{ fontStyle: "italic" }}>+91 79860 77173</p>
				  </div>
				</div>
			  </div>

			  <div className="line">
				<div className="line-grid">
				  <div className="icon">
					<i className="fa-solid fa-at"></i>
					<strong style={{ fontSize: "19px" }}>GitHub</strong>
				  </div>
				  <div className="inp">
					<a href="https://github.com/Harmandeep-Singh017/" rel="noreferrer" target="_blank">
					  <button className="btn">GitHub</button>
					</a>
				  </div>
				</div>
				<div className="line-grid">
				  <div className="icon">
					<i className="fa-solid fa-at"></i>
					<strong style={{ fontSize: "19px", paddingRight: "62px" }}>
					  Linkedin 
					</strong>
				  </div>
				  <div className="inp">
					<a href="https://www.linkedin.com/in/harmandeep-singh-8271a922b/" rel="noreferrer" target="_blank">
					  <button className="btn">Linkedin</button>
					</a>
				  </div>
				</div>
			  </div>
			  <div className="line">
				<div className="line-grid">
				  <div className="icon">
					<i className="fa-solid fa-at"></i>
                    <strong style={{ fontSize: "19px" }}>
					  Leetcode
					</strong>
				  </div>
				  <div className="inp">
					
					<a href="https://leetcode.com/Harmandeep_017/" rel="noreferrer" target="_blank">
					  <button className="btn">Leetcode</button>
					</a>
				  </div>
				</div>
				<div className="line-grid">
				  <div className="icon">
					<i className="fa-solid fa-at"></i>
					<strong style={{ fontSize: "19px", paddingRight: "20px" }}>Coding Ninja    </strong>
				  </div>
				  <div className="inp">
					<a href="https://www.codingninjas.com/codestudio/profile/harman_017" rel="noreferrer" target="_blank">
					  <button className="btn">Coding Ninja</button>
					</a>
				  </div>
				</div>
			  </div>
			</div>

			<div className="right">
			  <h2>Message Me</h2>
			  <form className="Form" action="/" method="post">
				<div className="input1">
				  <input
					id="name"
					type="text"
					name="name"
					placeholder="Name"
					required=""
					data-error="Please Enter Your Name"
				  />
				  <input
					id="email"
					type="email"
					name="email"
					placeholder="E-Mail"
					required=""
					data-error="Please Enter Your Email"
				  />
				</div>
				<div className="input">
				  <input
					id="tel"
					type="tel"
					name="tel"
					placeholder="Phone Number"
					required=""
					data-error="Please Enter Your Phone Number"
				  />
				  <input
					id="message"
					type="text"
					name="message"
					placeholder="Message.."
					required=""
					data-error="Please Type your message"
				  />
				</div>
				<button type="submit">Send Message</button>
				<button type="reset">Reset Message</button>
			  </form>
			</div>
		  </div>
		</section>
		<footer>
		  <h4>
			Created By <span>Harmandeep Singh</span> | Copyright &copy; 2022 All
			rights reserved.
		  </h4>
		</footer>
	  </body>
	</>
  );
};

export default home;
