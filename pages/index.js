import ArticleList from '../components/article/ArticleList';
import Article from '../lib/models/Article';
import dbConnect from '../lib/config/mongo';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Toby Hagan | Software Engineer | Educator</title>
        <meta name="description" content="Toby Hagan is a software engineer technical and educator, creating responsive, accesible tools and applications." />
        <meta name="keywords" content="Softwarer engineer, software developer, developer, web development, tutorials, react, nextjs, javascript"
        />
        <meta name="site-name" content="Toby Hagan" />
        <meta name="robots" content="index, follow" />

        <meta property="canonical" content="https://tobyhagan.com" />

        <meta property="og:url" content="https://tobyhagan.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Toby Hagan | Software Engineer | Educator" />
        <meta property="og:description" content="Toby Hagan is a software engineer technical and educator, creating responsive, accesible tools and applications." />
        <meta property="og:image" content="https://tobyhagan.com/images/og_image.jpg" />
        <meta property="og:canonical" content="https://tobyhagan.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tobyhagan.com" />
        <meta property="twitter:url" content="https://tobyhagan.com/" />
        <meta name="twitter:title" content="Toby Hagan | Software Engineer | Educator" />
        <meta name="twitter:description" content="Toby Hagan is a software engineer technical and educator, creating responsive, accesible tools and applications." />
        <meta name="twitter:image" content="https://tobyhagan.com/images/og_image.jpg" />



      </Head>
      <div className="page__container">
        <div className='page__header'>

          <h1>Toby Hagan | Software Engineer</h1>
          <div className='page__hero'>
            <div className='page__hero-content'>
              <Image
                priority
                src="/images/toby_pond.webp"
                width={1600}
                height={900}
                alt="Toby Hagan"
              />
            </div>
          </div>
          <h2>This is a blog about technology... and life.</h2>
        </div>
        <p>I&apos;m Toby Hagan, a software engineer and educator, currently focused primarily on code based tutorials and walkthroughs.On this page, you&apos;ll find a variety of topics, ranging from full start to finish courses, to snippets that just make life easier. My work can also be found on <Link href="https://github.com/lrth06"><a>GitHub</a></Link>. Check out my <Link href="/about"><a>About</a></Link> page for more information about me, then take a look at my <Link href="/blog"><a>Blog</a></Link> for more information about my work. If you have any questions or comments, feel free to <Link href="/contact"><a>Contact Me</a></Link>.
        </p>
        <h2>Recent Posts</h2>
        <ArticleList articles={articles} />
      </div>
    </div >
  )
}
export async function getServerSideProps() {
  if (!process.env.MONGODB_URI) { return { props: { articles: null } } }

  await dbConnect()
  const result = await Article.find({}).limit(25).sort({ created_at: -1 })
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