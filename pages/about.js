import Link from "next/link";
import Image from "next/image";

export default function about() {
    return (
        <div className="page__container">
            <div className="bio__photo">
                <Image src='https://storage.googleapis.com/tobyhagan_post_images/Toby.jpg' width={1} height={1} layout="responsive" alt="test" />
            </div>
            <h2>I'm Toby!</h2>
            <p>I'm a software engineer and technical educator from rural Virginia. I'm passionate about enabling others through effective tooling and education. I love to learn and teach, and I'm always looking for a new challenge. I'm an efficient team player, always ready to take the lead.</p>
            <h3>Technical Skills</h3>
            <p>
                I'm a full stack developer primarily focused on JavaScript, but my learning style allows me to adapt to new languages and ideologies with ease. My experience ranges from small personal projects to full production applications capable of scaling and growing through well planned modularity and extensibility.
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
            <p>I've deployed applications to:
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
                I've done a little bit of everything, from Tool and Die making, to voice over work, with all types of skilled and technical labor in between. I aim to make the world a better place through innovative technology. I recently became a father, which has absolutely transformed my life. Please read more <Link href="/blog/hello-world-meet-asher"><a>here</a></Link>.</p>


        </div >
    )
}