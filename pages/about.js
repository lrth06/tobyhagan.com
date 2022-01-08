import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function about() {
    return (
        <div className="page__container">
            <Head>
                <title>About Toby Hagan</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="site-name" content="About Toby Hagan" />
                <meta name="description" content="Toby Hagan is a Software Engineer knowledgable in a range of programming languages and frameworks." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Software engineer, software developer, developer, web development, tutorials, react, nextjs, javascript, profile, about" />
                <meta property="og:title" content="About Toby Hagan" />
                <meta property="og:description" content="Toby Hagan is a Software Engineer knowledgable in a range of programming languages and frameworks." />
                <meta property="og:image" content="https://tobyhagan.com/images/toby.jpg" />
                <meta property="og:url" content="https://tobyhagan.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Toby Hagan" />
                <meta property="canonical" content="https://tobyhagan.com/about" />
                <meta property="og:canonical" content="https://tobyhagan.com/about" />


            </Head>
            <div className="bio__photo">
                <Image priority src='https://storage.googleapis.com/tobyhagan_post_images/Toby.jpg' width={1} height={1} layout="responsive" alt='Toby Hagan' />
            </div>
            <h2>I&apos;m Toby!</h2>
            <p>I&apos;m a software engineer and technical educator from rural Virginia. I&apos;m passionate about enabling others through effective tooling and education. I love to learn and teach, and I&apos;m always looking for a new challenge. I&apos;m an efficient team player, always ready to take the lead.</p>
            <h3>Technical Skills</h3>
            <p>
                I&apos;m a full stack developer primarily focused on JavaScript, but my learning style allows me to adapt to new languages and ideologies with ease. My experience ranges from small personal projects to full production applications capable of scaling and growing through well planned modularity and extensibility.
            </p>
            <h3>Databases</h3>
            <p>
                I have experience with major databases, including:

                <ul>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Couchbase</li>
                    <li>ElasticSearch</li>
                    <li>Firebase</li>
                </ul>
            </p>
            <h3>Languages</h3>
            <p>
                I have experience with many programming languages, including:
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>GO</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                </ul>
            </p>
            <h3>Frameworks</h3>
            <p>
                I have experience with many frameworks, including:
                <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Fiber</li>
                    <li>Django</li>
                    <li>Laravel</li>
                    <li>WordPress</li>
                </ul>
            </p>
            <h3>Platforms</h3>
            <p>I&apos;ve deployed applications to:
                <ul>
                    <li>AWS</li>
                    <li>GCP</li>
                    <li>Heroku</li>
                    <li>Netlify</li>
                    <li>Apache</li>
                    <li>Nginx</li>
                </ul>
            </p>

            <h3>A Little About Me</h3>
            <p>
                I&apos;ve done a little bit of everything, from Tool and Die making, to voice over work, with all types of skilled and technical labor in between. I aim to make the world a better place through innovative technology. I recently became a father, which has absolutely transformed my life. Please read more <Link href="/blog/hello-world-meet-asher"><a>here</a></Link>.</p>


        </div >
    )
}