import { Link } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { Statement } from '../components/Statement';
import { Seo } from '../components/Seo';
import { StatsStrip } from '../components/StatsStrip';
import { google } from '../data/google';
import { aboutImage } from '../data/images';
import { fullAddress, regionsText, studio } from '../data/studio';
import { revealDelay } from '../lib/reveal';
import './About.css';

const COMPARISON = [
  { factor: 'Who leads the project', us: 'A civil engineer and interior designer', typical: 'A contractor or middleman' },
  { factor: 'Who builds it', us: 'Our own carpenters, at your site', typical: 'Subcontracted labour' },
  { factor: 'Kitchen plywood', us: 'IS:710 BWP marine plywood', typical: 'MR ply or particle board' },
  { factor: 'Hardware', us: 'Blum / Häfele, 10-year warranty', typical: 'Unbranded fittings' },
  { factor: 'Pace', us: 'Each stage gets the time it needs', typical: 'Rushed to meet a promised date' },
  { factor: 'Pricing', us: 'Written item by item before work starts', typical: 'Extra charges added later' },
];

export default function About() {
  const founderPhoto = aboutImage('founder');
  const studioPhoto = aboutImage('studio');

  return (
    <>
      <Seo
        title={`About Us | Interior Designers in ${studio.regions.join(' & ')}`}
        description={`Meet ${studio.founder.name}, the civil engineer behind ${studio.name}: 13+ years of interior design and in-house furniture making in ${regionsText}.`}
        path="/about"
      />

      <PageIntro
        eyebrow="About us"
        title={`About ${studio.name}`}
        lead={`For more than 13 years we have designed and built homes in ${regionsText}. We are led by a civil engineer, so we look at the structure of your home as carefully as the design.`}
      />

      {/* Founder */}
      <section className="container founder" aria-labelledby="founder-title">
        {founderPhoto && (
          <div className="founder__media media" data-reveal>
            <img src={founderPhoto} alt={`${studio.founder.name}, ${studio.founder.title} of ${studio.name}`} loading="lazy" decoding="async" />
          </div>
        )}
        <div className="founder__copy" data-reveal>
          <p className="eyebrow">Founder</p>
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
          <SectionHeading id="values-title" eyebrow="Our approach" title="What we care about" />
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

      <Statement
        line="Beautiful spaces aren’t built in a hurry."
        text="They are crafted with thought, refined with patience and finished with passion."
      />

      {/* Studio photo + stats */}
      <section className="studio-band" aria-labelledby="studio-title">
        {studioPhoto && (
          <div className="studio-band__media media">
            <img src={studioPhoto} alt={`An interior designed and built by ${studio.name}`} loading="lazy" decoding="async" />
          </div>
        )}
        <div className="container studio-band__inner">
          <div className="studio-band__copy" data-reveal>
            <p className="eyebrow studio-band__eyebrow">Our studio</p>
            <h2 id="studio-title">Come and see the materials</h2>
            <p>
              See the plywood, edge banding and hardware we use at our {studio.address.locality} studio. {studio.address.landmark}.
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
            eyebrow="Comparison"
            title="How we are different"
            intro="A few things worth asking any interior firm before you sign."
          />
          <div className="compare" data-reveal>
            <table>
              <caption className="visually-hidden">{studio.name} compared with a typical contractor</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Factor</span>
                  </th>
                  <th scope="col">{studio.name}</th>
                  <th scope="col">Typical contractor</th>
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
