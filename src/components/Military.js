import React from "react";
import "./Military.css";

function Military() {
  return (
    <div className="military">
      <div className="military-container">
        <div className="header">
          <h1>Military</h1>
        </div>
        <div className="text">
          <p>
            <b> UNIT 8200 | 2012-2015</b>
            <ul>
              <li style={{ margin: "40px" }}>
                Collected signal intelligence using highly classified
                information involving an understanding of Arabic.
              </li>
              <li style={{ margin: "40px" }}>
                Head of SIGINT Team – Managed a team of 15 soldiers.
              </li>
              <li style={{ margin: "40px" }}>
                Controlled and prioritized missions.
              </li>
              <li style={{ margin: "40px" }}>
                Dealt with complex situations..
              </li>
              <li style={{ margin: "40px" }}>
                Analyse and process Intelligence data from a variety of sources
                while using intelligence systems and technologies.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Military;
