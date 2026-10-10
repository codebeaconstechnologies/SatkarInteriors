import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Seo } from '../components/Seo';
import './NotFound.css';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <Seo title="Page Not Found" description="The page you were looking for has moved or no longer exists." path={pathname} noindex />
      <section className="container not-found" aria-labelledby="nf-title">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 id="nf-title">
          This room <em>doesn’t exist</em>, yet.
        </h1>
        <p className="lead">The page you were looking for has moved or no longer exists. Let’s get you somewhere beautiful.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Back to home <Icon name="arrow-right" size={18} />
          </Link>
          <Link to="/gallery" className="btn btn--secondary">
            Browse projects
          </Link>
        </div>
      </section>
    </>
  );
}
