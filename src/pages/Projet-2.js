import React, { useState } from "react";

const Projet2 = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      nom: "Thierry",
    },
    {
      id: 2,
      nom: "Béatrice",
    },
    {
      id: 3,
      nom: "Tim",
    },
    {
      id: 4,
      nom: "Tony",
    },
    {
      id: 5,
      nom: "Cyndie",
    },
    {
      id: 6,
      nom: "Louna",
    },
  ]);
  console.log(names);
  console.log(setNames);
  const mapDeNames = names.map((index) => <li key={index.id}>{index.nom}</li>);
  return (
    <>
      <div className="projet2_h1_container">
        <h1 className="projet2_h1">Projet 2</h1>
        <ul>{mapDeNames}</ul>
      </div>
    </>
  );
};

export default Projet2;
