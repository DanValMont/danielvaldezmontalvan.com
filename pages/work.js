import React from "react";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer";

function Projects() {
  return (
    <Layout title={`Work`} applycss={true}>
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
