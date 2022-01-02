import dbConnect from '../lib/config/db'
import Article from '../lib/models/Article'
const Sitemap = () => { };

export async function getServerSideProps({ res }) {
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://tobyhagan.com",
    }[process.env.NODE_ENV];


    const staticPages = [
        `${baseUrl}/`,
        `${baseUrl}/blog`,
        `${baseUrl}/about`,
        `${baseUrl}/contact`,
        // `${baseUrl}/privacy`,
        // `${baseUrl}/terms`,
        `${baseUrl}/sitemap.xml`,
    ];
    await dbConnect();
    const articles = await Article.find({});
    const articleUrls = articles.map((article) => {
        return `${baseUrl}/article/${article.slug}`;
    });
    staticPages.push(...articleUrls);
    const tags = articles.reduce((acc, article) => {
        return [...acc, ...article.tags];
    }, []);
    const tagUrls = tags.map((tag) => {
        return `${baseUrl}/tag/${tag}`;
    });
    staticPages.push(...tagUrls);


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