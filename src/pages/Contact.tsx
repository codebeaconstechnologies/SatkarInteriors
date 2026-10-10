import { ContactForm } from '../components/ContactForm';
import { Icon } from '../components/Icon';
import { PageIntro } from '../components/PageIntro';
import { Seo } from '../components/Seo';
import { google } from '../data/google';
import { fullAddress, studio, whatsappUrl } from '../data/studio';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <Seo
        title={`Contact Interior Designers in ${studio.city}`}
        description={`Get an itemised quote from ${studio.name}. Call, WhatsApp or visit our ${studio.address.locality} studio in ${studio.city}.`}
        path="/contact"
      />

      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Talk to an interior designer <em>in {studio.city}</em>
          </>
        }
        lead="Tell us about your home. We’ll visit, measure, and come back with a 3D layout and an itemised estimate."
      />

      <section className="container contact" aria-label="Enquiry form and contact details">
        <ContactForm />

        <aside className="contact__details" aria-labelledby="details-title">
          <h2 id="details-title" className="contact__title">
            Reach the studio
          </h2>

          <ul role="list" className="contact__channels">
            {studio.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`}>
                  <Icon name="phone" size={20} />
                  <span>
                    <small>{p.label}</small>
                    {p.display}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={20} />
                <span>
                  <small>WhatsApp</small>
                  Chat with us
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${studio.email}`}>
                <Icon name="mail" size={20} />
                <span>
                  <small>Email</small>
                  {studio.email}
                </span>
              </a>
            </li>
            <li>
              <a href={studio.social.instagram} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={20} />
                <span>
                  <small>Instagram</small>
                  {studio.social.instagramHandle}
                </span>
              </a>
            </li>
          </ul>

          <div className="contact__block">
            <h3>
              <Icon name="map-pin" size={18} /> Studio address
            </h3>
            <address>
              {studio.name}
              <br />
              {fullAddress}
            </address>
            <p className="contact__note">{studio.address.landmark}</p>
          </div>

          <div className="contact__block">
            <h3>
              <Icon name="clock" size={18} /> Opening hours
            </h3>
            <dl className="contact__hours">
              {studio.hours.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </section>

      <section className="container contact-map" aria-labelledby="map-title">
        <div className="contact-map__head">
          <h2 id="map-title">Find us in {studio.address.locality}</h2>
          <a className="btn btn--primary" href={google.directionsUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="directions" size={18} /> Get directions
          </a>
        </div>
        <div className="contact-map__frame">
          <iframe
            title={`Map showing ${studio.name}, ${studio.address.locality}, ${studio.city}`}
            src={google.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="faq-title">
        <div className="container faq">
          <div className="faq__intro">
            <p className="eyebrow">Good to know</p>
            <h2 id="faq-title">Frequently asked questions</h2>
          </div>
          <div className="faq__list">
            {studio.faqs.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>
                  {f.q}
                  <Icon name="chevron-down" size={20} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
