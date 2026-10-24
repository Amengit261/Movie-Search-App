
import "./About.css";

function About() {
return ( <main className="about-page">
{/* Hero Section */} <section className="about-hero"> <div className="about-hero-content"> <span className="about-label">ABOUT US</span>


      <h1>
        Discover Stories.
        <br />
        <span>Explore Cinema.</span>
      </h1>

      <p className="about-hero-description">
        Your next favorite movie is just one search away.
        Explore movies, discover new stories, and find
        something worth watching.
      </p>

      <a href="#our-mission" className="about-primary-button">
        Discover Our Story <span>→</span>
      </a>
    </div>

    <div className="about-hero-visual">
      <div className="about-poster poster-one">
        <span>THE ART OF CINEMA</span>
      </div>

      <div className="about-poster poster-two">
        <span>EVERY STORY MATTERS</span>
      </div>

      <div className="about-poster poster-three">
        <span>YOUR NEXT FAVORITE</span>
      </div>

      <div className="about-floating-card">
        <span className="floating-icon">✦</span>
        <div>
          <strong>Find Your Next Favorite</strong>
          <p>One search. Endless stories.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Mission Section */}
  <section className="about-mission" id="our-mission">
    <div className="about-section-heading">
      <span className="about-label">OUR MISSION</span>

      <h2>
        Making movie discovery
        <br />
        <span>simple and enjoyable.</span>
      </h2>
    </div>

    <div className="about-mission-content">
      <p>
        Movie Search is designed to help movie lovers discover
        films quickly and easily. Whether you are looking for
        a classic, exploring a new release, or searching for
        something to watch tonight, our goal is to make
        discovering movies a better experience.
      </p>

      <p>
        We believe every movie has a story worth discovering.
        Our application brings movie searching into one simple,
        accessible experience so you can spend less time
        searching and more time enjoying cinema.
      </p>
    </div>
  </section>

  {/* Features Section */}
  <section className="about-features">
    <div className="about-section-heading">
      <span className="about-label">WHAT WE OFFER</span>

      <h2>
        Designed for
        <br />
        <span>movie lovers.</span>
      </h2>

      <p>
        Everything starts with a simple search.
      </p>
    </div>

    <div className="about-feature-grid">
      <article className="about-feature-card">
        <div className="about-feature-icon">⌕</div>
        <h3>Easy Movie Search</h3>
        <p>
          Search for movies by title through a simple and
          user-friendly interface.
        </p>
        <span className="feature-number">01</span>
      </article>

      <article className="about-feature-card">
        <div className="about-feature-icon">✧</div>
        <h3>Discover New Films</h3>
        <p>
          Explore movie information and find films that match
          your interests.
        </p>
        <span className="feature-number">02</span>
      </article>

      <article className="about-feature-card">
        <div className="about-feature-icon">▤</div>
        <h3>Movie Information</h3>
        <p>
          Find available details about movies, including
          release dates, descriptions, and more.
        </p>
        <span className="feature-number">03</span>
      </article>
    </div>
  </section>

  {/* Values Section */}
  <section className="about-values">
    <div>
      <span className="about-label">OUR APPROACH</span>
      <h2>Simple by design.</h2>
    </div>

    <p>
      We focus on a clean interface, straightforward navigation,
      and an enjoyable browsing experience. Whether you are
      a casual viewer or a dedicated film enthusiast, discovering
      your next movie should feel effortless.
    </p>
  </section>

  {/* Call to Action */}
  <section className="about-cta">
    <span className="about-label">YOUR NEXT MOVIE AWAITS</span>

    <h2>
      Ready to discover
      <br />
      <span>something amazing?</span>
    </h2>

    <p>
      Start exploring and find a story worth watching.
    </p>

    <a href="/Home" className="about-primary-button">
      Explore Movies <span>→</span>
    </a>
  </section>

  {/* Footer */}
  <footer className="about-footer">
    <a href="/Home" className="about-footer-logo">
      <span className="footer-logo-icon">▶</span>
      Movie<span>Search</span>
    </a>

    <p>
      Discover stories. Explore cinema.
    </p>

    <span className="about-copyright">
      © {new Date().getFullYear()} Movie Search. All rights reserved.
    </span>
  </footer>
</main>


);
}

export default About;
