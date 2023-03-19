import React, { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { DataContext } from "../context";

const Projet1 = () => {
  //ligne pour le useContextAPI
  const { baseProps } = useContext(DataContext);
  console.log(baseProps);
  //useState
  const [array1, setArray1] = useState([
    "Clic sur le bouton pour voir le resultat du tableau :",
  ]);
  console.log(array1);
  //fUNCTION DU bOUTON
  const changerLeState = () => {
    setArray1([
      ...array1,
      5,
      6,
      7,
      "Thierry",
      "Béatrice",
      "Cyndie",
      "Tony",
      "Tim",
      "Louna",
    ]);
  };
  console.log(array1);
  return (
    <>
      <Navigation />
      <div className="projet1_container">
        <h1 className="projet1_h1">UseState</h1>
        <button onClick={changerLeState} className="projet-1-button">
          Changer le State
        </button>
        <h2 className="projet_H2">{array1.join(" . ")}</h2>
      </div>
      <div className="projet1_container_pour_contextApi">
        <h1>Création d'un contextApi</h1>
        <p className="context_p">1 Création d'un fichier context.js dans rsc</p>
        <p className="context_p">
          2 Provider créer dans ce fichier (attention au double accolades sur la
          value) et allais l'importer dans index.js
        </p>
        <p className="context_p">
          3 On n'ooublie pas d'importer le fichier dans index.js
        </p>
        <p className="context_p">
          4 on vrap la app balise dans la function contextProvider crée dans le
          fichier context.js
        </p>
        <p className="context_p">
          5 Exemple d'emploi On importe dans un component useContext puis aussi
          DataContext.
        </p>
        <p className="context_p">
          Utilisation du Context et resultat, voir le fichier context.js et
          index.js : {baseProps}
        </p>
      </div>
      <Footer title={"projet 1"} num={"useState"} />
    </>
  );
};

export default Projet1;
