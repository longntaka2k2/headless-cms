import { NextApiResponse } from 'next';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
     
  res.setHeader('Content-Type', 'text/xml');
  res.write(`
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
       <loc>https://careers.ichiba.net/</loc>
       <lastmod>2023-06-15T01:44:48+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0000</priority>
  </url>
  <url>
       <loc>https://careers.ichiba.net/our-life</loc>
       <lastmod>2023-06-15T01:44:48+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://careers.ichiba.net/jobs</loc>
       <lastmod>2023-06-15T01:44:48+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
  <url>
       <loc>https://careers.ichiba.net/blog</loc>
       <lastmod>2023-06-15T01:44:48+00:00</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8000</priority>
  </url>
</urlset>
  `);
  res.end();
  
  return {
    props: {},
  };
};

export default Sitemap;

