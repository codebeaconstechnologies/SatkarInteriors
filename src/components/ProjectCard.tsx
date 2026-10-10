import { revealDelay as revealStyle } from '../lib/reveal';
import { Link } from 'react-router-dom';
import { photoAlt, type Project } from '../data/projects';
import { Icon } from './Icon';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  /** Heading level inside the card, so it fits the page outline. */
  headingLevel?: 'h2' | 'h3';
  ratio?: 'landscape' | 'portrait';
  revealDelay?: number;
}

export function ProjectCard({ project, headingLevel: Heading = 'h3', ratio = 'landscape', revealDelay = 0 }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${ratio}`} data-reveal style={revealStyle(revealDelay)}>
      <Link to={`/gallery/${project.slug}`} className="project-card__link">
        <div className="project-card__media media">
          {project.cover ? (
            <img src={project.cover.src} alt={photoAlt(project, project.cover)} loading="lazy" decoding="async" />
          ) : (
            <span className="project-card__placeholder">{project.title}</span>
          )}
          <span className="project-card__tag">{project.category}</span>
        </div>
        <div className="project-card__body">
          <p className="project-card__meta">
            {project.location} · {project.bhk}
          </p>
          <Heading className="project-card__title">{project.title}</Heading>
          <p className="project-card__summary">{project.summary}</p>
          <span className="project-card__more">
            View project <Icon name="arrow-right" size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}
