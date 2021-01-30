import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education" id="education">
      <div className="education-container">
        <div className="header">
          <h1>Education</h1>
        </div>
        <div className="text">
          <p>
            <b> The College Of Academic Management Studies</b>
            <ul>
              <li style={{ margin: "40px" }}>
                <b>2018-Present</b> 3rd year Computer Science student (B.Sc).
                GPA:89{" "}
              </li>
            </ul>
            <b>Part of the Colman Dev Club.</b>
            <ul>
              <li style={{ margin: "40px" }}>
                2020-Present Taking part in a limited group of students that
                were preselected and making weekly meetings in order to
                professionalize in HTML, CSS and JS and become better
                developers.
              </li>
            </ul>
            <b>Mekif H High School, Rishon Le-Zion.</b>
            <ul>
              <li style={{ margin: "40px" }}>
                2009-2011 Matriculation certificate majoring in Communication
                (finished with Excellence).
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
