import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./HomePage.css";

const HomePage = () => {
  const [people, setPeople] = useState([
    {
      name: "Michel Joe",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxhRWVBVBcIINFDrTuCSNwm-QsnBOpOn3ybQ&usqp=CAU",
    },
    {
      name: "David Gandy",
      url:
        "https://manofmany.com/wp-content/uploads/2019/03/10-Most-Famous-Male-Models-of-All-Time-David-Gandy.jpg",
    },
    {
      name: "Mark Shawn",
      url:
        "https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD30001159/andreasdp119382a9c9d8dc05340a075edf137e150_thumb.jpg",
    },
    {
      name: "Sawn Joe",
      url:
        "https://mediaslide-europe.storage.googleapis.com/named/pictures/768/1853/profile-1566992424-96f5a1800431801f3d48e0f68e506abe.jpg?v=1566992565",
    },
    {
      name: "Bela Hedid",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLC82Stho0GRuZd4XIUf73yeP1sM0UlYpIRA&usqp=CAU",
    },
    {
      name: "Mini Dsouza",
      url:
        "https://www.allperfectstories.com/wp-content/uploads/2017/06/MODEL-1024x640.jpg",
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
