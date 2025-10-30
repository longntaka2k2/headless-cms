import fs from 'fs';
import RSS from 'rss';


export default async function generateRssFeed() {
  const site_url = 'localhost:3000';
  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
   };
   const allPosts = [{title:"212123"},{title:"212123"},{title:"212123"},{title:"212123"}]
  const feed = new RSS(feedOptions);
  allPosts.map((post : any) => {
    feed.item({
     title: post?.title,
     description: post?.description,
     url: `${site_url}/blog/${post?.slug}`,
     date: post?.date,
    });
   });
  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));

}