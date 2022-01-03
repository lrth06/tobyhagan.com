import ArticleList from '../../../components/article/ArticleList';
import Article from '../../../lib/models/Article';
import dbConnect from '../../../lib/config/db';
import { useRouter } from 'next/router';
import Head from 'next/head';
export default function Home({ articles }) {
    const router = useRouter();

    return (
        <div className="page__container">
            <Head>
                <title>Toby Hagan | Blog | Tags</title>
                <meta name="description" content={`Blog posts containing ${router.params.tag}`} />
                <meta name="og:title" content={`Toby Hagan | Blog | Tags`} />
                <meta name="og:description" content={`Blog posts containing ${router.params.tag}`} />
                <meta name="twitter:title" content={`Toby Hagan | Blog | Tags`} />
                <meta name="twitter:description" content={`Blog posts containing ${router.params.tag}`} />
            </Head>
            <h2 style={{ textAlign: "center" }}> Posts with tag &lsquo;{router.query.tag}&rsquo;</h2>
            <ArticleList articles={articles} />
        </div>
    );
}


export async function getServerSideProps({ params }) {
    if (!process.env.MONGODB_URI) { return { props: { articles: null } } }

    await dbConnect()
    const result = await Article.find({ tags: params.tag }).limit(10).sort({ created_at: -1 })
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