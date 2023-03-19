import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
///https://api.coindesk.com/v1/bpi/currentprice.json

const Projet5 = () => {
  const [tauxBC, setTauxBc] = useState();
  // const [isMounted, setIsMounted] = useState(false);
  // const getBitCoin = () => {
  //   return fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
  //     type: "GET",
  //   }).then((res) => res.json());
  // };
  const tableau = [1, 2, 3, 5, 4, 6, 7, 8];
  const mapSurTableauSansAPI = tableau.map((index, number) => (
    <li key={index}>{number}</li>
  ));
  // useEffect(() => {
  //   !isMounted &&
  //     getBitCoin().then((json) => {
  //       setTauxBc(json);
  //       setIsMounted(true);
  //     });
  // }, [isMounted]);

  console.log("le composant se monte");
  useEffect(() => {
    console.log("le composant est monté");
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setTauxBc(data.bpi.EUR.rate);
      })
    );
  }, []);
  return (
    <>
      <Navigation />
      <div className="flexh-screen_container">
        <h1 className="text-3xl">
          Projet 5 useStae et useEffect appel à une Api Il va falloir que je
          regle le soucis car imopssible de faire un map avec une api
        </h1>
        <h2>Prix du Bitcoin : {tauxBC} euros</h2>
        {/**      <ul>
          {tauxBC &&
            tauxBC.map((taux, index) => {
              return <li key={index}>{taux.rate}</li>;
            })}
        </ul>*/}
      </div>
      <div>
        <p className="div_mapSurTableauSansAPI_p">
          Ci-dessous map avec un tableau sur la page.
        </p>
        <ul className="div_mapSurTableauSansAPI">{mapSurTableauSansAPI}</ul>
      </div>
      <Footer title={"projet5"} num={"useEffect et useState"} />
    </>
  );
};

export default Projet5;
