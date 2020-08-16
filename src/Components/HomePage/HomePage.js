import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "../../firebase";
import "./HomePage.css";

const HomePage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    function fetchPeople() {
      database.collection("people").onSnapshot((snapshot) => {
        setPeople(snapshot.docs.map((doc) => doc.data()));
      });
    }

    fetchPeople();
  }, []);

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

export default HomePage;
