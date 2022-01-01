import Link from 'next/link'
import Image from 'next/image';
export default function ArticleCard({ article }) {
  return (
    <div className="articleCard__container">
      <Link href="/blog/[slug]" as={`/blog/${article.slug}`} passHref>
        <a>
          <Image priority className='card__image' src={article.image.url} width={16} height={9} layout="responsive" alt="test" />
        </a>
      </Link>
      <div className="articleCard__title">
        <Link href="/blog/[slug]" as={`/blog/${article.slug}`} passHref>
          <a>
            <h2>{article.title}</h2>
          </a>
        </Link>
        <p className='card__author'>By: {article.author} | on: <span className="post__date">{article.created_at.toString().substring(4, 16)}</span></p>
        <h3>{article.excerpt}</h3>
        <p className="card__more">
          <Link href="/blog/[slug]" as={`/blog/${article.slug}`} passHref>
            <a>
              Read More
              {" "}
              &rarr;
            </a>
          </Link>
        </p>
      </div>

    </div>
  );
}
