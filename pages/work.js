import React from "react";
import Layout from "../components/Layout/Layout.js";
import Navbar from "../components/Navbar/Navbar.js";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer.js";

function Projects() {
  return (
    <Layout
      title={`Work`}
      description={`Portfolio of selected website applications projects developed by Daniel Valdez`}
      applycss={true}
    >
      <main>
        <section>
          <Navbar invertHeader={true} invertEffect={true} />
          <ProjectsContainer />
        </section>
      </main>
    </Layout>
  );
}

export default Projects;
