import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="notfoound_div">
        <h1 className="notfound-h1">Page 404</h1>

        <NavLink to="/">
          <h3 className="notfound-h3">
            Retour à l'accueil <i className="fas fa-home"></i>
          </h3>
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
