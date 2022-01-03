import dynamic from 'next/dynamic';
import CardLoader from './CardLoader'
const ArticleCard = dynamic(() => import('./ArticleCard'))
export default function ArticleList({ articles }) {
  return (
    <div className="article__list">
      {articles && articles.length > 0 &&
        articles.map((article, index) => (
          <ArticleCard key={article._id} article={article} />
        ))}
    </div>
  );
}
