import React, { useRef, useState } from "react";
import headPic from "./file/pic/08.png";
import Yirga from "./file/pic/Yirga.jpg";
import contactme from "./file/pic/contact me.png";
import logo from "./file/pic/logo.png";
import cinema from "./file/pic/cinema.jpg";
import aboutpic from "./file/pic/aboutpic.jpg";
import Project from "./project";
import Exprience from "./exprience";
import "./media.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();
  const [showDiv, setShowDiv] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ll1wga",
        "template_jv6x0a8",
        form.current,
        "e3pdDSbktCcn5q2wj"
      )
      .then(
        (result) => {
          setShowDiv(true);
          e.target.reset();
          setTimeout(() => {
            setShowDiv(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const consolRespoS = [
    "Welcoming visitors and directing them to the relevant office/personnel.",
    "Carrying out clerical duties such as answering phone calls, responding to emails, and preparing documents, including office correspondence, memos, resumes, and presentations.",
    "Coordinating and managing appointments, meetings, and the conference room schedule in order to prevent duplicate bookings.",
    "Maintaining general office files, including job files, vendor files, and other files related to the company’s operations.",
    "Purchasing office supplies, equipment, and furniture.",
    "Overseeing the maintenance of office facilities, and equipment.",
  ];

  const alphaRespos = [
    "Thoroughly researching new materials and processes",
    "Utilizing specific software to create models of the product",
    "Organizing previous engineering records and properly reporting new ones",
    "Preparing layout drawing",
    "Modeling, analysis and design",
    "Preparing detail sketches for CAD Experts",
    "Preparing CAD detail drawings",
    "Preparing Design Report",
  ];

  const dirdisRespos = [
    "Meeting with clients and guiding them through the process of importing and exporting their goods into and out of the country",
    "Claculating and declaring amount of overall tax for any goods to be imported or exported",
    "Finishing up the shipping processes of goods",
    "Facilitating the process of the The Ethiopian Customs Agency for import and export of goods",
  ];

  const consolRespoList = consolRespoS.map((consolRespo) => (
    <li>{consolRespo}</li>
  ));

  const alphaResposList = alphaRespos.map((alphaRespo) => (
    <li>{alphaRespo}</li>
  ));

  const dirdisResposList = dirdisRespos.map((dirdisRespo) => (
    <li>{dirdisRespo}</li>
  ));

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="headerAbout headerInner">
            <h5>Design Engeneer</h5>
            <h2>
              Maraki Gedu
              <br />
              <span>Anebesse</span>
            </h2>
            <p>
              I'm a passionate Design Engineer with over two years of experience
              dedicated to crafting impactful solutions. My journey started with
              boundless curiosity, evolving into a seasoned professional who
              thrives on turning ideas into reality. I've successfully completed
              over 80 projects, known for my meticulous attention to detail and
              the ability to transform concepts into functional designs.
              Collaborating with 20+ clients has shaped my client-centric
              approach, emphasizing transparent communication and tailor-made
              solutions. Beyond engineering, I'm an advocate for diversity and
              creativity in design, challenging norms, and inspiring others to
              pursue their passions fearlessly. Join me in exploring the world
              of design, where imagination and expertise unite to shape a better
              future.
            </p>
          </div>
          <div className="headerPic headerInner">
            <img src={headPic} alt="" />
          </div>
          <div className="headerSumery">
            <div className="experience">
              <span className="yearTitle">Year of Experience</span>
              <span className="year">2+</span>
            </div>
            <div className="experience">
              <span className="yearTitle">Completed Projects</span>
              <span className="year">80+</span>
            </div>
            <div className="experience">
              <span className="yearTitle">Clients</span>
              <span className="year">20+</span>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="titleAout">
            <h1>About</h1>
          </div>
          <div className="contentAbout">
            <div className="contentInfo">
              <h2>About Me</h2>
              <p>
                I am a dedicated and talented Design Engineer with a passion for
                creating impactful solutions. With over two years of experience
                in the field, I bring a wealth of knowledge and expertise to
                every project I have undertaken.
              </p>
              <h2>My Journey</h2>
              <p>
                My journey began with a profound curiosity for design and
                engineering. Through years of dedication and hard work, I have
                evolved into a seasoned professional who thrives on turning
                ideas into reality. My commitment to excellence has led me to
                successfully complete numerous projects, each one a testament to
                my creativity and problem-solving skills.
              </p>
              <h2>Unparalleled Expertise</h2>
              <p>
                As a Design Engineer, I earned a reputation for my meticulous
                attention to detail and the ability to transform concepts into
                functional designs. My innovative approach, combined with a deep
                understanding of industry standards, ensures that every project
                I undertake meets the highest quality benchmarks.
              </p>
              <h2>Client-Centric Approach</h2>
              <p>
                My journey is marked by my collaboration with over 20 clients,
                each of whom has contributed to my growth and success. I value
                every partnership and understand the importance of listening to
                clients' needs to create tailor-made solutions that exceeds
                expectation.
              </p>
              <h2>Empowering Design</h2>
              <p>
                I am more than a Design Engineer; I am an advocate for
                empowerment and change. My work is a testament to the belief
                that diversity and creativity go hand in hand, challenging
                traditional norms and inspiring others to pursue their passions
                fearlessly.
              </p>
              <h2>Join the Journey</h2>
              <p>
                Whether you're a fellow design enthusiast, a prospective client,
                or simply someone who appreciates innovation, I invite you to
                join my journey. Explore the world of design through my eyes,
                and witness the power of imagination and expertise coming
                together to shape a better future.
              </p>
            </div>
            <div className="picAbout">
              <img src={aboutpic} alt="" className="img1" />
            </div>
          </div>
        </div>
        <div className="experiencediv">
          <div className="experienceTitle">
            <h1>Exprience</h1>
          </div>
          <div className="experienceContent">
            <div className="right">
              <div className="rightcontent secondJob">
                <Exprience
                  startFrom="Jun 2021"
                  endOn="Mar 2022"
                  companyName="Construction Solutions PLC"
                  jobType="Administrative Assistant"
                  responsible={consolRespoList}
                />
              </div>
            </div>
            <div class="vertical-line">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div className="left">
              <div className="leftcontent firstJob">
                <Exprience
                  startFrom="May 2021"
                  endOn="Now"
                  companyName="Alpha Post Tension PLC"
                  jobType="Design Engineer"
                  responsible={alphaResposList}
                />
              </div>
              <div className="leftcontent thirdJob">
                <Exprience
                  startFrom="Dec-2020"
                  endOn="May-2021"
                  companyName="Dirdis Customs Clearing"
                  jobType="Assistant Transitor"
                  responsible={dirdisResposList}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="experiencedivMobile">
          <div className="experienceTitleMobile">
            <h1>Exprience</h1>
          </div>
          <div className="experienceContentMobile">
            <div className="firstJobMobile">
              <Exprience
                startFrom="2021"
                endOn="Now"
                companyName="Alpha Post Tension PLC"
                jobType="Design Engineer"
                responsible={alphaResposList}
              />
            </div>
            <div className="secondJobMobile">
              <Exprience
                startFrom="2020"
                endOn="2021"
                companyName="Construction Solutions PLC"
                jobType="Administrative Assistant"
                responsible={consolRespoList}
              />
            </div>
            <div className="thirdJobMobile">
              <Exprience
                startFrom="2020"
                endOn="2022"
                companyName="Dirdis Customs Clearing"
                jobType="Assistant Transitor"
                responsible={dirdisResposList}
              />
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="experienceTitle">
            <h1>Project</h1>
          </div>
          <div className="listOfProject">
            <h2>Post Tension Designs</h2>
            <div className="postTenstionProject">
              <Project
                imgLink={cinema}
                projectName="Cinema (4B+G+8 Modern Cinema Complex)"
                projectClients="Cinema (4B4G+8 Modern Cinema Complex)"
                projectLocation="AA, Kirkos Sub city"
                projectDescription="Post tension Slab design for 2 Cinema floors (Adult & Child Cinema) & 4th to Roof floor"
              />
              <Project
                imgLink={cinema}
                projectName="Foreign Affairs (2B+G+18 Apartment Building(Block 2))"
                projectClients="FDRE Ministry of Foreign affair"
                projectLocation="AA, Kazanchis"
                projectDescription="Post tension Slab design from 4th to Roof floor"
              />
              <Project
                imgLink={cinema}
                projectName="Abat (B+G+9 Apartment)"
                projectClients="Abat Real Estate"
                projectLocation="AA, Kirkos Sub city"
                projectDescription="Post tension Slab design from Ground to Roof floor"
              />
              <Project
                imgLink={cinema}
                projectName="NOC (3B+G+17 Car Parking & Office Building)"
                projectClients="National Oil Ethiopia Noc"
                projectLocation="AA, Bole"
                projectDescription="Post tension Slab design from 2nd Basement Roof floor"
              />
              <Project
                imgLink={cinema}
                projectName="Usman Mosque (2B+G+4 Building)"
                projectClients="Usman Ibnu Afan Mesjid"
                projectLocation="AA, Lideta Sub city"
                projectDescription="Post tension Slab design from Ground to Roof floor"
              />
              <Project
                imgLink={cinema}
                projectName="Dehilis (G+4 Hotel)"
                projectClients="Zam Sam Aaden Gudaa"
                projectLocation="Jijiga"
                projectDescription="Post tension Slab design from 1st to Roof floor"
              />
              <Project
                imgLink={cinema}
                projectName="Abdujebar (B+6+T Hotel)"
                projectClients="Abdi Jabaar Shekh"
                projectLocation="Jijiga"
                projectDescription="Post tension Slab design from 2nd to Roof floor"
              />
              <Project
                imgLink={Yirga}
                projectName="Yirga (3B+G+9 Mixed Use Building)"
                projectClients="Ato Yirga Tefera"
                projectLocation="AA. Tafo"
                projectDescription="Post tension Slab design from 3rd to Roof floor"
              />
            </div>
            <h2>Reinforced Concrete Designs</h2>
            <div className="rcProject">
              <Project
                imgLink={cinema}
                projectName="Zeki (B+G+10 Building)"
                projectClients="Zekaryas Abebe"
                projectLocation="AA"
                projectDescription="Full Design (Footing, Column, Stair & Slab Design)"
              />
              <Project
                imgLink={cinema}
                projectName="Rekik (B+G+7 Apartment Building"
                projectClients="Rekik Abebe Getahun"
                projectLocation="AA, Bole"
                projectDescription="Footing, Column & Shear wall Design"
              />
              <Project
                imgLink={cinema}
                projectName="Piassa (2B+G414 Apartment Bldg)"
                projectClients="Ato Mesay Oli"
                projectLocation="AA, Bole"
                projectDescription="Column, Shear wall, Stair & Slab Design & detailing"
              />
            </div>
          </div>
        </div>

        <div className="contactMe">
          <div className="picContact">
            <img src={contactme} alt="" />
          </div>
          <div className="form">
            <form action="" ref={form} onSubmit={sendEmail}>
              <h1>Contact Me</h1>
              <div className="firstRow">
                <input type="text" placeholder="First Name" name="user_fname" />
                <input type="text" placeholder="Last Name" name="user_lname" />
              </div>

              <div className="secondRow">
                <input type="email" placeholder="Email" name="user_email" />
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="user_phno"
                />
              </div>

              <div className="thirdRow">
                <input type="text" placeholder="Address" name="user_address" />
              </div>

              <div className="fourthRow">
                <textarea
                  placeholder="Type your message..."
                  name="user_message"
                ></textarea>
              </div>
              <div className="button">
                <button>
                  <div class="card">
                    <p class="c-txt">{showDiv ? "Success" : "Submit"}</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="pic">
            <img src={logo} alt="" />
          </div>
          <div className="contentFooter">
            <div className="iconlist">
              <a
                href="tel:+251967315239"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  size="3x"
                  style={{ color: "#BB9542" }}
                  className="icon phone"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/maraki-gedu-66a1851b0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="3x"
                  style={{ color: "#BB9542" }}
                />
              </a>

              <a
                href="https://instagram.com/maki_gedu?utm_source=qr&igshid=NGExMmI2YTkyZg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="3x"
                  style={{ color: "#BB9542" }}
                />
              </a>
              <a
                href="https://wa.me/qr/LVO5RTEJ6CGVH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="3x"
                  style={{ color: "#BB9542" }}
                />
              </a>
              <a
                href="https://t.me/Maraki_Gedu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  size="3x"
                  style={{ color: "#BB9542" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
