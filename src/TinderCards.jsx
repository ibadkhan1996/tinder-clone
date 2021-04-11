import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);
  // BAD and OLD way (Push an array in React)
  // const people = [];
  // people.push("ibad", "khan");

  // GOOD and NEWER way (Push to an array in React)
  // const [people, setPeople] = useState([]);
  // setPeople([...people,"ibad","khan"])

  //Piece of code which runs based on a condition
  useEffect(() => {
    //this is where the code runs
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      // this is the cleanup
      unsubscribe();
    };
    // this will run ONCE when the component loads, and never again
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
