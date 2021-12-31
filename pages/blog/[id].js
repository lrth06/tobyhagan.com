import dbConnect from '../../lib/config/db';
import Article from '../../lib/models/Article';
import ArticleBody from '../../components/article/ArticleBody';
export default function BlogPost({ article }) {
    return (
        <div className="page__container">
            <ArticleBody article={article} />
        </div>
    )
}

export async function getServerSideProps({ params }) {

    await dbConnect()
    const article = await Article.findOne({ slug: params.id }).lean()
    article._id = article._id.toString()
    article.created_at = article.created_at.toString()
    article.updated_at = article.updated_at.toString()

    return { props: { article: article } }
}