import ArticleList from '../../components/article/ArticleList';
import Article from '../../lib/models/Article';
import dbConnect from '../../lib/config/db';
import Head from 'next/head';
import Script from 'next/script';
export default function Home({ articles }) {
    return (
        <div className="page__container">
            <Script
                id="breadCrumbs"
                strategy="afterInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "tobyhagan.com",
                                item: "https://tobyhagan.com",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Blog",
                                item: "https://tobyhagan.com/blog",
                            },
                        ],
                    }),
                }}
            />

            <Head>
                <title>Blog</title>
            </Head>
            <h1 style={{ textAlign: "center" }}>Recent Blog Posts</h1>
            <ArticleList articles={articles} />
        </div>
    );
}


export async function getServerSideProps() {
    if (!process.env.MONGODB_URI) { return { props: { articles: null } } }

    await dbConnect()
    const result = await Article.find({}).limit(25).sort({ created_at: -1 })
    const articles = result.map((doc) => {
        const article = doc.toObject()
        article._id = article._id.toString()
        article.created_at = article.created_at.toString()
        article.updated_at = article.updated_at.toString()
        return article
    }
    )
    return { props: { articles: articles } }
}

