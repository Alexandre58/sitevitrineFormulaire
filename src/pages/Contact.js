import React, { useState } from "react";
import Bouton from "../components/Bouton";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Contact = () => {
  const bienvenu = ["Thierry", "Béatrice", "Cyndie", "Tim", "Tony", "Louana"];
  const bienvenu2 = [
    { adresse: "Toulon", id: 1 },
    { adresse: "Caen", id: 2 },
    { adresse: "St Amand en Puisaye", id: 3 },
    { adresse: "Eloise", id: 4 },
    { adresse: "Blois", id: 5 },
    { adresse: "Treigny", id: 6 },
  ];
  //map
  const mapDuTableau = bienvenu2.map((lesNoms) => (
    <li key={lesNoms.id}>
      {lesNoms.id} : ville de {lesNoms.adresse}
    </li>
  ));

  const data = "abc";
  const data2 = true;

  return (
    <div className="div_container">
      <Navigation />
      <div>
        <h1 className="contact_h1">contact</h1>
        <h2>Les données sont data :{data.toUpperCase()}</h2>
        <h2>Les données sont data :{10 + 10}</h2>
        <h2 className={data2 ? "animating" : " app "}>
          Les données sont {data2 ? "la data2 est true " : "la data2 est false"}
        </h2>
        {data2 && (
          <h3 className={"animating"}>
            Rendu conditionnel avec && et data sur true
          </h3>
        )}
        <ul>
          {bienvenu.sort().map((names) => (
            <li key={names}>{`Le Prenom de nos invités sont : ${names}`}</li>
          ))}
        </ul>
      </div>
      <div className="contact_container_button">
        <Bouton compteur={"likes pour toi : "} compteur2={"disLikes :"} />
        {/**   <Bouton compteur2={"Diskes pour l'autre pignouff : "} />*/}
      </div>
      <ul>
        Provient du tableau avec le map mis dans une variable: {mapDuTableau}
      </ul>
      <Footer title={" bonjour footer"} num={5}>
        <p>children</p>
      </Footer>
    </div>
  );
};

export default Contact;
