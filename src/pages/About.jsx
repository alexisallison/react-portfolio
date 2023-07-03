import React from "react";
import Lexi from "../images/Lexi.jpg";

function About() {
    return(
        <div className="About container">
       
    <div className="content-container container">
      <div className="row">
        <div className="col-lg-6">
          <div className="content">
            <h1 className="mb-4">
              Hi, I am <br />
              Alexis Allison👋
            </h1>
            <h2 className="mb-4">Frontend developer in Ashland OH</h2>
            <p className="mb-4">
              Alexis had her educational start at Lone Star College in Texas and
              was later certified through SheCodes in HTML, CSS, Javascript,
              Responsive, and React. After growing up in places like Florida,
              California, Texas, she now enjoys her snowy home in small-town
              America with her fiance and their dog, Sophie.
            </p>
            <a href="/work.html" className="btn btn-branding">See my projects</a>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={Lexi}
            className="img-fluid"
            id="profile-image"
            alt="Alexis Allison"
          />
        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="contact-box justify-content-between mb-5 d-none d-md-flex">
          <div>
            <h4>Work Inquiry</h4>
            <p>Let's work together</p>
          </div>
          <div>
            <a
              href="/contact.html"
              title="Contact Alexis"
              className="btn btn-branding mt-4"
              >Contact Me</a
            >
          </div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <a
            href="mailto:alexisallison1801@gmail.com"
            className="btn email-link"
            title="Email Alexis"
            >alexisallison1801@gmail.com</a
          >
        </div>
        <div className="d-flex justify-content-center social-links">
          <a
            href="https:instagram.com/alexis_codes"
            target="_blank"
            title="Instagram Profile"
            ><i className="fa-brands fa-instagram"></i
          ></a>
          <a
            href="https://github.com/alexisallison"
            target="_blank"
            title="GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-allison-753769222"
            target="_blank"
            title="Linked-In Profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="text-center mt-3">
          This site was coded by Alexis and is
          <a
            href="https://github.com/alexisallison/portfolio-project.git"
            target="_blank"
            title="GitHub Repository"
            className="open-source-link"
            >open-sourced</a
          >.
        </p>
      </div>
    </footer></div>
    );
}
export default About;