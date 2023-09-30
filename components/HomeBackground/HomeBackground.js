import React from "react";
import classes from "./Homebackground.module.css";
import { useInvertContext } from "../../context/invert.js";

function Homebackground() {
  const [styleLayout] = useInvertContext();
  return (
    <div
      id="mainbackground"
      className={classes.background_image}
      style={styleLayout}
    >
      <div className={classes.background_image_with_transparency}></div>
    </div>
  );
}

export default Homebackground;
