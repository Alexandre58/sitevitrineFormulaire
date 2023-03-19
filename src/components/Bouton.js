import React, { useState } from "react";

const Bouton = ({ compteur, compteur2 }) => {
  //useState
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);

  //function
  const handleClick = () => {
    setLikes(likes + 1);
  };
  const handleClick2 = () => {
    setDisLikes(disLikes + 1);
  };
  console.log(likes);
  console.log(disLikes);

  let totalLikes = likes - disLikes;
  const differenceTotalLikes = () => {
    if (totalLikes > 0) {
      return (
        <p className="bouton_p_affichageDisLikesLikes">
          Tu as {totalLikes} likes de plus par apport à tes disLikes.
        </p>
      );
    } else {
      return (
        <p className="bouton_p_affichageDisLikesLikes">
          Tu as {totalLikes} disLikes par apport à tes likes.
        </p>
      );
    }
  };
  const affichageDisLikesLikes = () => {
    if (totalLikes > 0) {
      return <p className="bouton_p_affichageDisLikesLikes">Plus de Likes</p>;
    } else if (totalLikes == 0) {
      return (
        <p className="bouton_p_affichageDisLikesLikes">Tu est en égalité</p>
      );
    } else {
      return <p className="bouton_p_affichageDisLikesLikes">Moins de likes</p>;
    }
  };

  return (
    <div className="bouton_container">
      <button className="ButtonContact_1" onClick={handleClick}>
        Likes
      </button>
      <button className="ButtonContact_2" onClick={handleClick2}>
        disLikes
      </button>
      <h3 className="contact_h3_likes">
        {compteur}
        {likes}
      </h3>
      <h3 className="contact_h3_likes">
        {compteur2}
        {disLikes}
      </h3>
      <h3 className="bouton_p_affichageDisLikesLikes">
        difference = {totalLikes} {affichageDisLikesLikes()}
      </h3>
      <h3 className="bouton_p_affichageDisLikesLikes">
        {differenceTotalLikes()}
      </h3>
    </div>
  );
};

export default Bouton;
