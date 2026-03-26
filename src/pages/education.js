import React from "react";
import "../styles/education.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Education() {
  return (
    <div className="education-container">
      <Header />
      <h1 className="education-heading">Education</h1>
      <div className="children-with-man-container">
        <div className="children-with-man-container-all-h1">
          <h1 className="children-with-man-container-h1">
            "Learn Today,Lead Tomorrow." "Empower<br></br>
          </h1>
          <h1 className="children-with-man-container-h1">
            Minds, Transform Lives." "Quality Education for a <br></br>
          </h1>
          <h1 className="children-with-man-container-h1">Brighter Future</h1>
        </div>
        <img
          src="images/image5.jpg"
          alt="childrens-image"
          className="childrenWithMan"
        ></img>
      </div>
      <div className="education-green-bar"></div>
      <div className="what-we-do-button">
        <h1>WHAT WE DO </h1>
      </div>
      <div className="rural-education-container">
        <div className="rural-education-green-line"></div>
        <div className="rural-education-text">
          <h1>Rural Education</h1>
        </div>
        <div className="rural-education-green-line"></div>
      </div>
      <p className="para">
        We are working on to provide quality education to rural children. A
        large portion of rural students must deal with a lack of access to{" "}
        <br></br>
        quality reading materials and instruction at a early age(especially
        preschool)
      </p>
      <div className="digital-literacy-container">
        <div className="digital-literacy-green-line"></div>
        <div className="digital-literacy-text">
          <h1>Digital Literacy</h1>
        </div>
        <div className="digital-literacy-green-line"></div>
      </div>
      <div className="empowering-container">
        <div className="empowering-text">
          <h1>Empowering Rural India through</h1>
        </div>
        <div className="digital-text">
          <h1>Digital Literacy : A Path to Progress</h1>
        </div>
      </div>
      <p className="para">
        As a dedicated NGO working towards the upliftment of rural India , we
        recognize the transformative power of digital literacy.<br></br>
        Our mission is to bridge the digital divide and empower rural
        communities by providing essential digital skills and resources
      </p>
      <div className="importance-text">
        <h1>Importance of Digital Literacy in Rural Areas</h1>
      </div>
      <p className="digital-p">
        Access to information : Digital literacy enables rural populations to
        access vital information on agriculture , health, education, and
        <br></br>
        government services. Economic opportunities: it open up new avenues for
        employment, entrepreneurship, and financial inclusion<br></br>
        through online platforms. Social connectivity : it helps bridge social
        gaps , allowing rural residents to connect with the wider world,
        <br></br>
        enhancing social cohesion and inclusion. Education Enhancement : Digital
        tool can significantly enhance the quality of education,<br></br>
        providing students with access to a wealth of online and learning
        opportunities.
      </p>
      <img
        src="images/childrens-with-paper.jpg"
        alt="children-with-books"
        className="education-children"
      ></img>
      <div className="our-role-container">
        <img
          src="images/our-role.png"
          alt="our-role-education"
          className="our-role-img"
        ></img>
        <p className="para">
          Tanmay Development Foundation is dedicated to improving to Rural
          Education. we<br></br>
          Focus on to provide quality educationto rural children. A large
          portion of rural<br></br>
          students must deal with a lack of access to quality reading materials
          and instruction at an<br></br>
          early age(especially preschool).<br></br>
          <br></br>
          We operate at the grassroots level, implementing programs to address
          educational<br></br>
          disparities
        </p>
      </div>
      <div className="our-work-button">
        <h1>OUR WORK</h1>
      </div>
      <div className="our-work-container">
        <div className="our-work-images">
          <img src="images/our-work-img1.jpg" alt="child-with-book"></img>
        </div>
        <div className="our-work-images">
          <img src="images/image3.jpg" alt="child-with-book"></img>
        </div>
        <div className="our-work-images">
          <img src="images/image15.jpg" alt="child-with-book"></img>
        </div>
      </div>
      <div className="our-work-p">
        <div className="our-work-p1">
          <p>Providing material for education</p>
          <div className="underline"></div>
        </div>
        <div className="our-work-p1">
          <p>
            Enhancing primary education in  Rural Area
          </p>
         
          <div className="underline1"></div>
        </div>
        <div className="our-work-p1">
          <p>
            We provide a comprehensive curriculum<br></br>
            design to foster critical thinking,<br></br>
            creativity, and lifelong learning skills.
          </p>
          <div className="underline2"></div>
        </div>
      </div>

      <div className="our-work-container">
        <div className="our-work-images">
          <img src="images/image6.jpg" alt="child-with-book"></img>
        </div>
        <div className="our-work-images">
          <img src="images/students-studying.jpg" alt="child-with-book"></img>
        </div>
        <div className="our-work-images">
          <img
            src="images/children-watching-tv.jpg"
            alt="child-with-book"
          ></img>
        </div>
      </div>
      <div className="our-work-p">
        <div className="our-work-p1">
          <p>
            Distributed numbers of educational<br></br>{" "}
          </p>
          <span className="supplies">supplies and resources</span>
          <div className="underline"></div>
        </div>
        <div className="our-work-p1">
          <p>
            Improving Literacy rate in Rural Areas<br></br>
          </p>
          <div className="underline1"></div>
        </div>
        <div className="our-work-p1">
          <p>Empoering Rural India through Digital  Literacy</p>
         
          <div className="underline2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Education;
