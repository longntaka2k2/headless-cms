import { getPosts } from '@/payload-client';
import { values } from 'lodash';
import { NextApiResponse } from 'next';
import qs from 'qs';

const Sitemap = () => { };

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
     const query = {
          "category.name": {
               equals: "blogEn",
          },

     };
     const stringifiedQuery = qs.stringify(
          {

               where: query, // ensure that `qs` adds the `where` property, too!
          },
          { addQueryPrefix: true }
     );
     let listPostCareer = await getPosts(stringifiedQuery);
     res.setHeader('Content-Type', 'text/xml');
     res.write(`
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
          ${listPostCareer?.posts?.docs?.map((value: any) => {
          return `
               
                    <url>
                         <loc>https://careers.ichiba.net/jobs/${value?.slugs}</loc>
                         <lastmod>${value?.createdAt}</lastmod>
                         <changefreq>daily</changefreq>
                         <priority>0.8000</priority>
                    </url>
               `
     }
     )}
          </urlset>
  `);
     res.end();

     return {
          props: {},
     };
};

export default Sitemap;

