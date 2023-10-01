import React, { useState } from "react";
import classes from "./Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Menu({ isMenuListOpen, toggle }) {
  const router = useRouter();

  const [bckgdImg, setBckgdImg] = useState(classes.background_image);
  const [styleImg, setStyleImg] = useState({
    opacity: 1,
    transform: "translateY(0vh)",
  });
  const [bckgdImgMask, setBckgdImgMask] = useState("");

  const hover = (e, classBckgdImage, classBckgdImageMask) => {
    e.preventDefault();
    setStyleImg((ed) => ({ ...ed, opacity: 0, transform: "translateY(0vh)" }));

    setTimeout(() => {
      setBckgdImgMask(classBckgdImageMask);
      setBckgdImg(classBckgdImage);
      setStyleImg((edi) => ({
        ...edi,
        opacity: 1,
        transform: "translateY(0vh)",
      }));
    }, 2000);
  };

  const hoveroff = () => {
    setBckgdImg(bckgdImg);
  };

  return (
    <div
      className={
        isMenuListOpen
          ? `${classes.menu_wrapper} ${classes.active}`
          : `${classes.menu_wrapper}`
      }
    >
      <div className={classes.background_menu_wrapper}>
        <div
          className={bckgdImg}
          style={
            isMenuListOpen
              ? styleImg
              : { opacity: 0, transform: "translateY(0vh)" }
          }
        >
          <div className={bckgdImgMask}></div>
        </div>
        <svg>
          <filter id="turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              id="sea-filter"
              numOctaves="3"
              seed="2"
              baseFrequency="0.02 0.05"
            ></feTurbulence>
            <feDisplacementMap scale="7" in="SourceGraphic"></feDisplacementMap>
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
      </div>
      {isMenuListOpen ? (
        <div className={classes.menu_list_container}>
          <ul>
            <li className={isMenuListOpen ? classes.visible : null}>
              <Link href="/danielvaldezmontalvan.com">
                <a
                  onMouseEnter={(e) => hover(e, classes.background_image)}
                  onMouseLeave={hoveroff}
                  onClick={router.pathname === "/" ? toggle : null}
                >
                  <span>HOME</span>
                </a>
              </Link>
            </li>
            <li className={isMenuListOpen ? classes.visible : null}>
              <Link href="/work">
                <a
                  onMouseEnter={(e) => hover(e, classes.background_image_2)}
                  onMouseLeave={hoveroff}
                  onClick={router.pathname === "/work" ? toggle : null}
                >
                  <span>WORK</span>
                </a>
              </Link>
            </li>
            <li className={isMenuListOpen ? classes.visible : null}>
              <Link href="/about">
                <a>
                  <span
                    onMouseEnter={(e) =>
                      hover(
                        e,
                        classes.background_image_3,
                        classes.background_image_3_mask
                      )
                    }
                    onMouseLeave={hoveroff}
                    onClick={router.pathname === "/about" ? toggle : null}
                  >
                    ABOUT
                  </span>
                </a>
              </Link>
            </li>
            <li className={isMenuListOpen ? classes.visible : null}>
              <Link href="mailto:danielvaldezmontalvan@gmail.com">
                <a
                  onMouseEnter={(e) => hover(e, classes.background_image_4)}
                  onMouseLeave={hoveroff}
                  target="_blank"
                >
                  <span>EMAIL</span>
                </a>
              </Link>
            </li>
            <li className={isMenuListOpen ? classes.visible : null}>
              <Link href="https://github.com/DanValMont">
                <a
                  onMouseEnter={(e) => hover(e, classes.background_image_5)}
                  onMouseLeave={hoveroff}
                  target="_blank"
                >
                  <span>GITHUB</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className={classes.menu_list_container}>
          <ul>
            <li className={`${classes.visible} ${classes.closing}`}>
              <Link href="/danielvaldezmontalvan.com">
                <a>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li className={`${classes.visible} ${classes.closing}`}>
              <Link href="/work">
                <a>
                  <span>Work</span>
                </a>
              </Link>
            </li>
            <li className={`${classes.visible} ${classes.closing}`}>
              <Link href="/about">
                <a>
                  <span>About</span>
                </a>
              </Link>
            </li>
            <li className={`${classes.visible} ${classes.closing}`}>
              <Link href="mailto:danielvaldezmontalvan@gmail.com">
                <a target="_blank">
                  <span>Email</span>
                </a>
              </Link>
            </li>
            <li className={`${classes.visible} ${classes.closing}`}>
              <Link href="https://github.com/DanValMont">
                <a target="_blank">
                  <span>Github</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
