import ArticleCard from './ArticleCard';
export default function ArticleList({ articles }) {
  return (
    <div className="article__list">
      {articles && articles.length > 0 &&
        articles.map(article => (
          <ArticleCard key={article.title} article={article} />
        ))}
    </div>
  );
}
