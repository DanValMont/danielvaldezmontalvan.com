import React, { Fragment } from "react";
import Head from "next/head";
import classes from "./Layout.module.css";

function Layout({ title, description, children, applycss, applyFilter }) {
  return (
    <Fragment>
      <Head>
        <title>
          {title ? `${title} - Daniel Valdez` : "Daniel Valdez - Web Developer"}
        </title>
        {description && <meta name="description" content={description} />}
        <meta
          name="keywords"
          content="Daniel, Valdez, Montalvan, Daniel Valdez Montalvan, Portfolio, Web Developer, Full Stack Web Developer, Full Stack Developer, Website, Developer, Peru, Brasil, Brazil, US, United States, Freelance"
        />
        <meta name="author" content="Daniel Valdez Montalvan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="img/site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preload"
          href="/fonts/Soulmaze/Soulmaze.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Soulmaze/Soulmaze-Italic.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div
        className={applycss ? classes.main_projects_body : classes.main_body}
      >
        {children}
        {applyFilter && (
          <svg>
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                id="sea-filter"
                numOctaves="3"
                seed="2"
                baseFrequency="0.02 0.05"
              ></feTurbulence>
              <feDisplacementMap
                scale="7"
                in="SourceGraphic"
              ></feDisplacementMap>
              <animate
                xlinkHref="#sea-filter"
                attributeName="baseFrequency"
                dur="60s"
                keyTimes="0;0.5;1"
                values="0.02 0.06;0.04 0.08;0.02 0.06"
                repeatCount="indefinite"
              />
            </filter>
          </svg>
        )}
      </div>
    </Fragment>
  );
}

export default Layout;
