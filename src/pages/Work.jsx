import React from "react";
import travel from "../images/Travel-app.png";
import weather from "../images/weather-app.png";
import dictionary from "../images/dictionary.png";
import weathertwo from "../images/react-weather-app.png";

 function Work () {
    return(
        <div className="Work container">
         <div className="content-container container">
      <div className="content">
        <h1 className="mb-5">What I've been working on</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src={travel}
              alt="travel-app"
              className="project-image img-fluid mb-3"
              id="travel"
            />
            <h3 className="text-center m-0">Travel Site Landing Page</h3>
            <p className="text-center">Built with HTML, CSS, JavaScript</p>
          </div>
          <div className="col-md-6 mb-4">
            <img
              src={weather}
              alt="weather app"
              className="project-image img-fluid mb-3"
              id="weather-app"
            />
            <h3 className="text-center m-0">Weather App</h3>
            <p className="text-center">Built with HTML, CSS, Javascript, API</p>
          </div>

          <div className="col-md-6 mb-4">
            <img
              src={dictionary}
              alt="dictionary app"
              className="project-image img-fluid mb-3"
              id="dictionary"
            />
            <h3 className="text-center m-0">Dictionary App</h3>
            <p className="text-center">Built with React, HTML, CSS, Javascript, API</p>
          </div>
          <div className="col-md-6 mb-4">
            <img
              src={weathertwo}
              alt="react weather app"
              className="project-image img-fluid mb-3"
              id="react-weather-app"
            />
            <h3 className="text-center m-0">React Weather App</h3>
            <p className="text-center">Built with React, HTML, CSS, Javascript, API</p>
          </div>
        </div>
      </div>
    </div></div>
    );
}
export default Work;