import React from "react";

function Footer(){
    return(
        <footer>
      <div class="container">
        <div class="contact-box justify-content-between mb-5 d-none d-md-flex">
          <div>
            <h4>Work Inquiry</h4>
            <p>Let's work together</p>
          </div>
          <div>
            <a
              href="/contact.html"
              title="Contact Alexis"
              class="btn btn-branding mt-4"
              >Contact Me</a
            >
          </div>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <a
            href="mailto:alexisallison1801@gmail.com"
            class="btn email-link"
            
            title="Email Alexis"
            >alexisallison1801@gmail.com</a
          >
        </div>
        <div class="d-flex justify-content-center social-links">
          <a
            href="https://instagram.com/alexis_codes?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noreferrer"
            title="Instagram Profile"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a
            href="https://github.com/alexisallison"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-allison-753769222"
            target="_blank"
            rel="noreferrer"
            title="Linked-In Profile"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p class="text-center mt-3">
          This site was coded by Alexis and is
          <a
            href="https://github.com/alexisallison/portfolio-project.git"
            target="_blank"
            title="GitHub Repository"
            class="open-source-link"
            rel="noreferrer"
            >open-sourced</a
          >.
        </p>
      </div>
    </footer>
    );
}

export default Footer;