import { NextApiResponse } from 'next';

const Sitemap = () => { };

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {

     res.setHeader('Content-Type', 'text/xml');
     res.write(`
     <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <sitemap>
          <loc>https://careers.ichiba.net/sitemap/sitemap_page.xml</loc>
          <lastmod>2023-08-03T12:33:45+00:00</lastmod>
     </sitemap>
     <sitemap>
          <loc>https://careers.ichiba.net/sitemap/sitemap_jobs.xml</loc>
          <lastmod>2023-08-03T12:33:45+00:00</lastmod>
     </sitemap>
     <sitemap>
          <loc>https://careers.ichiba.net/sitemap/sitemap_blogs_vi.xml</loc>
          <lastmod>2023-08-03T12:33:45+00:00</lastmod>
     </sitemap>
     <sitemap>
          <loc>https://careers.ichiba.net/sitemap/sitemap_blogs_en.xml</loc>
          <lastmod>2023-08-03T12:33:45+00:00</lastmod>
     </sitemap>
     </sitemapindex>

  `);
     res.end();

     return {
          props: {},
     };
};

export default Sitemap;

