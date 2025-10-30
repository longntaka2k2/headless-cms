import { IncomingMessage, ServerResponse } from 'http';

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const url: string = `https://${req.headers['x-forwarded-host']}`;
  const content = `User-agent: *
Disallow: /admin/
Allow: /*/js$
Allow:  /*/css$
Sitemap: ${url}/sitemap.xml
Sitemap: ${url}/sitemap/blog.xml

    `;
  res.write(content);
  res.end();
}
