import React, { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Projet2 = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      prenom: "Thierry",
      ville: "Treigny",
    },
    {
      id: 2,
      prenom: "Béatrice",
      ville: "Treigny",
    },
    {
      id: 3,
      prenom: "Tim",
      ville: "Eloise",
    },
    {
      id: 4,
      prenom: "Tony",
      ville: "Blois",
    },
    {
      id: 5,
      prenom: "Cyndie",
      ville: "Toulon",
    },
    {
      id: 6,
      prenom: "Louna",
      ville: "Toulon",
    },
  ]);
  console.log(names);
  console.log(setNames);
  const mapDeNames = names.map((index) => (
    <li key={index.id}>
      {index.prenom} domincilié à {index.ville}
    </li>
  ));
  return (
    <>
      <Navigation />
      <div className="projet2_h1_container">
        <h1 className="projet2_h1">Projet 2</h1>
        <ul>{mapDeNames}</ul>
      </div>
      <Footer title={"Projet 2"} num={".map sur tableau"} />
    </>
  );
};

export default Projet2;
