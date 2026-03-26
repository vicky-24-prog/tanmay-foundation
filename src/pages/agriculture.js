import React from "react";
import "../styles/agriculture.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Agriculture() {
  const CommunityHandle = () => {
    window.open("https://chat.whatsapp.com/LbSH4XC8PJC8IcPZwLy1VS", "_blank");
  }
  return (
    <div className="agriculture-container">
      <Header/>
      <header className="agriculture-header">
        <div className="agriculture-line"></div>
        <h1>Sustainable Agriculture</h1>
      </header>

      <div className="agriculture-image-container">
        <img
          src="images/har.jpg"
          alt="Farmers working in a field during sunset with green crops in the foreground"
          className="agriculture-responsive-image"
        />
      </div>

      <section className="agriculture-content">
        <h2>What is sustainable agriculture?</h2>
        <p>
          Sustainable agriculture is farming in ways that meet society's food
          and textile needs without compromising the ability of current or
          future generations to meet their own needs. It aims to integrate
          ecological processes, reduce reliance on non-renewable inputs, and
          promote self-reliance among farmers.
        </p>

        <h2>How does sustainable agriculture help our farmers?</h2>
        <ol>
          <li>
            Sustainable agriculture prioritizes maintaining and improving soil
            health. This involves practices such as crop rotation, cover
            cropping, reduced tillage, and organic matter additions to enhance
            soil fertility, structure, and water retention.
          </li>
          <li>
            Efficient water use is crucial in sustainable agriculture.
            Techniques like drip irrigation, rainwater harvesting, and using
            drought-resistant crops help conserve water resources.
          </li>
        </ol>
      </section>
      <div className="farming-container">
        <div className="farming-workpart">
          <h1>Our work</h1>
        </div>
        <img
          src="images/manInField1.png"
          className="image1"
          alt="manInField"
        ></img>
        <img
          src="images/manInField.png"
          className="image1"
          alt="manInField"
        ></img>
        <img
          src="images/field-image.jpg"
          className="image1"
          alt="peopleInField"
        ></img>
      </div>
      <div className="farming-featured-projects">
        <h2>Featured Projects</h2>
      </div>
      <div className="farming-project-details">
        <div className="project-row">
          <div className="project-column">
            <h6>
              <strong>Project 1</strong>: Sustainable Agriculture Training
            </h6>
            <p>
              Making farmers understand about sustainable<br></br> agriculture
              through video workshops and live<br></br> presentation.
            </p>
            <img
              src="images/womeninField.png"
              alt="Project 1"
              className="project-image"
            />
          </div>

          <div className="vertical-divider"></div>

          <div className="project-column">
            <h6>
              <strong>Project 2</strong>: Soil Health Workshops
            </h6>
            <p>
              Educating farmers on soil conservation <br></br>techniques,
              composting, crop rotation, and <br></br>cover cropping.
            </p>
            <img
              src="images/peopleinField.png"
              alt="Project 2"
              className="project-image"
            />
          </div>
        </div>
      </div>

      <div className="farming-sustainable-solutions">
        <h2>Our Sustainable Farming Solutions</h2>
        <p>
          Through our sustainable farming solutions, we were able to achieve
          more crop yield and minimize the negative environmental <br></br>
          impacts of agriculture, such as soil erosion, water pollution, habitat
          destruction, and greenhouse gas emissions.
        </p>
        <img
          src="images/tractor.jpg"
          alt="Tractor working in a large green field"
        />
      </div>

      <h1 className="subscription-title">
        Join our Farming<br></br> Community Today
      </h1>
      <div className="subscription-container">
        <input
          type="email"
          className="email-input"
          placeholder="Type your email address"
        />
        <button  onClick={CommunityHandle}className="join-button">
          <strong>Join now</strong> <span className="arrow">→</span>
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Agriculture;
