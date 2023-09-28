import React from "react";
import classes from "./Aboutbackground.module.css";
import { useInvertContext } from "../../context/invert";

function Aboutbackground() {
  const [styleLayout] = useInvertContext();
  return (
    <div
      id="aboutmainbackground"
      className={classes.background_image}
      style={styleLayout}
    >
      <div className={classes.background_image_with_transparency}></div>
    </div>
  );
}

export default Aboutbackground;
