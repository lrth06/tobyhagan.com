import fs from "fs";
import dbConnect from '../lib/config/db'
import Article from '../lib/models/Article'
const Sitemap = () => { };

export async function getServerSideProps({ res }) {
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://tobyhagan.com",
    }[process.env.NODE_ENV];

    const staticPages = fs
        .readdirSync("pages")
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "sitemap.xml.js",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${baseUrl}/${staticPagePath}`;
        });
    await dbConnect();
    const articles = await Article.find({});
    const articleUrls = articles.map((article) => {
        return `${baseUrl}/article/${article.slug}`;
    });
    staticPages.push(...articleUrls);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
            .map((url) => {
                return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
            })
            .join("")}
            
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: { sitemap },
    };
};

export default Sitemap;