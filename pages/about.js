import React from "react";
import Aboutbackground from "../components/AboutBackground/AboutBackground";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Aboutcontent from "../components/AboutContent/AboutContent";
import Footer from "../components/Footer/Footer";

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
