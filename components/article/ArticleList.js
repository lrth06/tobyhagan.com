import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import CardLoader from './CardLoader'
const ArticleCard = dynamic(() => import('./ArticleCard'), {
  suspense: true,
})
export default function ArticleList({ articles }) {
  return (
    <div className="article__list">
      {articles && articles.length > 0 &&
        articles.map((article, index) => (
          <Suspense fallback={<CardLoader key={index} />} key={index} >
            <ArticleCard key={article._id} article={article} />
          </Suspense>
        ))}
    </div>
  );
}
