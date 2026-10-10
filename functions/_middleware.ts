import { APEX_HOST, CANONICAL_HOST } from '../src/data/site';

/** One canonical host: 301 the bare domain (and plain http) to https://www.… */
export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);

  if (url.hostname === APEX_HOST) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return next();
};
