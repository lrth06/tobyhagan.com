import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../../icons/tag.svg'
import { CustomCode } from './CustomCode';
import { CustomImage } from './CustomImage'
export default function Article({ article }) {
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
                alt="test"
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
