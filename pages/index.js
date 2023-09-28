import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Homebackground from "../components/HomeBackground/Homebackground";
import Maincontent from "../components/MainContent/Maincontent";

export default function Home() {
  return (
    <Layout
      title={`Welcome`}
      description={`Welcome to my website! I'm Daniel Valdez, a web developer, and also an economist, who specializes in designing and developing
          front-end experiences to organizations, companies, start-ups and
          individuals.
          I use my passion and skills to create beautiful and scalable web
          products tailor-made for them.
          Are you minding a project and thinking we can make something great
          together? Let's talk over email.`}
      applyFilter={true}
    >
      <main>
        <section>
          <Navbar />
          <Maincontent />
          <Homebackground />
        </section>
      </main>
    </Layout>
  );
}
