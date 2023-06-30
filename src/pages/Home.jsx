import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import travel from "./images/Travel-app.png";
import weather from "./images/weather-app.png";
import dictionary from "./images/dictionary.png";

export default function Home() {
    return(
    <div className="Home container">
      <div className="hero">
      <p>👋Hi there, I am...</p>
      <h1>Alexis Allison</h1>
      <h3>Front End Developer in Ashland, OH</h3>
      <div>
        <a href="/contact.html" title="Contact Alexis" className="btn btn-branding"
          >Let's Connect</a
        >
      </div>
    </div>
    <p className="text-center m-5">Featured Projects</p>
    <div className="container">
      <div className="row mb-5">
        <div className="col d-none d-lg-block">
          <img
            src={travel}
            class="project-image img-fluid"
            alt="HTML Project"
          />
        </div>
        <div class="col">
          <div class="project-description">
            <h2 class="mb-5">Travel Landing Page</h2>
            <p class="mb-4">
              Landing page for a travel site to The Maldives. This project
              utilized HTML, CSS and JavaScript with a focus on mastering iframe.
            </p>
            <a
              href="/work.html#travel"
              class="btn btn-branding-outline"
              >Learn More</a
            >
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <div class="project-description">
            <h2 class="mb-5">Weather App Project</h2>
            <p class="mb-4">
              App using HTML, CSS, Javascript, Bootstrap, Weather API and
              Location API to search for any city and display the current
              temperature and forecast for the next 5 days.
            </p>
            <a href="/work.html#weather-app" class="btn btn-branding-outline"
              >Learn More</a
            >
          </div>
        </div>
        <div class="col d-none d-lg-block">
          <img
            src={weather}
            class="project-image img-fluid"
            alt="Weather App"
          />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col d-none d-lg-block">
          <img
            src={dictionary}
            class="project-image img-fluid"
            alt="Dictionary App"
          />
        </div>
        <div class="col">
          <div class="project-description">
            <h2 class="mb-5">Dictionary Project</h2>
            <p class="mb-4">
              React app using HTML, CSS, Bootstrap, Javascript, and two API's to search for any word and display the definitions, synonyms, examples and images.
            </p>
            <a href="/work.html#dictionary" class="btn btn-branding-outline"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </div>
    </div>
);
}