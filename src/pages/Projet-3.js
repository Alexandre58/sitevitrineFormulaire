import React, { useCallback, useRef } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Projet3 = () => {
  const fullNameInputElement = useRef();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const passwordConfirmationInputElement = useRef();
  console.log("**********************************");
  console.log(fullNameInputElement);
  console.log("**********************************");
  console.log(emailInputElement);
  console.log("**********************************");
  console.log(passwordInputElement);
  console.log("**********************************");
  console.log(passwordConfirmationInputElement);
  console.log("**********************************");

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        fullName: fullNameInputElement.current?.value,
        email: emailInputElement.current?.value,
        password: passwordInputElement.current?.value,
        passwordConfirmation: passwordConfirmationInputElement.current?.value,
      };
      console.log("***clic button**log data**********");
      console.log(data);
      console.log("**********************************");
    },
    []
  );

  return (
    <>
      <Navigation />
      <div className="flexh-screen_container">
        <h1 className="text-3xl">
          Signup1 avec useRef le deuxieme est en projet 4
        </h1>
        <p className="text-3xl_p">description du formulaire : </p>
        <p className="text-3xl_p">
          Ce formulaire se raffraichi que lorsque l'on clic sur le bouton
          envoyé.
        </p>
        <p className="text-3xl_p">
          Dans le projet 4 le formulaire se raffrai à chaque tape sur le
          clavier.
        </p>
        <form className="form_container" onSubmit={formHandler()}>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="full_name">
              Full name
            </label>
            <input
              ref={fullNameInputElement}
              id="full_name"
              placeholder="Full name"
              type="text"
              className="shadowappearance"
            />
          </div>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="email">
              Email
            </label>
            <input
              ref={emailInputElement}
              id="email"
              placeholder="Email"
              type="email"
              className="shadowappearance"
            />
          </div>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordInputElement}
              id="password"
              placeholder="Password"
              type="password"
              className="shadowappearance"
            />
          </div>
          <div className="flexflex-colmb-4">
            <label className="text-gray" htmlFor="password_confirmation">
              Password Confirmation
            </label>
            <input
              ref={passwordConfirmationInputElement}
              id="password_confirmation"
              placeholder="Password Confirmation"
              type="password"
              className="shadowappearance"
            />
          </div>
          <button className="bg-blue-500" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer title={" bonjour footer"} num={5} />
    </>
  );
};
export default Projet3;
