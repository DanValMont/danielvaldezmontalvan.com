import React, { useState } from "react";
import classes from "./ProjectCards.module.css";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

export default function ProjectCards({ card }) {
  const [reverse, setReverse] = useState(false);

  function onClickToggleBack() {
    setReverse(!reverse);
  }

  return (
    <Tilt
      gyroscope={true}
      perspective={1000}
      scale={1}
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      style={{ width: "360px", position: "relative" }}
    >
      <div key={card.id} className={classes.container}>
        <div className={`${classes.card} ${classes.rgb}`}>
          <div className={classes.card_image}>
            <Image
              alt={card.title}
              src={card.imageSrc}
              width={300}
              height={180}
            />
          </div>
          <div className={classes.card_text}>
            <span className={classes.flip_card_icon_front}>
              <Image
                src="/icons/tap.svg"
                alt="flip_card"
                width={26}
                height={26}
                layout="intrinsic"
              />
            </span>
            <span className={classes.date}>{card.date}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
        <div
          className={classes.overlay}
          style={reverse ? { opacity: 1 } : { opacity: 0 }}
        >
          <div
            key={card.id}
            className={`${classes.card_reverse} ${classes.rgb}`}
          >
            <div className={classes.card_text}>
              <span className={classes.date}>{card.date}</span>
              <h2>
                {card.title}{" "}
                <div>
                  <span>
                    <Link href={`${card.github}`}>
                      <a target="_blank">
                        <Image
                          src="/icons/github-icon.svg"
                          alt="github_link"
                          tooltip="github link"
                          width={20}
                          height={20}
                          layout="intrinsic"
                        />
                      </a>
                    </Link>
                  </span>
                  <span>
                    <Link href={`${card.website}`}>
                      <a target="_blank">
                        <Image
                          src="/icons/domain.svg"
                          alt="website_link"
                          tooltip="website link"
                          width={20}
                          height={20}
                          layout="intrinsic"
                        />
                      </a>
                    </Link>
                  </span>
                </div>
              </h2>
              <p>{card.descriptionReverse}</p>
            </div>
            <div className={classes.card_roles}>
              <span
                className={classes.flip_card_icon_back}
                onClick={() => onClickToggleBack()}
              >
                <Image
                  src="/icons/tap.svg"
                  alt="flip_card"
                  width={26}
                  height={26}
                  layout="intrinsic"
                />
              </span>
              <span className={classes.roles}>Roles:</span>
              <ul className={classes.roles_list}>
                {card.roles.map((role, index) => (
                  <li key={index} className={classes.roles_item}>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.technologies}>
              <span className={classes.main_technologies}>
                Main Technologies:
              </span>
              <div className={classes.grid_technologies}>
                {card.mainTechnologies.map((mainTechnology, index) => (
                  <div key={index} className={classes.technology}>
                    <div className={classes.technology_icon}>
                      <Image
                        src={mainTechnology}
                        alt=""
                        width={26}
                        height={26}
                        layout="intrinsic"
                      />
                    </div>
                    <div className={classes.technology_name}>
                      {card.nameTechnologies[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
