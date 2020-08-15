import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./HomePage.css";

const HomePage = () => {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg",
    },
  ]);

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
