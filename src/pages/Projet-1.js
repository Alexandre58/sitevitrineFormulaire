import React, { useState } from "react";
import Navigation from "../components/Navigation";

const Projet1 = () => {
  const [array1, setArray1] = useState([1, 2, 3]);
  console.log(array1);
  //function pour le bouton
  const changerLeState = () => {
    setArray1([...array1, 5, 6, 7, "Thierry"]);
  };
  console.log(array1);
  return (
    <>
      <Navigation />
      <div>
        <h1 className="projet1_h1">Projet 1</h1>
        <button onClick={changerLeState} className="projet-1-button">
          Changer le State
        </button>
        <h2>{array1.join(" _ ")}</h2>
      </div>
    </>
  );
};

export default Projet1;
