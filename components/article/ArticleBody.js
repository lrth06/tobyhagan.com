import Markdown from 'markdown-to-jsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../../icons/tag.svg'


export default function Article({ article }) {
  const CustomCode = dynamic((props) => import('./CustomCode').then(mod => mod.CustomCode))
  const CustomImage = dynamic((props) => import('./CustomImage').then(mod => mod.CustomImage))
  return (
    <>
      {article ? (
        <div className="article">
          <div className="page__hero">
            <div className="page__hero-content">
              <Image
                priority
                src={article.image.url}
                width={16}
                height={9}
                layout="responsive"
                alt={article.image.alt}
              />
            </div>
          </div>
          <h1>{article.title}</h1>
          <p className="post__author">
            BY: {article.author} | on: <span className="post__date">{article.created_at.toString().substring(4, 16)}</span>
          </p>
          <Tag />

          <ul className="post__tags">
            {article.tags.length > 0 && article.tags.map((tag, index) => (
              <li key={index} className="post__tag">
                <Link href="/blog/tags/[tag]" as={`/blog/tags/${tag}`} key={index} passHref>
                  <a> {tag}{index !== article.tags.length - 1 && <span>&nbsp;/</span>}</a>
                </Link>

              </li>
            ))}
          </ul>

          <div className="post__body">
            <Markdown
              options={{
                forceWrapper: true,
                overrides: {
                  pre: {
                    component: CustomCode,
                  },
                  img: {
                    component: CustomImage,
                  },
                },
              }}
            >{article.body}</Markdown>
          </div>
        </div >
      ) : (
        <div className="page__container">
          <div>Loading...</div>
        </div>
      )
      }
    </>
  );
}
