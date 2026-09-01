import type { Metadata } from "next";
import {
  donation,
  donationIsLive,
  volunteerFormEndpoint,
} from "./config/donation";
import {
  canoeVideoAspect,
  canoeVideoPoster,
  canoeVideoSrc,
} from "./config/media";

export const metadata: Metadata = {
  title: "Bayou Bartholomew | A Conservation Legacy",
  description:
    "The Bayou Bartholomew Recreation Enhancement Plan: three public landings, 4.5 miles of bank fishing and nine miles of trail on the longest bayou in the United States, in Pine Bluff, Arkansas.",
};

const agfcTrail =
  "https://www.agfc.com/things-to-do/water-trails/bayou-bartholomew-water-trail/";

const landings = [
  {
    number: "01",
    kicker: "Northern anchor",
    name: "Saracen Bayou Landing",
    image: "/images/plan/saracen-bayou-access-plan.jpg",
    alt: "Aerial site plan of Saracen Bayou Landing showing a proposed boat ramp and staircase where the access road meets the bayou",
    caption: "Saracen Bayou Landing · off Old Warren Road",
    body: "Where the project begins, just off Old Warren Road. A boat ramp and staircase carry paddlers down to the water. Southwood Creek, the Turkey Chute with stairs, and Bill's Fork are all within a short walk.",
    status: "Landing and road access completed",
  },
  {
    number: "02",
    kicker: "Mid-corridor",
    name: "Hazel Street Landing",
    image: "/images/plan/hazel-street-landing-plan.jpg",
    alt: "Aerial site plan of Hazel Street Landing showing the proposed landing, a bank fishing area and a new bridge crossing the bayou near Highway 65",
    caption: "Hazel Street Landing · near Highway 65",
    body: "The middle of the corridor, with bank fishing along the water and a new steel and concrete bridge carrying the trail across the bayou. The channel is already open from Old Warren Road to here.",
    status: "Bayou opened · bridge proposed",
  },
  {
    number: "03",
    kicker: "Southern end",
    name: "Olive Street Landing",
    image: "/images/plan/olive-street-landing-plan.jpg",
    alt: "Aerial site plan of Olive Street Landing showing a proposed boardwalk, ramp and bridge opening onto Byrd Lake",
    caption: "Olive Street Landing · onto Byrd Lake",
    body: "A boardwalk, ramp and bridge open onto Byrd Lake at the southern end. Playground equipment and the boardwalk materials are the largest remaining pieces here.",
    status: "Proposed",
  },
];

const features = [
  {
    kicker: "Enjoyment",
    name: "Bike Fun Park",
    image: "/images/plan/bike-fun-park-reference.jpg",
    alt: "Aerial photograph of a dirt bike skills park with pump tracks, berms and jump lines — a reference image of a comparable facility, not the Pine Bluff site",
    caption: "Reference image of a comparable bike park · not the Pine Bluff site",
    body: "A dirt skills park with pump tracks and jump lines near the Saracen end of the corridor, beside Southwood Elementary and the school district property.",
  },
  {
    kicker: "Centerpiece",
    name: "Proposed Nature Center",
    image: "/images/plan/proposed-nature-center-plan.jpg",
    alt: "Site plan rendering of the proposed outdoor recreation and nature center, showing a tree-lined green, pathways and a structure beside the bayou",
    caption: "Proposed outdoor recreation center and kayak launch",
    body: "An outdoor recreation and nature center with a kayak launch, sitting between the Bike Fun Park and the water. The location is identified, and the building remains a proposal.",
  },
  {
    kicker: "Trail connection",
    name: "Linking to the Bill Laird Trail",
    image: "/images/plan/bill-laird-trail-connection-plan.jpg",
    alt: "Plan drawing showing the proposed bike trail crossing a new bridge near Hazel Street and connecting to the existing Bill Laird Trail",
    caption: "Connection to the Bill Laird Trail · City of Pine Bluff",
    body: "The bike trail crosses the new bridge, circles back and runs to Olive Street, tying into the Bill Laird Trail and the Hampstead Inn — and into the commercial district beyond it.",
  },
];

