import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation_container">
        <ul className="ul_navigation">
          {/**********************************ACCUEIL */}
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li className="li_navigation">Accueil</li>
          </NavLink>
          {/******************************************************NAVIGATION DU PORTFOLIO AVEC LES PROJET EN HOVER */}
          <li className="navigation_li li_navigation ">
            portfolio
            <ul className="portfolio_navigation_des_projets">
              {/**PROJET1 */}
              <NavLink
                to="/projet1"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li className="li_navigation">Projet 1</li>
              </NavLink>
              {/**PROJET2 */}

              <NavLink
                to="/projet2"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li className="li_navigation">Projet 2</li>
              </NavLink>
              {/**PROJET3 */}
              <NavLink
                to="/projet3"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li className="li_navigation">Projet 3</li>
              </NavLink>
              {/**PROJET4 */}
              <NavLink
                to="/projet4"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li className="li_navigation">Projet 4</li>
              </NavLink>
              {/**PROJET5 */}
              <NavLink
                to="/projet5"
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
              >
                <li className="li_navigation">Projet 5</li>
              </NavLink>
            </ul>
          </li>

          {/*********************************CONTACT */}
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li className="li_navigation">Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
