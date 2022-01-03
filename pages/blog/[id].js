import dbConnect from '../../lib/config/db';
import Article from '../../lib/models/Article';
import ArticleBody from '../../components/article/ArticleBody';
import Head from 'next/head';
import Script from 'next/script';
export default function BlogPost({ article }) {

    return (
        <div className="page__container">
            <Script
                id="blogPosting"
                strategy="afterInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: article.title,
                        alternativeHeadline: article.excerpt,
                        image: article.image.url,
                        editor: article.author,
                        genre: article.tags[0],
                        keywords: article.tags.map((tag) => {
                            return tag;
                        }),
                        wordcount: article.body.split("").length,
                        publisher: "Toby Hagan",
                        url: "https://tobyhagan.com",
                        datePublished: article.created_at.substring(0, 10),
                        dateCreated: article.created_at.substring(0, 10),
                        dateModified: article.updated_at.substring(0, 10),
                        description: article.excerpt,
                        articleBody: article.body.replace(/\n/g, " ").replace("/#w+s*/"),
                        author: {
                            "@type": "Person",
                            name: article.author,
                            url: "https://tobyhagan.com",
                        },
                    }),
                }}
            />
            <Script
                id="NewsArticle"
                strategy="afterInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        headline: article.title,
                        alternativeHeadline: article.excerpt,
                        image: article.image.url,
                        editor: article.author,
                        genre: article.tags[0],
                        keywords: article.tags.map((tag) => {
                            return tag;
                        }),
                        wordcount: article.body.split("").length,
                        publisher: "Toby Hagan",
                        url: "https://tobyhagan.com",
                        datePublished: article.created_at.substring(0, 10),
                        dateCreated: article.created_at.substring(0, 10),
                        dateModified: article.updated_at.substring(0, 10),
                        description: article.excerpt,
                        articleBody: article.body.replace(/\n/g, " ").replace("/#w+s*/"),
                        author: {
                            "@type": "Person",
                            name: article.author,
                            url: "https://tobyhagan.com",
                        },
                    }),
                }}
            />
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
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: article.title,
                                item: `https://tobyhagan.com/blog/${article.slug}`,
                            },
                        ],
                    }),
                }}
            />
            <Script
                id="speakable"
                strategy="afterInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SpeakableSpecification",
                        xpath: "/html/body/div[1]/div/main/div/div/div[2]",
                        name: article.title,
                        description: article.excerpt,
                    }),
                }}
            />
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.excerpt} />
                <meta name="keywords" content={article.tags} />
                <meta name="author" content={article.author} />

                <meta property="og:type" content="article" />
                <meta property="og:title" content={article.title} />
                <meta
                    property="og:url"
                    content={`https://tobyhagan.com/blog/${article.slug}`}
                />
                <meta property="og:image" content={article.image.url} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="article:author" content={article.author} />
                <meta property="article:published_time" content={article.created_at} />
                <meta property="og:canonical" content="https://tobyhagan.com" />

                <meta
                    property="article:modified_time"
                    content={article.updated_at ? article.updated_at : article.created_at}
                />
                <meta property="article:tag" content={article.tags[0]} />
                <meta property="article:tag" content={article.tags[1]} />
                <meta property="article:tag" content={article.tags[2]} />
                <meta property="article:tag" content={article.tags[3]} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article.title} />
                <meta name="twitter:description" content={article.excerpt} />
                <meta name="twitter:image" content={article.image.url} />


            </Head>
            <ArticleBody article={article} />
        </div>
    )
}

export async function getServerSideProps({ params }) {
    if (!process.env.MONGODB_URI) { return { props: { article: null } } }
    await dbConnect()
    const article = await Article.findOne({ slug: params.id }).lean()
    article._id = article._id.toString()
    article.created_at = article.created_at.toString()
    article.updated_at = article.updated_at.toString()

    return { props: { article: article } }
}