const accomplished = [
  "Old Warren Road and Saracen Landing completed",
  "Bridge at South Wood Creek completed",
  "Bayou opened from Old Warren Road to Hazel Street",
  "Three tracts of land secured from Old Warren Road to Hazel Street",
  "Over 20,000 bass, bream and catfish stocked",
];

const future = [
  { figure: "4.5", unit: "miles", label: "of bank fishing" },
  { figure: "9–10", unit: "miles", label: "of biking trail" },
  { figure: "9", unit: "miles", label: "of float and fishing water" },
  { figure: "20,000", unit: "fish", label: "stocked and growing" },
];

const partners = [
  "Arkansas Game & Fish Commission",
  "Bayou Bartholomew Alliance",
  "City of Pine Bluff",
  "Arkansas Natural Heritage Commission",
];

const volunteerInterests = [
  "Trail work days",
  "Cleanups",
  "Planting and habitat work",
  "Events and outreach",
  "Bird counts and surveys",
  "Skilled trades and equipment",
];

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
            <a href="#project">The project</a>
            <a href="#explore">Explore</a>
            <a href="#get-involved">Get involved</a>
            <a className="nav-cta" href="#donate">Donate</a>
          </nav>
        </header>

        <div className="hero-content">
          <p className="eyebrow">A living waterway. A lasting promise.</p>
          <h1>Where a childhood refuge becomes a legacy of conservation.</h1>
          <p className="hero-copy">
            Along the quiet bends of Bayou Bartholomew, a treasured piece of the
            Arkansas Delta is being protected—and opened to the public. Three
            landings, nine miles of water, and a corridor of trail through one of
            the most biologically diverse streams in North America.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#project">
              See the project <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#story">
              Read the story <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>Pine Bluff, Arkansas · Mississippi Alluvial Plain</span>
          <span className="scroll-cue">Scroll to wander <b aria-hidden="true">↓</b></span>
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
              It started when he was eight years old. His family had a fork on
              the bayou; there is still a sign on the flood trail that reads
              <em> Bill&rsquo;s Fork</em>. He swam in it, fished in it, and spent
              entire summers along its banks—right near the Saracen Bayou
              landing, which is where this project now begins.
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

        <figure className="story-figure story-figure-video">
          {canoeVideoSrc ? (
            <video
              className="canoe-video"
              style={{ aspectRatio: canoeVideoAspect }}
              src={canoeVideoSrc}
              poster={canoeVideoPoster}
              controls
              playsInline
              loop
              preload="none"
            />
          ) : (
            /* TODO: drop the clip at public/media/canoe-family.mp4 and set
               canoeVideoSrc in app/config/media.ts — this figure becomes the
               video player automatically. */
            <img
              src={canoeVideoPoster}
              alt="A family paddling a canoe down Bayou Bartholomew on an autumn afternoon, a child in a life jacket in the bow"
              loading="lazy"
            />
          )}
          <figcaption>
            <span>A family morning on the bayou</span>
            <span>Pine Bluff, Arkansas</span>
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

        <ol className="timeline" aria-label="A short history of Bayou Bartholomew">
          <li>
            <span className="timeline-when">About 2,000 years ago</span>
            <p>
              The Arkansas River shifts course and leaves its old channel
              behind. The bayou is what remains.
            </p>
          </li>
          <li>
            <span className="timeline-when">1687</span>
            <p>
              Named for a member of French explorer Henri Joutel&rsquo;s
              expedition through the region.
            </p>
          </li>
          <li>
            <span className="timeline-when">1830s–1890s</span>
            <p>
              A steamboat highway carrying cotton and timber out of the Delta,
              until the railroads take the trade away.
            </p>
          </li>
          <li>
            <span className="timeline-when">Today</span>
            <p>
              One of the two most biologically diverse streams in North America,
              running from Pine Bluff to the Ouachita River in Louisiana.
            </p>
          </li>
        </ol>

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

      <section className="habitat section" id="habitat">
        <div className="habitat-heading">
          <p className="section-label">03 · A corridor of uncommon life</p>
          <h2>More than a waterway. A world in motion.</h2>
          <p>
            Cypress swamps, bottomland hardwoods, and wetlands make this one of
            the richest wildlife habitats in Arkansas. Fish move below the
            surface; mussels filter the current; turtles bask on fallen timber;
            songbirds and waterfowl follow the water through the seasons.
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

        <div className="transition-note">
          <div>
            <p className="section-label">Four and a half miles</p>
            <h3>You start in full shade and break into open marsh.</h3>
          </div>
          <p>
            In a single stretch the corridor moves from bottomland hardwood to
            marsh. You are narrow and completely shaded from Saracen all the way
            to Hazel Street—and then it opens, and there are ducks and wood
            ducks and animals everywhere. It feels like a different place
            entirely. Egret rookeries line the bayou. At any moment on this
            float, in all that quiet, you are about twenty minutes from downtown.
          </p>
          <figure className="transition-figure">
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
        </div>

        <div className="species-groups">
          <article>
            <h3>Mammals</h3>
            <ul>
              <li>White-tailed deer</li>
              <li>Raccoons &amp; opossums</li>
              <li>River otters, beavers &amp; muskrats</li>
              <li>Mink</li>
              <li>Gray &amp; red foxes</li>
              <li>Gray &amp; fox squirrels</li>
              <li>Swamp rabbits &amp; cottontails</li>
              <li>Black bears &amp; Louisiana black bears</li>
            </ul>
          </article>
          <article>
            <h3>Birds</h3>
            <ul>
              <li>Mallards &amp; wood ducks</li>
              <li>Hooded mergansers</li>
              <li>Great egrets &amp; herons</li>
              <li>Migratory songbirds</li>
            </ul>
          </article>
          <article>
            <h3>Reptiles &amp; amphibians</h3>
            <ul>
              <li>American alligators</li>
              <li>Basking turtles</li>
              <li>Water snakes</li>
            </ul>
          </article>
          <article>
            <h3>Fish · 100+ species</h3>
            <ul>
              <li>Crappie &amp; bream</li>
              <li>Catfish</li>
              <li>Bass</li>
              <li>Alligator gar</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="project section-dark" id="project">
        <div className="project-inner">
          <div className="project-heading">
            <p className="section-label section-label-light">04 · The project</p>
            <h2>The Recreation Enhancement Plan.</h2>
            <p>
              Three public landings, a connected trail corridor, and nine miles
              of open water through the heart of Pine Bluff. Some of it is
              finished. The remaining elements are planned as future phases.
            </p>
          </div>

          <figure className="corridor-map">
            <img
              src="/images/plan/corridor-site-map.jpg"
              alt="Site selection map of the Bayou Bartholomew Recreation Enhancement corridor, showing Saracen Bayou Landing at the north, the Bike Fun Park and proposed outdoor recreation center, Hazel Street Landing in the middle, the Bill Laird Trail connection, and the existing put-in near Olive Street at the south"
              loading="lazy"
            />
            <figcaption>
              <span>Recreation Enhancement · site selection</span>
              <span>Pine Bluff, Arkansas</span>
            </figcaption>
          </figure>

          <div className="landings">
            <h3 className="block-title">Three landings</h3>
            {landings.map((landing) => (
              <article className="landing" key={landing.name}>
                <figure>
                  <img src={landing.image} alt={landing.alt} loading="lazy" />
                  <figcaption>{landing.caption}</figcaption>
                </figure>
                <div className="landing-copy">
                  <p className="landing-kicker">
                    <span aria-hidden="true">{landing.number}</span>
                    {landing.kicker}
                  </p>
                  <h4>{landing.name}</h4>
                  <p>{landing.body}</p>
                  <p className="landing-status">{landing.status}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="features">
            <h3 className="block-title">What connects them</h3>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature" key={feature.name}>
                  <figure>
                    <img src={feature.image} alt={feature.alt} loading="lazy" />
                    <figcaption>{feature.caption}</figcaption>
                  </figure>
                  <p className="feature-kicker">{feature.kicker}</p>
                  <h4>{feature.name}</h4>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
            <div className="feature-footnote">
              <figure>
                <img
                  src="/images/plan/saracen-landing-rec-center-plan.jpg"
                  alt="Plan map of the northern end of the corridor, labelling Saracen Bayou Landing, Southwood Creek, Bill's Fork, the Turkey Chute with stairs, the Bike Fun Park and the potential outdoor recreation center and kayak launch"
                  loading="lazy"
                />
                <figcaption>The northern cluster · Saracen to the Turkey Chute</figcaption>
              </figure>
              <p>
                From Ohio Street the route carries on into the Byrd Lake Natural
                Area, with wolf tracks painted in the street to guide riders all
                the way to the casino. Wooden bridges cross the wet ground along
                the way, and there is a place overlooking Cypress Lake quiet
                enough to hold a wedding.
              </p>
            </div>
          </div>

          <div className="ledgers-narrative">
            <div className="done">
              <h3 className="block-title">Already done</h3>
              <ul>
                {accomplished.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ahead">
              <h3 className="block-title">When it is finished</h3>
              <div className="future-grid">
                {future.map((item) => (
                  <div key={item.label}>
                    <strong>{item.figure}</strong>
                    <span className="future-unit">{item.unit}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="ahead-note">
                Electric motors and paddle craft only. Excellent fishing waters,
                beautiful biking trails, and a significant economic lift for
                Pine Bluff and Southeast Arkansas.
              </p>
            </div>
          </div>

          <div className="partners">
            <p className="section-label section-label-light">In partnership with</p>
            <ul>
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="explore" id="explore">
        <div className="explore-image" role="img" aria-label="Bayou Bartholomew winding through autumn wetlands near Pine Bluff" />
        <div className="explore-panel">
          <p className="section-label section-label-light">05 · Experience it gently</p>
          <h2>Walk softly.<br />Paddle slowly.<br />Look closely.</h2>
          <p>
            When the corridor is complete it will hold a nine-mile float,
            4.5 miles of bank fishing, nine to ten miles of biking trail, and
            some of the best bird watching in the Delta—all of it electric motor
            or paddle only, so the water stays quiet.
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
          <p className="section-label">06 · The work of keeping wild places wild</p>
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

      <section className="involve section" id="get-involved">
        <div className="involve-heading">
          <p className="section-label">07 · Get involved</p>
          <h2>This gets built by people who show up.</h2>
          <p>
            Trail work days, cleanups, planting, bird counts, an afternoon with a
            chainsaw or a tractor—there is a place here for whatever you have to
            give. Tell us how you would like to help and we will be in touch
            when the next work day is set.
          </p>
        </div>

        <div className="involve-form">
          {volunteerFormEndpoint ? (
            <form method="post" action={volunteerFormEndpoint}>
              <div className="field-row">
                <p className="field">
                  <label htmlFor="volunteer-name">Name</label>
                  <input id="volunteer-name" name="name" type="text" autoComplete="name" required />
                </p>
                <p className="field">
                  <label htmlFor="volunteer-email">Email</label>
                  <input id="volunteer-email" name="email" type="email" autoComplete="email" required />
                </p>
              </div>
              <p className="field">
                <label htmlFor="volunteer-phone">Phone <span>optional</span></label>
                <input id="volunteer-phone" name="phone" type="tel" autoComplete="tel" />
              </p>
              <fieldset className="field">
                <legend>What are you interested in?</legend>
                <div className="checks">
                  {volunteerInterests.map((interest) => (
                    <label key={interest}>
                      <input type="checkbox" name="interests" value={interest} />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <p className="field">
                <label htmlFor="volunteer-message">Anything else? <span>optional</span></label>
                <textarea id="volunteer-message" name="message" rows={4} />
              </p>
              <button className="button button-primary" type="submit">
                Sign me up <span aria-hidden="true">↗</span>
              </button>
            </form>
          ) : (
            /* TODO: set volunteerFormEndpoint in app/config/donation.ts to a real
               form handler (Formspree, Basin, a Worker route) and this becomes a
               working form. Until then we show a contact block rather than a form
               that goes nowhere. */
            <div className="involve-fallback">
              <p className="lead">Email us and we will put you on the list.</p>
              <a className="button button-primary" href={`mailto:${donation.contactEmail}?subject=Volunteering%20on%20Bayou%20Bartholomew`}>
                {donation.contactEmail} <span aria-hidden="true">↗</span>
              </a>
              <p className="involve-fallback-note">
                Tell us your name, the best number to reach you, and what kind of
                work you would enjoy—trail days, cleanups, planting, events, bird
                counts, or equipment and skilled trades.
              </p>
            </div>
          )}

          <aside className="involve-aside">
            <figure className="involve-figure">
              <img
                src="/images/canoe-family-02.jpg"
                alt="A woman smiling over her shoulder from the stern of a canoe while two boys paddle ahead of her on Bayou Bartholomew"
                loading="lazy"
              />
            </figure>
            <h3>Landowners and partners</h3>
            <p>
              Much of this corridor exists because neighbors donated or sold land
              at the right moment. If you own property along the bayou, or your
              organization wants to take on a piece of the work, we would like to
              talk.
            </p>
            <a className="text-link text-link-dark" href={`mailto:${donation.contactEmail}?subject=Partnering%20on%20Bayou%20Bartholomew`}>
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="donate section-dark" id="donate">
        <div className="donate-inner">
          <div className="donate-heading">
            <p className="section-label section-label-light">08 · Support the project</p>
            <h2>Help carry the work forward.</h2>
            <p>
              If you would like to support the continuing work along Bayou
              Bartholomew, use the giving option below.
            </p>
          </div>

          <div className="donate-panel donate-panel-single">
            {donationIsLive ? (
              <div className="donate-embed">
                <iframe
                  src={donation.embedUrl}
                  title="Donate to the Bayou Bartholomew Recreation Enhancement Plan"
                  height={donation.embedHeight}
                  loading="lazy"
                  allow="payment"
                />
              </div>
            ) : (
              /* TODO: giving is not open yet. Set `provider` and `embedUrl` in
                 app/config/donation.ts and this becomes the live donation form. */
              <div className="donate-soon">
                <p className="donate-soon-title">Giving opens soon.</p>
                <p>
                  The nonprofit paperwork is being finalized. As soon as it clears
                  we will open online giving here—one-time or monthly, with an
                  emailed receipt for your records.
                </p>
                <a className="button button-primary" href={`mailto:${donation.contactEmail}?subject=Giving%20to%20Bayou%20Bartholomew`}>
                  Give today by check or transfer <span aria-hidden="true">↗</span>
                </a>
                <p className="donate-soon-note">
                  Prefer to give now? Email {donation.contactEmail} and we will
                  send the details.
                </p>
              </div>
            )}

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
          <span className="footer-credit-note">Site plans · Bayou Bartholomew Recreation Enhancement</span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bayou Bartholomew</span>
          <span>bayoubartholomew.com</span>
        </div>
      </footer>

      <div className="action-bar">
        <a className="action-bar-secondary" href="#get-involved">Volunteer</a>
        <a className="action-bar-primary" href="#donate">Donate</a>
      </div>
    </main>
  );
}
