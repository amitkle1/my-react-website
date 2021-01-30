import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="experience-container">
        <div className="header">
          <h1>Experience</h1>
        </div>
        <div className="text">
          <p>
            <b> FullStack Developer at Yavo (Start-up) | 2020-Present </b>
            <ul>
              <li style={{ margin: "40px" }}>
                Working on WordPress platform using JavaScript for frontend.
              </li>
              <li>
                Understanding the functionality of the previous site and apply
                on a brand-new site
              </li>
              <li style={{ margin: "40px" }}>
                Developing a new website from scratch using React.js and node.js
              </li>
            </ul>
            <b>Technical Department Shift Manager - Cinema City | 2016-2020</b>
            <ul>
              <li style={{ margin: "40px" }}>
                Finding solutions for technical issues and Equipment management.
              </li>
              <li>Projecting movies using the cinema’s software.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
