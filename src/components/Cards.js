import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards" id="cards">
      <h1>MY PROJECTS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.ibb.co/LQXVTvd/todolistangular.jpg"
              text="Todo-list project created with angular using typescript"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://github.com/ColmanDevClub/First-Js-Challenges/raw/starting-files/rock-paper-scissors/assets/design/mobile-step-1.jpg"
              text="Rock Paper Scissors project i made using html css and javascript"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://i.ibb.co/RgfKHcB/chicken.jpg"
              text="Chicken Invaders game i developed using Python"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://i.ibb.co/zFC7xFH/mern.jpg"
              text="MERN APP - a app i developed using React, Node.js, Express, MongoDB.  "
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://i.ibb.co/zSQJjrv/fylojpg.jpg"
              text="frontend design i made during my time as  a Colman Dev Club member"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://i.ibb.co/pvr06rV/coursejpg.jpg"
              text="MERN APP using React, Node, Express and mongoDB "
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
