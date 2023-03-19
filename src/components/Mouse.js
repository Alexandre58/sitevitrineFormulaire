import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      console.log(e);
    });
  }, []);

  return <span className="cursor"></span>;
};

export default Mouse;
