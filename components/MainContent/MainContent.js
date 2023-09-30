import React from "react";
import Link from "next/link";
import classes from "./Maincontent.module.css";
import { useInvertContext } from "../../context/invert.js";

function Maincontent() {
  const [styleLayout] = useInvertContext();

  return (
    <div className={classes.container} style={styleLayout}>
      <div className={classes.container_name}>
        <div className={classes.container_effect}>
          <h1>
            DANIEL
            <br />
            VALDEZ
          </h1>
        </div>
      </div>
      <div className={classes.container_actionquote}>
        <div className={classes.container_effect}>
          <h2>WEB DEVELOPER</h2>
          <blockquote>
            if it doesn&apos;t challenge you, it doesn&apos;t change you...
          </blockquote>
          <div className={classes.container_button}>
            <button>
              <Link href="/work">
                <a>
                  <span>
                    <b>&rarr; </b>
                    enjoy the waves
                  </span>
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
