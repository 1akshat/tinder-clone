import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../../../firebase";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Neeta",
      url:
        "https://castyou-website.sgp1.digitaloceanspaces.com/2019/10/neeta-shetty.jpg",
    },
    {
      name: "Julia",
      url:
        "https://www.giantmanagement.com/wp-content/uploads/2017/09/natasha_thumbnail-650x813.jpg",
    },
    {
      name: "Maria",
      url:
        "https://www.wonderslist.com/wp-content/uploads/2019/07/Doutzen-Kroes-Highest-Paid-Models.jpg",
    },
    {
      name: "Mia",
      url:
        "https://modelsonly.in/wp-content/uploads/2019/09/8-2-480x580_t.jpeg",
    },
  ]);

  useEffect(() => {
    const dettachListener = database
      .collection("people")
      .onSnapshot((snapshot) => {
        setPeople(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      dettachListener();
    };
  }, [people]);

  return (
    <div>
      <div className="card-container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${person.url})`,
              }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
