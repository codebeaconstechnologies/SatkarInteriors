import { useSearchParams } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { PageIntro } from '../components/PageIntro';
import { ProjectCard } from '../components/ProjectCard';
import { Seo } from '../components/Seo';
import { PROJECT_CATEGORIES, projects, type ProjectCategory } from '../data/projects';
import { regionsText, studio } from '../data/studio';
import './Gallery.css';

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');

/** Only categories that have at least one project are offered as filters. */
const categories = PROJECT_CATEGORIES.filter((c) => projects.some((p) => p.category === c));

export default function Gallery() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('category');
  const active: ProjectCategory | undefined = categories.find((c) => slugify(c) === requested);
  const visible = active ? projects.filter((p) => p.category === active) : projects;

  const select = (category?: ProjectCategory) => {
    setParams(category ? { category: slugify(category) } : {}, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <Seo
        title={`Interior Design Projects in ${studio.regions.join(' & ')}`}
        description={`Completed homes, modular kitchens, wardrobes and bedrooms by ${studio.name}, interior designers in ${regionsText}.`}
        path="/gallery"
      />

      <PageIntro
        eyebrow="Our work"
        title="Projects"
        lead="Homes, kitchens and wardrobes we have designed and built. Open a project to see more photos."
      />

      <section className="container gallery" aria-label="Projects">
        <div className="gallery__filters" role="group" aria-label="Filter projects by type">
          <button type="button" aria-pressed={!active} onClick={() => select()}>
            All <span>{projects.length}</span>
          </button>
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={active === c} onClick={() => select(c)}>
              {c} <span>{projects.filter((p) => p.category === c).length}</span>
            </button>
          ))}
        </div>

        <p className="visually-hidden" role="status">
          Showing {visible.length} {active ?? 'all'} project{visible.length === 1 ? '' : 's'}
        </p>

        <div className="gallery__grid">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} headingLevel="h2" revealDelay={i % 3} />
          ))}
        </div>
      </section>

      <CtaBand title="Like what you see? Let’s talk about your home." />
    </>
  );
}
