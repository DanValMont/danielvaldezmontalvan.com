import React from "react";
import Aboutbackground from "../components/AboutBackground/AboutBackground.js";
import Layout from "../components/Layout/Layout.js";
import Navbar from "../components/Navbar/Navbar.js";
import Aboutcontent from "../components/AboutContent/AboutContent.js";
import Footer from "../components/Footer/Footer.js";

function About() {
  return (
    <Layout
      title={`About`}
      description={`I'm Daniel Valdez, a web developer, and also an economist, who specializes in designing and developing
          front-end experiences to organizations, companies, start-ups and
          individuals.
          I use my passion and skills to create beautiful and scalable web
          products tailor-made for them.
          Are you minding a project and thinking we can make something great
          together? Let's talk over email.`}
      applycss={true}
      applyFilter={true}
    >
      <main>
        <section>
          <Navbar invertHeader={true} />
          <Aboutcontent />
          <Aboutbackground />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  );
}

export default About;
