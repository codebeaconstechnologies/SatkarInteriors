import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { Lightbox, type LightboxPhoto } from '../components/Lightbox';
import { Seo } from '../components/Seo';
import { allPhotos, getProject, photoAlt, projects } from '../data/projects';
import { studio } from '../data/studio';
import NotFound from './NotFound';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug = '' } = useParams();
  const project = getProject(slug);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length]!;
  const next = projects[(index + 1) % projects.length]!;

  const photos: LightboxPhoto[] = allPhotos(project).map((photo) => ({
    src: photo.src,
    alt: photoAlt(project, photo),
    caption: photo.label === 'Cover' ? project.title : photo.label,
  }));

  const meta = [
    { label: 'Location', value: `${project.location}, ${studio.city}` },
    { label: 'Home', value: project.bhk },
    { label: 'Area', value: project.area },
    { label: 'Year', value: project.year },
    { label: 'Client', value: project.client },
  ];

  return (
    <>
      <Seo
        title={`${project.title}: ${project.category} Interior Design, ${studio.city}`}
        description={`${project.summary} A ${project.bhk} project in ${project.location}, ${studio.city} by ${studio.name}.`}
        path={`/gallery/${project.slug}`}
        image={project.cover?.src}
        type="article"
      />

      <article className="project">
        <header className="container project__header">
          <nav aria-label="Breadcrumb" className="project__crumbs">
            <ol role="list">
              <li>
                <Link to="/gallery">Projects</Link>
              </li>
              <li aria-current="page">{project.title}</li>
            </ol>
          </nav>
          <p className="eyebrow">
            {project.category} · {project.year}
          </p>
          <h1>
            {project.title}
            <span className="project__h1-place">
              {project.location}, {studio.city}
            </span>
          </h1>
          <p className="lead project__summary">{project.summary}</p>
        </header>

        {project.cover && (
          <div className="container">
            <button type="button" className="project__cover media" onClick={() => setOpenIndex(0)}>
              <img
                src={project.cover.src}
                alt={photoAlt(project, project.cover)}
                decoding="async"
                {...{ fetchpriority: 'high' }}
              />
              <span className="project__zoom">
                <Icon name="expand" size={16} /> View {photos.length} photo{photos.length === 1 ? '' : 's'}
              </span>
            </button>
          </div>
        )}

        <div className="container project__meta-wrap">
          <dl className="project__meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="container project__story" aria-labelledby="story-title">
          <div className="project__text" data-reveal>
            <h2 id="story-title">About the project</h2>
            {project.description.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
          <aside className="project__facts" data-reveal>
            <div>
              <h3>Highlights</h3>
              <ul role="list" className="project__checks">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <Icon name="check" size={16} /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Rooms</h3>
              <ul role="list" className="project__rooms">
                {project.rooms.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {photos.length > 1 && (
          <section className="container project__photos" aria-labelledby="photos-title">
            <h2 id="photos-title" className="visually-hidden">
              Photos
            </h2>
            <ul role="list" className="photo-grid">
              {photos.map((photo, i) => (
                <li key={photo.src} data-reveal>
                  <button type="button" className="photo-grid__item media" onClick={() => setOpenIndex(i)}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                    <span className="photo-grid__label">{photo.caption}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.quote && (
          <section className="container project__quote" aria-label="Client review" data-reveal>
            <figure>
              <blockquote>
                <p>“{project.quote.text}”</p>
              </blockquote>
              <figcaption>{project.quote.author}</figcaption>
            </figure>
          </section>
        )}

        <nav className="container project__pager" aria-label="More projects">
          <Link to={`/gallery/${prev.slug}`} rel="prev" className="project__pager-link">
            <span className="project__pager-dir">
              <Icon name="arrow-left" size={16} /> Previous
            </span>
            <span className="project__pager-title">{prev.title}</span>
          </Link>
          <Link to={`/gallery/${next.slug}`} rel="next" className="project__pager-link project__pager-link--next">
            <span className="project__pager-dir">
              Next <Icon name="arrow-right" size={16} />
            </span>
            <span className="project__pager-title">{next.title}</span>
          </Link>
        </nav>
      </article>

      <CtaBand title={`Planning a ${project.category.toLowerCase()} project?`} />

      <Lightbox photos={photos} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </>
  );
}
