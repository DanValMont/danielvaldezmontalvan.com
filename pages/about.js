import React from "react";
import Aboutbackground from "../components/AboutBackground/AboutBackground.js";
import Layout from "../components/Layout/Layout.js";
import Navbar from "../components/Navbar/Navbar.js";
import Aboutcontent from "../components/AboutContent/AboutContent.js";
import Footer from "../components/Footer/Footer.js";

function About() {
  return (
    <Layout title={`About`} applycss={true} applyFilter={true}>
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
