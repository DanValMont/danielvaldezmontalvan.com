import React from "react";
import { useInvertContext } from "../../context/invert.js";
import classes from "./Footer.module.css";

function Footer() {
  const [styleLayout] = useInvertContext();
  const currentYear = new Date().getFullYear();
  return (
    <div className={classes.footer_container} style={styleLayout}>
      <p>&copy; {currentYear}</p>
      <p>designed and developed by Daniel Valdez</p>
    </div>
  );
}

export default Footer;
