import React from "react";
import classes from "./PreLoader.module.css";

function Preloader() {
  return (
    <div className={classes.loader_container}>
      <h2 className={classes.loader}>Loading</h2>
    </div>
  );
}

export default Preloader;
