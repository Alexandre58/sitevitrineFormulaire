import { useState, useCallback } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const initialUserData = {
  prenom: "",
  nom: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default function App() {
  console.log("### Refreshing");

  const [userData, setUserData] = useState(initialUserData);
  console.log(userData);
  const updateUserDataHandler = useCallback(
    (type) => (event) => {
      setUserData({ ...userData, [type]: event.target.value });
    },
    [userData]
  );

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();
      console.log("***balancer sur la base de donnée***");
      console.log(userData);
      console.log("**********************************");
    },
    [userData]
  );

  return (
    <>
      <Navigation />
      <div className="flexh-screen_container">
        <h1 className="text-3xl">Signup avec useState, useCallback</h1>
        <p className="text-3xl_p">
          Bonne approche du formulaire mais peut se faire avec useRef en projet
          3 avec un rafraichissement que lorsqu'on clic sur envoyer.
        </p>
        <p className="text-3xl_p">
          Ce formulaire raffraichi le formulaire à chaque tape sur le clavier.
        </p>
        <form className="form_container" onSubmit={formHandler()}>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="prenom">
              Prenom
            </label>
            <input
              id="prenom"
              placeholder="prenom"
              type="text"
              className="shadowappearance"
              value={userData.prenom}
              onChange={updateUserDataHandler("prenom")}
            />
          </div>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="nom">
              Nom
            </label>
            <input
              id="full_name"
              placeholder="nom"
              type="text"
              className="shadowappearance"
              value={userData.nom}
              onChange={updateUserDataHandler("nom")}
            />
          </div>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="email">
              Votre Email
            </label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              className="shadowappearance"
              value={userData.email}
              onChange={updateUserDataHandler("email")}
            />
          </div>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              className="shadowappearance"
              value={userData.password}
              onChange={updateUserDataHandler("password")}
            />
          </div>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="password_confirmation">
              Confirmation du mot de passe
            </label>
            <input
              id="password_confirmation"
              placeholder="Password Confirmation"
              type="password"
              className="shadowappearance"
              value={userData.passwordConfirmation}
              onChange={updateUserDataHandler("passwordConfirmation")}
            />
          </div>
          <button className="bg-blue-500" type="submit">
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
