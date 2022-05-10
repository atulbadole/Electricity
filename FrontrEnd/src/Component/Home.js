import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container-fluid">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
      />
      {/* font awesome cdn link  */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      {/* custom css file link  */}
      <link rel="stylesheet" href="css\style.css" />
      <header className="header">
        <div id="menu-btn" className="fas fa-bars" />
        <a href="/#" className="logo" title="/">
          {" "}
          <i class="fas fa-hiking"></i> <span>Electri</span>City
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <h3 data-speed={-2} className="home-parallax">
          <i>Electricity Bill Management System</i>
        </h3>
        <img
          data-speed={5}
          className="home-parallax"
          src={require("../Photos/banner.jpg")}
          style={{ width: "100%", height: "600px" }}
          alt=""
        />
      </section>
      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-home" />
          <div className="content">
            <h3>100+</h3>
            <p>Branches</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-users" />
          <div className="content">
            <h3>400+</h3>
            <p>Active Users</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-users" />
          <div className="content">
            <h3>300+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-users" />
          <div className="content">
            <h3>700+</h3>
            <p>New Users</p>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          Our <span>Services</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-user" />
            <h3>Admin Login</h3>
            <p>Only for the Administration</p>
            <button className="btn">
              <NavLink to={"/login"} exact>
                Login
              </NavLink>
            </button>
          </div>
          <div className="box">
            <i className="fas fa-user" />
            <h3>New User</h3>
            <p>Register here</p>
            <button className="btn">
              <NavLink to={"/Signup"} exact>
                Signup
              </NavLink>
            </button>
          </div>
          
          <div className="box">
            <i className="fas fa-coin" />
            <h3>Bill Payment</h3>
            <p>Pay your bills easy and quick</p>

            <button className="btn">
              <NavLink to={"/Pay"} exact>
                Pay
              </NavLink>
            </button>
          </div>
          <div className="box">
            <i className="fas fa-headset" />
            <h3>24/7 support</h3>
            <p>We are ready to help you anytime</p>
            <a href="#contact" className="btn">
              Help
            </a>
          </div>
        </div>
      </section>
      <section className="reviews" id="reviews">
        <h1 className="heading"> Client's Review </h1>
        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="../Photos/pic.jpg" alt="" />
              <div className="content">
                <p>
                  This is the best app in terms of payment speed, security.
                  There is no single transaction has ever failed for me.
                </p>
                <h3>Shivam Singh</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="image/pic-3.png" alt="" />
              <div className="content">
                <p>
                  Easy to understand . I have enjoyed the apps so far. Overall
                  the experience is really smooth.
                </p>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="image/pic-6.png" alt="" />
              <div className="content">
                <p>One of the best app the UI is very simple and effective.</p>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
          <iframe
            className="map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.175134961476!2d76.65758911424848!3d30.516086481713167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1651033611549!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
          <form action>
            <h3>get in touch</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="tel" placeholder="subject" className="box" />
            <textarea
              placeholder="your message"
              className="box"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <input type="submit" defaultValue="send message" className="btn" />
          </form>
        </div>
      </section>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>Our Branches</h3>
            <a href="/#">
              {" "}
              <i className="fas fa-map-marker-alt" /> Baddi{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-map-marker-alt" /> Chandigarh{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-map-marker-alt" /> Delhi{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-map-marker-alt" /> Indore{" "}
            </a>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <a href="/#">
              {" "}
              <i className="fas fa-arrow-right" /> home{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-arrow-right" /> services{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-arrow-right" /> reviews{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-arrow-right" /> contact{" "}
            </a>
          </div>
          <div className="box">
            <h3>Contact Info</h3>
            <a href="/#">
              {" "}
              <i className="fas fa-phone" /> +91 1234567890{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-phone" /> +91 1234567890{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-envelope" /> abc123@gmail.com{" "}
            </a>
            <a href="/#">
              {" "}
              <i className="fas fa-map-marker-alt" />
              Chitkara University,Himachal Pradesh{" "}
            </a>
          </div>
          <div className="box">
            <h3>Contact Info</h3>
            <a href="https://www.facebook.com/profile.php?id=100008737546683">
              {" "}
              <i className="fab fa-facebook-f" /> facebook{" "}
            </a>
            <a href="https://twitter.com/Atul53343901?t=wgSr2TYqFrSCfrGF52qR4Q&s=09">
              {" "}
              <i className="fab fa-twitter" /> twitter{" "}
            </a>
            <a href="https://www.instagram.com/atul_1715/">
              {" "}
              <i className="fab fa-instagram" /> instagram{" "}
            </a>
            <a href="https://www.linkedin.com/in/atul-badole-1237a2215/">
              {" "}
              <i className="fab fa-linkedin" /> linkedin{" "}
            </a>
            
          </div>
        </div>
       
        <p class="credit">Copyright @2022 | Designed  by <a href="/#">Atul</a></p>

      </section>
    </div>
  );
};
