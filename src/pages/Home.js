import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
{
  /**import Mouse from "../components/Mouse";*/
}
const Home = () => {
  return (
    <>
      <Header />
      <div>
        {/**  <Mouse />*/}
        <Navigation />
        <h1 className="home h1">Page Home</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
