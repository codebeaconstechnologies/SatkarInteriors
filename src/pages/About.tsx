import { Link } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { StatsStrip } from '../components/StatsStrip';
import { google } from '../data/google';
import { aboutImage } from '../data/images';
import { fullAddress, studio, yearsInPractice } from '../data/studio';
import { revealDelay } from '../lib/reveal';
import './About.css';

const COMPARISON = [
  { factor: 'Who leads', us: 'A civil engineer and interior designer', typical: 'Stylists or contractor brokers' },
  { factor: 'Where cabinets are made', us: 'CNC-cut in our own workshop', typical: 'Hand-cut on your floor for months' },
  { factor: 'Kitchen carcass', us: 'IS:710 marine-grade BWP plywood', typical: 'MR ply or particle board' },
  { factor: 'Hardware', us: 'Genuine Blum / Häfele, 10-year warranty', typical: 'Unbranded fittings that sag' },
  { factor: 'Timeline', us: '45-day turnkey handover', typical: 'Four to eight open-ended months' },
  { factor: 'Pricing', us: 'Fixed, itemised BOQ', typical: 'Mid-project price revisions' },
];

export default function About() {
  const founderPhoto = aboutImage('founder');
  const studioPhoto = aboutImage('studio');

  return (
    <>
      <Seo
        title={`About Our Interior Design Studio in ${studio.city}`}
        description={`Meet ${studio.founder.name}, the civil engineer behind ${studio.name}: ${yearsInPractice}+ years of engineer-led interior design and in-house joinery in ${studio.city}.`}
        path="/about"
      />

      <PageIntro
        eyebrow="About the studio"
        title={
          <>
            An engineer-led interior studio <em>in {studio.city}</em>
          </>
        }
        lead={`Since ${studio.foundedYear}, ${studio.name} has combined structural know-how with warm, natural design, so every home looks right on day one and still works ten monsoons later.`}
      />

      {/* Founder */}
      <section className="container founder" aria-labelledby="founder-title">
        {founderPhoto && (
          <div className="founder__media media" data-reveal>
            <img src={founderPhoto} alt={`${studio.founder.name}, ${studio.founder.title} of ${studio.name}`} loading="lazy" decoding="async" />
          </div>
        )}
        <div className="founder__copy" data-reveal>
          <p className="eyebrow">Founder’s story</p>
          <h2 id="founder-title">{studio.founder.name}</h2>
          <p className="founder__role">
            {studio.founder.title} · {studio.founder.credentials}
          </p>
          <blockquote className="founder__quote">
            <p>“{studio.founder.quote}”</p>
          </blockquote>
          {studio.founder.bio.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
          <Link to="/contact" className="btn btn--primary founder__cta">
            Meet {studio.founder.name.split(' ')[0]} <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading id="values-title" eyebrow="What we believe" title="The principles behind every Satkar home" />
          <ol className="values">
            {studio.values.map((v, i) => (
              <li key={v.title} data-reveal style={revealDelay(i)}>
                <span className="values__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Studio photo + stats */}
      <section className="studio-band" aria-labelledby="studio-title">
        {studioPhoto && (
          <div className="studio-band__media media">
            <img src={studioPhoto} alt={`An interior designed and built by ${studio.name}`} loading="lazy" decoding="async" />
          </div>
        )}
        <div className="container studio-band__inner">
          <div className="studio-band__copy" data-reveal>
            <p className="eyebrow studio-band__eyebrow">Visit the studio</p>
            <h2 id="studio-title">See the materials before you commit</h2>
            <p>
              Inspect plywood cores, edge banding and hardware at our {studio.address.locality} studio. {studio.address.landmark}.
            </p>
            <div className="studio-band__actions">
              <a className="btn btn--light" href={google.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="directions" size={18} /> Get directions
              </a>
              <span className="studio-band__address">{fullAddress}</span>
            </div>
          </div>
          <StatsStrip stats={studio.stats} tone="dark" />
        </div>
      </section>

      {/* Comparison */}
      <section className="section" aria-labelledby="compare-title">
        <div className="container">
          <SectionHeading
            id="compare-title"
            eyebrow="An honest comparison"
            title="How we differ from a typical decorator"
            intro="Questions worth asking any interior firm before you sign a contract."
          />
          <div className="compare" data-reveal>
            <table>
              <caption className="visually-hidden">{studio.name} compared with a typical decorator</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Factor</span>
                  </th>
                  <th scope="col">{studio.name}</th>
                  <th scope="col">Typical decorator</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.factor}>
                    <th scope="row">{row.factor}</th>
                    <td>
                      <Icon name="check" size={16} /> {row.us}
                    </td>
                    <td>{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
