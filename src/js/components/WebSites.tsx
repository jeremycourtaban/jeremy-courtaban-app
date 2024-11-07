export function WebSites() {
  // * Render
  return (
    <section id="websites" className="row">
      <h2 className="col-12">Web sites</h2>
      <div id="websites_left" className="col-md-6">
        <ul className="row">
          <li id="surfersco" className="website website_actif col-12">
            surfersco.jeremycourtaban.com
          </li>
          <li id="it" className="website col-12">
            it.jeremycourtaban.com
          </li>
          <li id="support" className="website col-12">
            support.jeremycourtaban.com
          </li>
          <li id="dev" className="website col-12">
            dev.jeremycourtaban.com
          </li>
          <li id="portfolio" className="website col-12">
            sites.google.com/site/jeremycourtabanportfolio
          </li>
        </ul>
      </div>
      <div id="websites_right" className="col-md-6">
        {/* <!-- Focus sur le site selectionné. --> */}
        <a id="url" href="http://surfersco.jeremycourtaban.com">
          <img id="websites_img" src="src/assets/images/surfersco.png" />
          <p id="description">
            (2018) A template Web site. I found a free use Photoshop template
            and realize the front end code (HTML5, CSS3, JS, Bootstrap4).
          </p>
        </a>
      </div>
    </section>
  );
}
