import React, { useState } from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";
import Menu from "../Menu/Menu.js";
import { useInvertContext } from "../../context/invert.js";

function Navbar({ invertHeader, invertEffect }) {
  const [styleLayout, setStyleLayout] = useInvertContext();
  const [isMenuIconOpen, setIsMenuIconOpen] = useState(false);
  const [isMenuListOpen, setIsMenuListOpen] = useState(false);

  const toggle = () => {
    setIsMenuIconOpen(!isMenuIconOpen);
    setIsMenuListOpen(!isMenuListOpen);
  };

  const invertedBackgroundColor = () => {
    setStyleLayout({ filter: "invert(1)" });
  };

  const normalBackgroundColor = () => {
    setStyleLayout({ filter: "invert(0)" });
  };

  return (
    <>
      <header
        className={`${
          !isMenuIconOpen && !invertHeader
            ? classes.header
            : classes.header_color_inverted
        }`}
      >
        <div className={classes.logo} style={styleLayout}>
          <Link href="/danielvaldezmontalvan.com">
            <a>
              <Image
                src="/icons/daniel-logo-colored-black.svg"
                alt="logo_daniel_website"
                width={38}
                height={38}
                onMouseOver={
                  !isMenuIconOpen && !isMenuListOpen && !invertEffect
                    ? invertedBackgroundColor
                    : null
                }
                onMouseOut={
                  !isMenuIconOpen && !isMenuListOpen && !invertEffect
                    ? normalBackgroundColor
                    : null
                }
              />
            </a>
          </Link>
        </div>
        <nav>
          <ul className={classes.menu}>
            <li className={classes.logo} style={styleLayout}>
              <button className={classes.button_menu} onClick={toggle}>
                {!isMenuIconOpen ? (
                  <Image
                    src="/icons/menu-icon-surfboards.svg"
                    alt="menu-icon"
                    width={64}
                    height={18}
                  />
                ) : (
                  <Image
                    src="/icons/menu-icon-cross-surfboards.svg"
                    alt="menu-icon"
                    width={64}
                    height={18}
                  />
                )}
                <span className={classes.menu_indicator}>MENU</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {
        <Menu
          isMenuListOpen={!isMenuListOpen ? isMenuIconOpen : isMenuListOpen}
          toggle={toggle}
        />
      }
    </>
  );
}

export default Navbar;
