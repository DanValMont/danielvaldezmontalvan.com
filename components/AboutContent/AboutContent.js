import React from "react";
import classes from "./AboutContent.module.css";
import Image from "next/image";
import { useInvertContext } from "../../context/invert.js";
import Link from "next/link";

function Aboutcontent() {
  const [styleLayout] = useInvertContext();
  return (
    <div className={classes.container} style={styleLayout}>
      <div>
        <h1>
          DANIEL
          <br />
          VALDEZ
        </h1>
      </div>
      <div className={classes.description}>
        <p>
          I&apos;m a web developer, and also an economist, who specializes in
          designing and developing front-end experiences to organizations,
          companies, start-ups and individuals. I use my passion and skills to
          create beautiful and scalable web products tailor-made for them.
        </p>
        <p>
          Are you minding a project and thinking we can make something great
          together? Let&apos;s talk over email.
        </p>

        <span>
          <Link href="mailto:danielvaldezmontalvan@gmail.com">
            <a target="_blank">email</a>
          </Link>
        </span>
        <span>
          <Link href="https://github.com/DanValMont">
            <a target="_blank">github</a>
          </Link>
        </span>
        <span>
          <Link href="https://www.linkedin.com/in/daniel-borja-valdez-montalvan">
            <a target="_blank">linkedin</a>
          </Link>
        </span>
      </div>
      <div className={classes.technologies}>
        <ul>
          <li>Technologies I use</li>
          <li>
            <div>Front-End</div>
            <div className={classes.technologies_imgs}>
              <Image
                src={"/icons/reactjs_icon.svg"}
                alt="react_js_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
              <Image
                src={"/icons/materialui_icon.svg"}
                alt="material_ui_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
              <Image
                src={"/icons/tailwindcss-about.svg"}
                alt="tailwind_css_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
            </div>
          </li>
          <li>
            <div>Back-End</div>
            <div className={classes.technologies_imgs}>
              <Image
                src={"/icons/nodejs_icon.svg"}
                alt="node_js_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
              <Image
                src={"/icons/mongodb_logo_icon.svg"}
                alt="mongo_db_logo_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
              <Image
                src={"/icons/postgresql-about.svg"}
                alt="postgre_sql_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
            </div>
          </li>
          <li>
            <div>Full-Stack</div>
            <div className={classes.technologies_imgs}>
              <Image
                src={"/icons/next-js.svg"}
                alt="next_js_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
              <Image
                src={"/icons/typescript-about.svg"}
                alt="typescript_icon"
                width={16}
                height={16}
                layout="intrinsic"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aboutcontent;
