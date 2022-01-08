import dynamic from 'next/dynamic';
import CardLoader from './CardLoader'
const ArticleCard = dynamic(() => import('./ArticleCard'))
export default function ArticleList({ articles }) {
  return (
    <div className="article__list">
      {articles && articles.length > 0 &&
        articles.map((article) => (
          <ArticleCard key={article.created_at} article={article} />
        ))}
    </div>
  );
}
