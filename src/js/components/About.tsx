export function About() {
  // * Render
  return (
    <section id="about">
      <div className="row">
        <p id="photo" className="col-md-6">
          <img src="src/assets/images/jeremy_img_0818_01-768x768.jpg" />
        </p>
        <p className="col-md-6">
          Hello,
          <br />
          <br />
          Welcome on my Web site.
          <br />
          I'm Jérémy, IT, network and development.
          <br />
          I'm French and I live in Québec city.
          <br />
          I'm autodidact and I can do support, network, sys admin, QA testing,
          front-end and back-end tasks.
          <br />
          I like web development, network administration and infographism.
          <br />
          In more I'm a Linux addict and a gamer.
          <br />
          From this page you can explore my differents personals Web sites and
          documents.
          <br />
          If you have questions you can contact me at{" "}
          <a href="mailto:jeremycourtaban@hotmail.fr">
            jeremycourtaban@hotmail.fr
          </a>
          .
        </p>
      </div>
    </section>
  );
}
