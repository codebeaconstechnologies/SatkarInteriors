import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CtaBand } from '../components/CtaBand';
import { GoogleRatingBadge } from '../components/GoogleRatingBadge';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { Icon } from '../components/Icon';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { Statement } from '../components/Statement';
import { Seo } from '../components/Seo';
import { StatsStrip } from '../components/StatsStrip';
import { Testimonials } from '../components/Testimonials';
import { aboutImage, beforeAfterPairs, heroSlides } from '../data/images';
import { featuredProjects } from '../data/projects';
import { regionsText, studio, whatsappUrl } from '../data/studio';
import { testimonials } from '../data/testimonials';
import { revealDelay } from '../lib/reveal';
import './Home.css';

export default function Home() {
  const [pairIndex, setPairIndex] = useState(0);
  const pair = beforeAfterPairs[pairIndex];
  const studioPhoto = aboutImage('studio');

  return (
    <>
      <Seo
        description={`${studio.name}: interior designers in ${regionsText} with 13+ years of experience. Modular kitchens, wardrobes, custom furniture and complete home interiors.`}
        path="/"
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Since {studio.foundedYear} · {studio.regions.join(' & ')}</p>
            <h1 id="hero-title" className="hero__title">
              {/* Kept for search engines and screen readers; the visible headline is the logo tagline. */}
              <span className="visually-hidden">{studio.name}, interior designers in {regionsText}. </span>
              <span className="hero__line">Innovative Designs,</span> <em className="hero__line">Stylish Ideas</em>
            </h1>
            <p className="lead hero__lead">{studio.promise}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Contact Us <Icon name="arrow-right" size={18} />
              </Link>
              <a className="btn btn--secondary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> WhatsApp us
              </a>
            </div>
            <div className="hero__trust">
              <GoogleRatingBadge />
              <p className="hero__founder">
                <strong>{studio.founder.name}</strong>
                <span>{studio.founder.credentials}</span>
              </p>
            </div>
          </div>
          <div className="hero__media">
            <HeroSlideshow slides={heroSlides} />
          </div>
        </div>
      </section>

      {/* Stats / trust */}
      <section className="container home-stats" aria-label="Studio in numbers">
        <StatsStrip stats={studio.stats} />
      </section>

      {/* Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            eyebrow="What we do"
            title="Our services"
            intro="From a single kitchen to a complete home. We design it with you and our own team builds it at your site."
          />
          <ul role="list" className="services">
            {studio.services.map((service, i) => (
              <li key={service.id} className="service" data-reveal style={revealDelay(i)}>
                <div className="service__media media">
                  <img src={service.image} alt={`${service.title} by ${studio.name}, Pune`} loading="lazy" decoding="async" />
                </div>
                <div className="service__body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section section--tint" aria-labelledby="projects-title">
        <div className="container">
          <SectionHeading
            id="projects-title"
            eyebrow="Our work"
            title="Recent projects"
            aside={
              <Link to="/gallery" className="link-arrow">
                View all projects <Icon name="arrow-right" size={16} />
              </Link>
            }
          />
          <div className="featured">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} ratio={i === 0 ? 'portrait' : 'landscape'} revealDelay={i % 2} />
            ))}
          </div>
        </div>
      </section>

      <Statement
        line="Perfection takes time."
        text="Every detail deserves the patience it takes to create something extraordinary."
      />

      {/* Before / after */}
      {pair && (
        <section className="section" aria-labelledby="transform-title">
          <div className="container">
            <SectionHeading
              id="transform-title"
              eyebrow="Before & after"
              title="Before and after"
              intro="Drag the handle to compare the flat as it was handed over by the builder with how it looks today."
            />
            {beforeAfterPairs.length > 1 && (
              <div className="pair-tabs" role="group" aria-label="Choose a room">
                {beforeAfterPairs.map((p, i) => (
                  <button key={p.id} type="button" aria-pressed={i === pairIndex} onClick={() => setPairIndex(i)}>
                    {p.room}
                  </button>
                ))}
              </div>
            )}
            <div data-reveal>
              <BeforeAfterSlider key={pair.id} pair={pair} />
            </div>
          </div>
        </section>
      )}

      {/* Why choose us: sticky split */}
      <section className="section section--tint" aria-labelledby="why-title">
        <div className="container why">
          <div className="why__intro">
            <div className="why__sticky">
              <p className="eyebrow">Why Satkar</p>
              <h2 id="why-title">Why clients choose us</h2>
              <p className="lead">
                Most interior problems show up a year or two later: swollen shutters, loose hinges, a leaking sink. We plan for these from day one.
              </p>
              {studioPhoto && (
                <div className="why__media media">
                  <img src={studioPhoto} alt={`Warm, natural-material interior by the ${studio.name} studio`} loading="lazy" decoding="async" />
                </div>
              )}
            </div>
          </div>
          <ul role="list" className="why__list">
            {studio.promises.map((p, i) => (
              <li key={p.title} className="why__item" data-reveal style={revealDelay(i % 2)}>
                <span className="why__icon">
                  <Icon name={p.icon} size={22} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            id="process-title"
            eyebrow="How we work"
            title="From first visit to handover"
            intro="Art can’t be rushed, and neither can a home. One team takes your project from start to finish and gives every stage the time it needs."
          />
          <ProcessTimeline steps={studio.process} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--tint" aria-labelledby="reviews-title">
        <div className="container">
          <SectionHeading
            id="reviews-title"
            eyebrow="Reviews"
            title="What our clients say"
            aside={<GoogleRatingBadge />}
          />
          <Testimonials items={testimonials} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
