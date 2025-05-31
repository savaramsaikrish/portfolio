// logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./navbar";
import Profile from './profile';
import ContactForm from './ContactForm';
import { FaLinkedin, FaGithub, FaJava, FaReact, FaDatabase, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaGithubAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiPostgresql } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { DiDjango } from "react-icons/di";
import { SiCss3, SiHtml5 } from 'react-icons/si';
import awscp from './img/awscp.png';
import redhat from './img/redhat.png';
import rpa from './img/rpaa.png';
import salesforce from './img/salesforce-ai.png';
import tensorflow from './img/tensorflow1.png';
import fintech from './img/fintech1.png';
import image from './img/image2.png';
import blog from './img/blog.png';
import tribal from './img/tribal.jpg';
import { SiRedhat } from "react-icons/si";
import movie from './img/movie.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
<img src={awscp} alt="Certification" />


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  document.title = "Portfolio"; // Change the tab title
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.className = darkMode ? "dark-mode" : "light-mode";

  }, [darkMode]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
  
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);
  
  
 
 
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const certifications = [
    { name: "AWS Cloud Practitioner", link: "https://www.credly.com/badges/aws-cloud-practitioner" },
    { name: "Red Hat EX-183", link: "https://www.credly.com/badges/redhat-ex-183" },
    { name: "TensorFlow Developer", link: "https://www.credly.com/badges/tensorflow-developer" },
    { name: "RPA", link: "https://www.credly.com/badges/rpa-certification" },
    { name: "Salesforce AI Associate", link: "https://www.credly.com/badges/salesforce-ai-associate" },
    { name: "Fintech", link: "https://www.credly.com/badges/fintech-certification" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  };

  const projects = [
    {
      title: "Personal Website",
      description: (
        <p style={{ textAlign: "justify" }}>
          I developed and designed a dynamic personal website using ReactJS and Bootstrap, hosted on GitHub Pages. The site effectively showcases my story, work experience, education, projects, and achievements in an engaging and visually appealing format, providing an interactive web presence.
        </p>
      ),
      link: "https://yourpersonalwebsite.com",
      image: image,
      icons: [<FaReact size="2em" color="#61dafb" />, <SiHtml5 size="2em" color="#e34c26" />, <FaGithub size="2em" color="#333" />]
    },
    {
      title: "Blogging System",
      description: (
        <p style={{ textAlign: "justify" }}>A full-stack Blogging System built with Java Spring Boot and MySQL, enabling users to create, edit, and manage blog posts seamlessly. Features include user authentication, category filtering, and a responsive design. Demonstrates strong backend and frontend development skills in a real-world web app.I created a two-player online dice-based board game with a theme loosely set around Dungeons & Dragons. It was developed as a submission for Penn Apps XXI, using ReactJS and CSS Grid Layouts for design and hosted on GitHub Pages.</p>),
    link: "https://perpetualcrusades.com",
      image: blog,
      icons: [<SiSpringboot size="2em" color="#61dafb" />, <SiCss3 size="2em" color="#264de4" />,<SiMysql size="2em" color="#61dafb" />, <FaGithub size="2em" color="#333" />]
    },
    {
      title: "Tribal Handicrafts Mart",
      description:  (
        <p style={{ textAlign: "justify" }}>Tribal Handicrafts Mart connects tribal artisans with customers by showcasing authentic handmade crafts. Built with JSP, Servlets, and MySQL, it offers a secure and user-friendly shopping experience. This project highlights my skills in full-stack web development and cultural preservation.</p>),
      link: "https://covid19tracker.com",
      image: tribal,
      icons: [<FaGithub size="2em" color="#333" />,<SiRedhat size="2em" color="#cc0000" title="Red Hat" />,
<FaDatabase size="2em" color="#006699" title="JDBC (Database Access)" />,
<FaJava size="2em" color="#007396" title="JSP (JavaServer Pages)" />]
    },
    {
      title: "Movie View",
      description: (
        <p style={{ textAlign: "justify" }}>A dynamic movie web app that fetches movie details using the OMDB API and displays trailers and songs via YouTube API. Users can browse, search, and manage their favorite movies with personalized playlists. Built with modern web technologies for an engaging entertainment experience..</p>),
      link: "https://covid19tracker.com",
      image: movie,
      icons: [<FaGithub size="2em" color="#333" />,<SiSpringboot size="2em" color="#61dafb" />, <SiCss3 size="2em" color="#264de4" />,<SiMysql size="2em" color="#61dafb" />]
    }
  ];
  

  const Projects = () => {
    return (
      <div className="Projects">
        <section id="projects">
          <h3>Featured Projects</h3>
        </section>
  
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h4>{project.title}</h4>
                <div className="project-icons">
                  {project.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
                <p style={{ textAlign: "justify" }}>{project.description}</p>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Check it out!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  useEffect(() => {
    const items = document.querySelectorAll('.Education-item');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    items.forEach(item => {
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);
  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="date-time">
  {currentTime.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}{" "}<br/>
  {currentTime.toLocaleTimeString()}
</div>

    <div className="App">
      <div>
      <Navbar />
      <section id="home">
       
      </section>
      <section id="   ">
        
      </section>
      <br/><br/>
      
    </div>
    <div>
      <Profile />
    </div>
        <section id="education"> <h3> &nbsp;&nbsp;Education</h3>
        </section>
      <div className="Education">
      
        <div className="Education-item">
          
          <h4><b>B.Tech - Computer Science Engineering</b></h4>
          <p>KL University</p>
          <p><b>CGPA: 9.08</b></p>
          <p>2021 - 2025</p>
        </div>
        <div className="Education-item">
          <h4>Intermediate - MPC</h4>
          <p>NRI Junior College</p>
          <p><b>CGPA: 9.06 </b></p>
          <p>2019 - 2021</p>
        </div>
        <div className="Education-item">
          <h4>SSC - General</h4>
          <p>Kanna English Medium High School</p>
          <p><b>CGPA: 9.8</b></p>
          <p>2019</p>
        </div>
      </div>
      <div className="Skills">
      <section id="skills">
        <h3>Skills</h3>
      </section>
        
        <div className="skill-setup">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill">
              <FaJava size="3em" color="#f89820" />
              <span>Java</span>
            </div>
            <div className="skill">
              <FaHtml5 size="3em" color="#e34c26" />
              <span>HTML5</span>
            </div>
            <div className="skill">
              <FaCss3Alt size="3em" color="#264de4" />
              <span>CSS3</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <div className="skill">
              <SiSpringboot size="3em" color="#6db33f" />
              <span>Spring Boot</span>
            </div>
            <div className="skill">
              <FaReact size="3em" color="#61dafb" />
              <span>React</span>
            </div>
            <div className="skill">
              <DiDjango size="3em" color="#8cc84b" />
              <span>Django</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill">
              <SiMysql size="3em" color="#00758f" />
              <span>MySQL</span>
            </div>
            <div className="skill">
              <SiMongodb size="3em" color="#13aa52" />
              <span>MongoDB</span>
            </div>
            <div className="skill">
              <SiPostgresql size="3em" color="#336791" />
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill">
              <FaGit size="3em" color="#f34f29" />
              <span>Git</span>
            </div>
            <div className="skill">
              <FaGithubAlt size="3em" color="#333" />
              <span>GitHub</span>
            </div>
            <div className="skill">
              <VscVscode size="3em" color="#61dafb" />
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </div>
      <Projects />
     
      <div class="Certifications"> <section id="certification">
          <h3>My Certifications</h3>
      </section>
 
  <div class="certifications-container">
    <div class="certification-item">
      <img src={awscp} alt="Certification" />
      <h4>AWS Cloud Practitioner</h4>
      <p>Issued by AWS</p>
      <a href="https://www.credly.com/badges/bec0c126-95f2-4d3b-bd58-263eb1869696/public_url" class="verify-button" target="_blank">Verify Here</a>
    </div>
    <div class="certification-item"> 
      
      <img src={redhat} alt="Certification" />
      <h4>Red Hat EX-183</h4>
      <p>Issued by Red Hat</p>
      <a href="https://www.credly.com/badges/979f956e-fb19-47cb-8bb9-80d556487d47/public_url" class="verify-button" target="_blank">Verify Here</a>
    </div>
    <div class="certification-item">
    <img src={salesforce} alt="Certification" />
      <h4>Salesforce AI Associate</h4>
      <p>Issued by Salesforce</p>
      <a href="https://www.salesforce.com/trailblazer/savaramsaikrishnachaitanyaprabhu" class="verify-button" target="_blank">Verify Here</a>
    </div>
    <div class="certification-item">
  <img src={rpa} alt="RPA Automation 360 Certification" />
  <h4>RPA Automation 360</h4>
  <p>Issued by Automation Anywhere</p>
  <a href="https://certificates.automationanywhere.com/05b92f5d-152d-4860-ac1d-4f78c3e4c62b#acc.3fLI9pwz" class="verify-button" target="_blank">Verify Here</a>
</div>

<div class="certification-item">
  <img src={tensorflow} alt="TensorFlow Certification" />
  <h4>TensorFlow Developer</h4>
  <p>Issued by TensorFlow</p>
  <a href="https://www.credential.net/e5c55ec3-9331-4fc0-b5a8-d95a3bc7d3a9#acc.yFhlWADV" class="verify-button" target="_blank">Verify Here</a>
</div>

<div class="certification-item">
  <img src={fintech} alt="Fintech Professional Certificate" />
  <h4>Fintech Professional Certificate</h4>
  <p>Issued by Fintech Council of India</p>
  <a href="verification-link" class="verify-button" target="_blank">Verify Here</a>
</div>

  </div>
</div>

    </div> 
      <ContactForm />
    </div>
  );
}

export default App;
