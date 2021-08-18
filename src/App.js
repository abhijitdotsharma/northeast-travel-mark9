import { useState } from "react";
import "./styles.css";

const placesToVisitDatabase = {
  popular: [
    { name: "shillong - meghalaya", rating: "5/5" },
    { name: "ziro valley - arunachal", rating: "4.5/5" },
    { name: "majuli - assam", rating: "4/5" }
  ],
  waterfall: [
    { name: "langshiang falls - meghalaya", rating: "5/5" },
    { name: "kakochang waterfall – assam", rating: "4/5" },
    { name: "vantawng falls – mizoram", rating: "4/5" }
  ],
  trekking: [
    { name: "tawang - arunachal", rating: "4.5/5" },
    { name: "dibang valley - arunachal", rating: "4.5/5" },
    { name: "cherrapunjee - meghalaya", rating: "5/5" }
  ]
};

const placesArray = Object.keys(placesToVisitDatabase);

export default function App() {
  let [selected, setSelected] = useState("waterfall");

  function categoriesClickHandler(categories) {
    setSelected(categories);
  }
  return (
    <div className="App">
      <h1> northEast travel </h1>
      <p> travel to a land with less tourists but more adventure </p>

      <div>
        {placesArray.map(function (categories) {
          return (
            <button
              key={categories}
              onClick={() => categoriesClickHandler(categories)}
            >
              {" "}
              {categories}
            </button>
          );
        })}
      </div>

      <ul>
        {placesToVisitDatabase[selected].map(function (place) {
          return (
            <li key={place.name}>
              <div className="name"> {place.name}</div>
              <div className="rating"> {place.rating} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
