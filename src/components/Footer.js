import React from "react";

const Footer = ({ children, title, num }) => {
  return (
    <div className="footer_div">
      <h1 className="footer_h1">footer</h1>
      {children}
      {num}
      <h2 className="footer_h2">composent enfant : {title}</h2>
      <h2>{title}</h2>
    </div>
  );
};

export default Footer;
