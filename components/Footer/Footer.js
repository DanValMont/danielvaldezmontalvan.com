import React from "react";
import { useInvertContext } from "../../context/invert";
import classes from "./Footer.module.css";

function Footer() {
  const [styleLayout] = useInvertContext();

  return (
    <div className={classes.footer_container} style={styleLayout}>
      <p>&copy; 2023</p>
      <p>designed and developed by Daniel Valdez</p>
    </div>
  );
}

export default Footer;
