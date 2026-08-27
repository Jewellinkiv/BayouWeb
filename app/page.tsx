import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bayou Bartholomew | A Conservation Legacy",
  description:
    "Discover Bayou Bartholomew and the story of a family-led effort to protect this remarkable Delta waterway for generations to come.",
};

const agfcTrail =
  "https://www.agfc.com/things-to-do/water-trails/bayou-bartholomew-water-trail/";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#story">Skip to the story</a>

      <section className="hero" id="home">
        <div className="hero-sheen" aria-hidden="true" />
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label="Bayou Bartholomew home">
            <span className="wordmark-mark" aria-hidden="true">BB</span>
            <span>
              Bayou Bartholomew
              <small>Conservation · Arkansas</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#story">Our story</a>
            <a href="#bayou">The bayou</a>
            <a href="#explore">Explore</a>
            <a className="nav-cta" href="#stewardship">Get involved</a>
          </nav>
        </header>

        <div className="hero-content">
          <p className="eyebrow">A living waterway. A lasting promise.</p>
          <h1>Where a childhood refuge becomes a legacy of conservation.</h1>
          <p className="hero-copy">
            Along the quiet bends of Bayou Bartholomew, a treasured piece of the
            Arkansas Delta is being protected—so its water, woods, wildlife, and
            wonder can endure.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#story">
              Discover the story <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#bayou">
              Meet the bayou <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>Pine Bluff, Arkansas · Mississippi Alluvial Plain</span>
          <span className="scroll-cue">Scroll to wander <b aria-hidden="true">↓</b></span>
        </div>
      </section>

      <section className="film" aria-labelledby="film-title">
        <div className="film-heading">
          <p className="section-label section-label-light">The story on film</p>
          <h2 id="film-title">See the vision for Bayou Bartholomew.</h2>
          <p>
            Hear the story behind the project and the effort to protect this
            remarkable landscape near Pine Bluff, Arkansas.
          </p>
        </div>
        <div className="film-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/NA7EEA75oho?rel=0"
            title="Bayou Bartholomew project in Pine Bluff, Arkansas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <div className="current-line" aria-hidden="true">
        <span>Water remembers</span><i>·</i><span>Land endures</span><i>·</i>
        <span>Stories carry forward</span>
      </div>

      <section className="story section" id="story">
        <div className="story-copy">
          <p className="section-label">01 · A place that stayed with him</p>
          <h2>Some landscapes shape us before we have words for it.</h2>
          <div className="story-body">
            <p className="lead">
              For Bill Jones, Bayou Bartholomew was the backdrop to childhood—
              a place of water, woods, freedom, and discovery that never really
              left him.
            </p>
            <p>
              Years later, Bill purchased land along the bayou and chose to
              protect it. What began as a deeply personal connection is becoming
              a charitable conservation effort: caring for the habitat, honoring
              the character of the place, and creating thoughtful ways for future
              generations to know it too.
            </p>
            <p>
              This is one protected place along a much larger living system—a
              promise made locally, with meaning that travels far downstream.
            </p>
          </div>
        </div>

        <figure className="story-figure">
          <img
            src="/images/little-bayou-wma.jpg"
            alt="Cypress trees lining the shaded waters of Little Bayou Wildlife Management Area"
            loading="lazy"
          />
          <figcaption>
            <span>Little Bayou WMA</span>
            <span>Ashley County, Arkansas</span>
          </figcaption>
        </figure>
      </section>

      <section className="fact-ribbon" aria-label="Bayou Bartholomew quick facts">
        <div className="fact">
          <strong>359</strong>
          <span>river miles</span>
        </div>
        <div className="fact">
          <strong>2,000+</strong>
          <span>years in the making</span>
        </div>
        <div className="fact">
          <strong>117</strong>
          <span>documented fish species</span>
        </div>
        <div className="fact">
          <strong>35+</strong>
          <span>mussel species</span>
        </div>
      </section>

      <section className="bayou section-dark" id="bayou">
        <div className="bayou-intro">
          <p className="section-label section-label-light">02 · Meet the waterway</p>
          <h2>A quiet giant of the Delta.</h2>
          <p>
            Bayou Bartholomew follows an ancient channel of the Arkansas River,
            winding through cypress-tupelo wetlands, oxbows, and bottomland
            hardwood forest. It is often described as the longest bayou in the
            world—and its slow-moving course connects two states and countless
            lives.
          </p>
        </div>

        <div className="route" aria-label="The route of Bayou Bartholomew">
          <div className="route-stop route-origin">
            <span>Begins near</span>
            <strong>Pine Bluff</strong>
            <small>Arkansas</small>
          </div>
          <div className="route-current">
            <i aria-hidden="true" />
            <span>359 winding river miles</span>
          </div>
          <div className="route-stop route-mouth">
            <span>Meets the Ouachita near</span>
            <strong>Sterlington</strong>
            <small>Louisiana</small>
          </div>
        </div>

        <div className="bayou-note">
          <p>
            “One of the few largely unaltered natural streams remaining in the
            Mississippi Valley.”
          </p>
          <span>— U.S. Fish &amp; Wildlife Service</span>
        </div>
      </section>

      <section className="habitat section" id="habitat">
        <div className="habitat-heading">
          <p className="section-label">03 · A corridor of uncommon life</p>
          <h2>More than a waterway. A world in motion.</h2>
          <p>
            The bayou’s bends, wooded banks, and wetlands form a continuous
            refuge. Fish move below the surface; mussels filter the current;
            turtles bask on fallen timber; songbirds and waterfowl follow the
            water through the seasons.
          </p>
        </div>

        <div className="habitat-gallery">
          <figure className="habitat-photo habitat-photo-wide">
            <img
              src="/images/bayou-us82.jpg"
              alt="Bayou Bartholomew curving through forest near the US 82 access in Ashley County"
              loading="lazy"
            />
            <figcaption>US 82 access · Ashley County</figcaption>
          </figure>
          <figure className="habitat-photo habitat-photo-tall">
            <img
              src="/images/bayou-pine-bluff-bend.jpg"
              alt="A wooded wetland bend of Bayou Bartholomew near Pine Bluff"
              loading="lazy"
            />
            <figcaption>Near Pine Bluff · Jefferson County</figcaption>
          </figure>
          <div className="species-note">
            <span className="species-number">117</span>
            <h3>fish species</h3>
            <p>
              Alongside at least 35 mussel species, this richness makes Bayou
              Bartholomew an exceptional stream system by any measure.
            </p>
            <ul aria-label="Wildlife found along the bayou">
              <li>American alligators</li>
              <li>Basking turtles</li>
              <li>Wintering waterfowl</li>
              <li>Migratory songbirds</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="explore" id="explore">
        <div className="explore-image" role="img" aria-label="Bayou Bartholomew winding through autumn wetlands near Pine Bluff" />
        <div className="explore-panel">
          <p className="section-label section-label-light">04 · Experience it gently</p>
          <h2>Walk softly.<br />Paddle slowly.<br />Look closely.</h2>
          <p>
            Low-impact walking and canoe trails are part of the vision for the
            protected property—ways to move through the landscape at its own pace,
            with conservation always leading the way.
          </p>
          <p className="explore-detail">
            For current public paddling, Arkansas Game &amp; Fish Commission maintains
            a 10-mile Bayou Bartholomew Water Trail with three designated access
            points. Conditions change: use official access, respect private land,
            and review current safety guidance before setting out.
          </p>
          <a className="button button-light" href={agfcTrail} target="_blank" rel="noreferrer">
            Explore the public water trail <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="stewardship section" id="stewardship">
        <div className="stewardship-title">
          <p className="section-label">05 · The work of keeping wild places wild</p>
          <h2>Conservation is a long promise.</h2>
        </div>
        <div className="stewardship-copy">
          <p className="lead">
            Protection here is not a single project. It is a patient practice of
            listening to the land, responding to what the water needs, and making
            room for nature to keep doing what it has done for millennia.
          </p>
          <div className="principles">
            <article>
              <span>01</span>
              <h3>Protect the water</h3>
              <p>Care for banks, reduce disturbance, and support a healthier current.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Hold habitat together</h3>
              <p>Keep woods, wetlands, and the bayou connected as one living system.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Share wonder wisely</h3>
              <p>Invite discovery in ways that respect wildlife, neighbors, and place.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="closing-kicker">Bayou Bartholomew</p>
        <h2>What we protect today can keep flowing far beyond us.</h2>
        <a className="closing-link" href="#home">Return to the beginning <span aria-hidden="true">↑</span></a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="wordmark-mark wordmark-mark-dark" aria-hidden="true">BB</span>
          <div>
            <strong>Bayou Bartholomew</strong>
            <p>A family-led charitable conservation effort in the Arkansas Delta.</p>
          </div>
        </div>
        <div className="footer-links">
          <p>Learn from the sources</p>
          <a href={agfcTrail} target="_blank" rel="noreferrer">Arkansas Game &amp; Fish Commission ↗</a>
          <a href="https://www.fws.gov/sites/default/files/documents/Partners%20Strategic%20Plan%20Louisiana%202022.pdf" target="_blank" rel="noreferrer">U.S. Fish &amp; Wildlife Service ↗</a>
          <a href="https://encyclopediaofarkansas.net/entries/bayou-bartholomew-2226/" target="_blank" rel="noreferrer">Encyclopedia of Arkansas ↗</a>
        </div>
        <div className="footer-credit">
          <p>Photography</p>
          <a href="https://commons.wikimedia.org/wiki/File:Bayou_Bartholomew_near_Pine_Bluff,_AR.jpg" target="_blank" rel="noreferrer">Keith Yahl · CC BY 2.0 ↗</a>
          <a href="https://commons.wikimedia.org/wiki/Category:Bayou_Bartholomew" target="_blank" rel="noreferrer">Brandon Rush · CC0 ↗</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bayou Bartholomew</span>
          <span>bayoubartholomew.com</span>
        </div>
      </footer>
    </main>
  );
}
