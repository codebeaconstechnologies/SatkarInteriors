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
import { Seo } from '../components/Seo';
import { StatsStrip } from '../components/StatsStrip';
import { Testimonials } from '../components/Testimonials';
import { aboutImage, beforeAfterPairs, heroSlides } from '../data/images';
import { featuredProjects } from '../data/projects';
import { studio, whatsappUrl } from '../data/studio';
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
        description={`${studio.name} is a civil engineer-led interior design studio in Pune for modular kitchens, wardrobes, custom furniture and turnkey home interiors. Itemised quotes and 3D designs.`}
        path="/"
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Civil engineer-led studio · Since {studio.foundedYear}</p>
            <h1 id="hero-title">
              Interior Designers <em>in {studio.city}</em>
            </h1>
            <p className="lead hero__lead">{studio.promise}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Get a Quote <Icon name="arrow-right" size={18} />
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
            title={
              <>
                Interiors made for <em>the way Pune lives</em>
              </>
            }
            intro="From kitchens built for daily tadka to solid-oak dining tables, everything is designed in our studio and made in our own workshop."
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
            eyebrow="Selected work"
            title="Recent homes across West Pune"
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

      {/* Before / after */}
      {pair && (
        <section className="section" aria-labelledby="transform-title">
          <div className="container">
            <SectionHeading
              id="transform-title"
              eyebrow="Before & after"
              title={
                <>
                  From bare shell <em>to home</em>
                </>
              }
              intro="Drag the handle, or use the arrow keys, to see how a builder-handover flat becomes a finished home."
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
              <h2 id="why-title">
                Engineered to <em>last</em>, designed to be lived in
              </h2>
              <p className="lead">
                Most interiors fail where you can’t see them. Ours start with the structure, the plumbing and the plywood.
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
            eyebrow="How it works"
            title="Five steps, one accountable team"
            intro="A clear plan with dated milestones and weekly site updates, from the first visit to the day we hand you the keys."
          />
          <ProcessTimeline steps={studio.process} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--tint" aria-labelledby="reviews-title">
        <div className="container">
          <SectionHeading
            id="reviews-title"
            eyebrow="Client stories"
            title="Homes our clients love coming back to"
            aside={<GoogleRatingBadge />}
          />
          <Testimonials items={testimonials} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
