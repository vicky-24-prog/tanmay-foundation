import React, { useState } from "react";
import "../styles/home.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [donationType, setDonationType] = useState("once");
  const [customAmount, setCustomAmount] = useState("");

  const [amountSelected, setAmountSelected] = useState(false);

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
    setAmountSelected(false);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    setAmountSelected(!!event.target.value);
  };

  const handleAmountButtonClick = (amount) => {
    setCustomAmount(amount);
    setAmountSelected(true);
  };

  const handleDonateNow = () => {
    if (!formData.name || !formData.email) {
      alert("PLEASE FILL THE PERSONAL DETAILS FIRST");
      return;
    }

    const amount = customAmount || (donationType === "once" ? "3000" : "250");
    setFormData((prev) => ({
      ...prev,
      amount: amount,
      donationType: donationType,
    }));
    navigate("/Pin-Number");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    pincode: "",
    city: "",
    state: "",
    pan: "",
    amount: customAmount,
    donationType: donationType,
    citizenship: "Indian",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("PLEASE FILL ALL REQUIRED PERSONAL DETAILS");
      return;
    }

    const certificateData = {
      ...formData,
      name: formData.name,
      amount: customAmount || formData.amount,
      date: new Date().toLocaleDateString("en-IN"),
      donationType: donationType,
    };

    navigate("/Pin-Number", { state: certificateData });
  };
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="home">
      <header className="home-header">
        <img src="images/Logo.png" alt="logo" className="home-logo" />
        <div className="text-and-button">
          <h1 className="home-title">
            <span className="green">Tanmay</span>
            <span className="red">Development</span>
            <span className="green">Foundation</span>
          </h1>
          <button className="donate-button">
            <span role="img" aria-label="heart">
              ❤️
            </span>
            <a href="/Mode-Transaction" className="home-donate-now">
              Donate now
            </a>
          </button>
        </div>
      </header>
      <nav className="navbar">
        <ul className="nav-link">
          <li>
            <a href="/">Home</a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a href="/" className="dropdown-toggle">
              Function Areas {showDropdown ? "▲" : "▼"}
            </a>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/Education">1.Education</a>
                </li>
                <li>
                  <a href="/Women-Empowerment">2.Women Empowerment</a>
                </li>
                <li>
                  <a href="/Environment">3.Environment</a>
                </li>
                <li>
                  <a href="/Agriculture">4.Agriculture</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/Gallery">Gallery</a>
          </li>
          <li>
            <a href="/About-Us">Media</a>
          </li>
          <li>
            <a href="/Mode-Transaction">Donation</a>
          </li>
        </ul>
      </nav>

      <div className="background-container">
        <img
          src="images/homebackground.png"
          alt="home-background"
          className="home-background"
        />
        <div className="overlay"></div>
        <div className="paint-brush-bottom"></div>
        <div className="text-overlay">
          <h2>
            Donate to help India's<br></br> Child for Education
          </h2>
        </div>
      </div>
      <div className="what-we-do">
        <h1 className="what-we-do-title">
          <span className="black">what</span>
          <span className="green">we</span>
          <span className="green">do</span>
        </h1>
        <p>
          <i>Thankyou for being part of our journey and for helping</i>
          <br></br>
          <i>children in need together we can Works closely with</i>
          <br></br>
          <i>institutions, corporate entities, government, local</i>
          <br></br>
          <i>communities and individuals to provide timely</i>
          <br></br>
          <i>interventions in water conservation, environment</i>
          <br></br>
          <i>protection, rural development, sustainable agriculture,</i>
          <br></br>
          <i>sanitation and waste management, women</i>
          <br></br>
          <i>empowerment, education and skilll development.</i>
          <br></br>
          <i>Tanmay Development Foundation is a grassroots</i>
          <br></br>
          <i>organization that aims to bring qualitative improvement</i>
          <br></br>
          <i>and change in the lives of vulnerable people. The</i>
          <br></br>
          <i>strength of Tanmay Development Foundation is its</i>
          <br></br>
          <i>strong community connect and its commitment to the</i>
          <br></br>
          <i>betterment of the underprivileged society.</i>
        </p>

        <div className="how-your-donation-will-help">
          <h1 className="how-your-donation-will-help-title">
            <span className="black">How</span>
            <span className="black">your</span>
            <span className="green">donation</span>
            <span className="green">will</span>
            <span className="green">help??</span>
          </h1>
          <p>
            <i>Your Donation provide crucial financial resources that</i>
            <br></br>
            <i>can be used for various purposes such as funding</i>
            <br></br>
            <i>programs, maintaining operations, and investing in</i>
            <br></br>
            <i>infrastructure and education Overall, Each and every</i>
            <br></br>
            <i>donation play a critical role in enabling organization to</i>
            <br></br>
            <i>achieve their mission, serve their communities, and make</i>
            <br></br>
            <i>a positive difference in the world. Our Focus area - </i>
            <br></br>
          </p>
        </div>
      </div>

      <div className="donate-container">
        <div className="donate-save-tax-container">
          <h2>Donate and Save Tax</h2>
          <div className="citizenship">
            <span>Citizenship*</span>
            <br />
            <label>
              <input
                type="radio"
                name="citizenship"
                value="Indian"
                checked={formData.citizenship === "Indian"}
                onChange={(e) =>
                  setFormData({ ...formData, citizenship: e.target.value })
                }
              />
              Indian citizen
            </label>
          </div>
          <div className="button-group">
            <button
              className={`give-once ${donationType === "once" ? "active" : ""}`}
              onClick={() => handleDonationTypeChange("once")}
            >
              Give Once
            </button>

            <button
              className={`give-monthly ${
                donationType === "monthly" ? "active" : ""
              }`}
              onClick={() => handleDonationTypeChange("monthly")}
            >
              Give Monthly
            </button>
          </div>
          <div className="donation-group">
            <p>
              <i className="fas fa-lock"></i>
              {"🔒"}
              {donationType === "once"
                ? "Donation for one child in a year"
                : "Donation for one child in a month"}
            </p>
            <div className="donation-buttons">
              {donationType === "once" ? (
                <>
                  <button
                    className="donate-green"
                    onClick={() => handleAmountButtonClick("3000")}
                  >
                    Rs 3000
                  </button>
                  <button
                    className="donate-white"
                    onClick={() => setCustomAmount("2800")}
                  >
                    Rs 2800
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="donate-green"
                    onClick={() => setCustomAmount("250")}
                  >
                    Rs 250
                  </button>
                  <button
                    className="donate-white"
                    onClick={() => setCustomAmount("200")}
                  >
                    Rs 200
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="other-amount">
            <input
              type="number"
              placeholder="₹ Other Amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>
          <button
            className="donate-now"
            onClick={() => {
              if (!formData.name || !formData.email) {
                alert("PLEASE FILL PERSONAL DETAILS FIRST");
                return;
              }

              if (!amountSelected) {
                alert("PLEASE SELECT A DONATION AMOUNT FIRST");
                return;
              }

              handleDonateNow();
            }}
          >
            Donate Now !!
          </button>
        </div>
      </div>

      <div className="education-card">
        <div className="card-header">
          <div className="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff"
            >
              <path
                d="M24 26.65 9.15 19 24 11.35 38.85 19ZM24 29.35 14.5 24v5.6q0 .35.175.65.175.3.525.45L24 33.4l8.8-2.7q.35-.15.525-.45.175-.3.175-.65V24ZM24 10 8 18.15q-.55.25-.875.75-.325.5-.325 1.1 0 .6.325 1.075.325.475.875.725l1.5.7V32q0 1.05.6 1.925.6.875 1.55 1.225l11.25 3.55q.3.1.6.1t.6-.1l11.25-3.55q.95-.35 1.55-1.225.6-.875.6-1.925v-9.5l1.5-.7q.55-.25.875-.725.325-.475.325-1.075t-.325-1.1q-.325-.5-.875-.75Z"
                fill="#000000"
              />
            </svg>
          </div>
          <h2>Education</h2>
        </div>
        <br />
        <br />
        <br />
        <p>
          We are working on to provide quality education to rural <br></br>
          children and Empowering Rural India through Digital<br></br>
          Literacy<br></br>
        </p>
                 
      </div>
      <div className="agriculture-card">
        <div className="card-header">
          <div className="card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#fff"
            >
              <path
                d="M24 43.95v-7q-5.3-.85-8.825-4.45Q11.65 28.9 10.55 24.25h7q.4 2.3 2.225 3.9Q21.6 29.75 24 29.75q2.45 0 4.275-1.6 1.825-1.6 2.225-3.9h7q-1.1 4.65-4.625 8.25t-8.825 4.45v7ZM7.1 24.25q-.15-1.15-.2-1.775-.05-.625-.05-1.475 0-6.75 4.2-12.075 4.2-5.325 10.8-6.8v15.5H6.25q-.7 2.35-.75 2.65-.05.3-.15.975Zm15.85 0V6.15q6.6 1.475 10.8 6.8Q38.15 18.275 38.15 25q0 .85-.05 1.475-.05.625-.2 1.775Z"
                fill="#000000"
              />
            </svg>
          </div>
          <h2>Agriculture</h2>
        </div>
        <br />
        <br />
        <br />
        <p>
          Educating farmers on soil conservation techniques,<br></br>
          composting, crop rotation, and cover cropping.<br></br>
        </p>
      </div>
      <div className="women-empowerment-card">
        <div className="card-header">
          <div className="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path
                d="M12.3 33.85q-1.75 0-2.9-1.15-1.15-1.15-1.15-2.9V12.3q0-1.75 1.15-2.9Q10.55 8.25 12.3 8.25q1.75 0 2.9 1.15 1.15 1.15 1.15 2.9v17.5q0 1.75-1.15 2.9-1.15 1.15-2.9 1.15Zm23.4 0q-1.75 0-2.9-1.15-1.15-1.15-1.15-2.9V12.3q0-1.75 1.15-2.9Q33 8.25 34.75 8.25q1.75 0 2.9 1.15 1.15 1.15 1.15 2.9v17.5q0 1.75-1.15 2.9-1.15 1.15-2.9 1.15Zm-11.7 0q-1.75 0-2.9-1.15-1.15-1.15-1.15-2.9v-8.1q0-1.75 1.15-2.9 1.15-1.15 2.9-1.15 1.75 0 2.9 1.15 1.15 1.15 1.15 2.9v8.1q0 1.75-1.15 2.9-1.15 1.15-2.9 1.15Z"
                fill="#000000"
              />
            </svg>
          </div>
          <h2>Women Empowerment</h2>
        </div>
        <br />
        <br />
        <br />
        <p>
          Training local women to serve as catalysts for change. These<br></br>
          women, who are deeply embedded in the community, become <br></br>
          leaders and agents of transformation.<br></br>
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <h2>Enter your details</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mobile No
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Country
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>
          <label>
            Pincode
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            PAN Number
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              title="Enter a valid PAN (e.g., ABCDE1234F)"
            />
          </label>
          <div className="declaration">
            <input type="checkbox" required />
            <p>
              I hereby declare that I am a citizen of India, making this
              donation out of my own funds. The information provided above is
              correct to the best of my knowledge and belief.
            </p>
          </div>

          <div className="payment-info-container">
            <img
              src="images/payment-mode.png"
              alt="Payment Methods"
              className="payment-mode"
            />
            <p>We accept all major payment methods</p>
          </div>
          <button type="submit">Continue To Payment</button>
        </form>
      </div>
      <div className="our-account-details-container">
        <h1 className="our-account-details-container-title">
          <span className="green">Our</span>
          <span className="black">Account</span>
          <span className="black">Details</span>
        </h1>
        <div className="account-details-card">
          <div className="account-info">
            <p>
              <strong>Name:</strong>Tanmay Development Foundation
            </p>
            <p>
              <strong>Account no.:</strong> 7810672868
            </p>
            <p>
              <strong>IFSC code:</strong> IDIB000M730
            </p>
            <p>
              <strong>CIF No.:</strong> 30651090343
            </p>
          </div>
          <div className="QR-section">
            <img
              src="images/scanner.png"
              alt="QR scanner"
              className="qr-scanner"
            />
            <div className="scanner-message">
              <img
                src="images/scanner-message.png"
                alt="scanner message"
                className="scannermessage"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="our-impact-on-society-container">
        <h1 className="our-impact-on-society-container-title">
          <span className="black">Our</span>
          <span className="black">impact</span>
          <span className="green">on</span>
          <span className="green">society</span>
        </h1>
        <div className="our-impact-circle-container">
          <div className="our-impact-circle">
            <span className="text">120+</span>
          </div>
          <div className="our-impact-circle">
            <span className="text">10+</span>
          </div>
          <div className="our-impact-circle">
            <span className="text">300+</span>
          </div>
          <div className="our-impact-circle">
            <span className="text">100+</span>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content-box">
          <p>
            Successfully implemented primary education initiatives in the
            village, enrolling 120 children, and providing necessary educational
            materials, fostering a brighter future for the community.
          </p>
        </div>
        <div className="content-box">
          <p>
            We implemented sustainable farming workshops for village children,
            teaching them modern agricultural techniques, and water
            conservation, ensuring food security.
          </p>
        </div>
        <div className="content-box">
          <p>
            Our NGO has empowered 300+ women through Livelihood Training
            programs and educated women on menstrual hygiene.
          </p>
        </div>
        <div className="content-box">
          <p>
            We organize community tree planting events to increase green cover
            and combat deforestation.
          </p>
        </div>
      </div>
      <div className="donation-container">
        <h1>
          Every donation is incredibly valuable to us because it directly
          supports our mission and the people we aim to help. Here's why each
          donation matters :
        </h1>
        <p className="donation-section">
          <strong>Impact:</strong> Even a small donation can make a significant
          difference in someone's life. It could provide a meal, shelter,
          education materials, or medical care to those in need.
        </p>
        <p className="donation-section">
          <strong>Sustainability:</strong> Regular donations help us plan and
          sustain our programs over the long term. They provide stability and
          enable us to implement lasting solutions to challenges.
        </p>
        <p className="donation-section">
          <strong>Supporting our Cause:</strong> Your donation is not just
          financial support; it's a vote of confidence in our mission. It
          motivates us and shows that our work is valued and supported by our
          community.
        </p>
        <p className="donation-section">
          <strong>Making a Difference:</strong> Every donor plays a crucial role
          in our efforts to create positive change. Your generosity inspires
          others to join us in making the world a better place.
        </p>
        <p className="donation-footer">
          <strong>
            Thank you for considering donating to our cause. Your support truly
            makes a difference!
          </strong>
        </p>
      </div>
      <div classname="bottom-wave">
        <img
          src="images/bottom-wave.png"
          alt="bottom wave"
          className="bottom-wave"
        />
      </div>
      <div className="donation-tax-act">
        <img
          src="images/donation-tax-act.png"
          alt="donation tax act"
          className="donation-tax-act"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
