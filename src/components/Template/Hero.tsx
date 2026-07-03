import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">David Perry</span>
        </h1>

        <p className="hero-tagline">
          Senior Software Engineer
          <br />
          with 15+ years of experience building scalable
          <br/>
          web applications, cloud-native platforms,
          <br />
          AI-powered solutions, and distributed systems
          <br />
          from concept to production.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">ACC Alum</span>
          <span className="hero-chip">SEU BS</span>
          <span className="hero-chip">Senior Software Engineer at Airbnb</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
