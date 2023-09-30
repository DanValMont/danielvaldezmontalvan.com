import React from "react";
import classes from "./ProjectsContainer.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import projectCards from "../../utils/data.js";
import ProjectCards from "../ProjectCards/ProjectCards.js";

function ProjectsContainer() {
  return (
    <div className={classes.main_grid}>
      <AliceCarousel
        responsive={{
          0: {
            items: 1,
          },
          568: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
        mouseDragEnabled
        disableButtonsControls
      >
        {projectCards.map((card) => (
          <ProjectCards card={card} key={card.id} />
        ))}
      </AliceCarousel>
    </div>
  );
}

export default ProjectsContainer;
