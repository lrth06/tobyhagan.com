import Link from "next/link";
import Image from "next/image";

export default function about() {
    return (
        <div className="page__container">
            <div className="bio__photo">
                <Image src='https://storage.googleapis.com/tobyhagan_post_images/Toby.jpg' width={1} height={1} layout="responsive" alt="test" />
            </div>
            <h2>I'm Toby!</h2>
            <h3>A Little About Me</h3>
            <p>I'm a software engineer and technical educator from rural Virginia. I'm passionate about enabling others through effective tooling and education. I love to learn and teach, and I'm always looking for a new challenge. I'm an efficient team player, always ready to take the lead.</p>
            <p>I recently became a father, which you can read more about <Link href="/blog/hello-world-meet-asher"><a>here</a></Link>.</p>


        </div >
    )
}