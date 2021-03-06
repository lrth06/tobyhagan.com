import dbConnect from '../lib/config/mongo'
import Article from '../lib/models/Article'
import { v4 as uuidv4 } from 'uuid';
const Feed = () => { };

export async function getServerSideProps({ res }) {
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://tobyhagan.com",
    }[process.env.NODE_ENV];


    await dbConnect();
    const articles = await Article.find({});
    const tags = articles.reduce((acc, article) => {
        return [...acc, ...article.tags];
    }, []);



    const feed = await `<?xml version="1.0" encoding="utf-8"?>

  <feed xmlns="http://www.w3.org/2005/Atom">
  
      <title>Toby Hagan Blog Feed</title>
      <subtitle>A Blog about Life and Technology</subtitle>
      <link href="https://tobyhagan.com/atom.xml" rel="self" />
      <link href="https://tobyhagan.com/" />
      <id>urn:uuid:a6c42692-3186-4235-a78b-ba8078ae34a8</id>
      <updated>${new Date().toISOString()}</updated>
      
      ${articles.map((article) => {
        return (`
          <entry>
          <title>${article.title}</title>
          <link href="${baseUrl}/blog/${article.slug}" />
          <id>urn:uuid:${uuidv4()}</id>
          <author>
            <name>${article.author}</name>
            <email>toby@tobyhagan.com</email>
          </author>
          <updated>${new Date(article.updated_at).toISOString()}</updated>
          <summary>${article.excerpt}</summary>
      </entry>
          `)
    }).join("")}
      
    </feed>`;


    res.setHeader("Content-Type", "text/xml");
    res.write(feed);
    res.end();

    return {
        props: { feed },
    };
};

export default Feed;

