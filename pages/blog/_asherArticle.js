import Image from 'next/image';
import Tag from '../../icons/tag.svg';
export default function Home() {
  return (
    <div className="page__container">
      <div className="page__hero">
        <div className="page__hero-content">
          <Image
            priority
            src="https://storage.googleapis.com/tobyhagan_post_images/asher.avif"
            width={16}
            height={9}
            layout="responsive"
            alt="test"
          />
        </div>
      </div>
      <h1>Hello World, Meet Asher!</h1>
      <p className="post__author">
        BY: Toby Hagan <span className="post__date">11/23/2021</span>
      </p>
      <ul className="post__tags">
        <Tag />
        <li className="post__tag">Family</li>
        {'/'}
        <li className="post__tag">Home</li>
        {'/'}

        <li className="post__tag">Personal Development</li>
      </ul>
      <h2>The Reason I Haven&apos;t Been Around...</h2>

      <div className="post__body">
        <p>
          When one door opens, another closes. At least thats what
          &quot;they&quot; say. But maybe that is for the best more often than
          not. New opportunites, new horizons, and most importantly, new
          expereinces. The last few years of my life have taken some interesting
          turns, but looking back I wouldnt change a thing. From the birth of my
          beautiful son Asher (pictured above), to exploring new and exciting
          career opportunites, things are really feeling positive.
        </p>
        <h3>Theres Nothing Like it.</h3>
        <p>
          &quot;Being a father has taught me so much about life&quot; is
          something you&apos;re likely familiar with hearing, but for me it goes
          a little more like &quot;Being a father has taught me so much about
          myself&quot;. Patience, love, and empathy are just a few of the points
          I could touch on. When I found out I was going to be a father,
          I&apos;ll be honest, I was scared. I wasn&apos;t sure just what to
          expect. Up to this point in my life I had been on a winding path, with
          no specific goal to speak of.
        </p>
        <div className="post__body-image">
          <Image
            src="https://storage.googleapis.com/tobyhagan_post_images/IMG_5765_sq.avif"
            alt="test"
            height={1}
            width={1}
            layout="responsive"
          />
          <figcaption>Asher - 1 month</figcaption>
        </div>
        <h3>He Changed it All.</h3>
        <p>
          And for the better. I&apos;m finding myself with more drive, a solid
          set of goals, and an ambition to succeed I&apos;ve never had before. I
          can see a bright future for my family and I, and am excited to see
          what challenges we will overcome along the way. After searching for a
          job I could &quot;live with &quot; for what seemed like an eternity,
          I&apos;ve found a career field that I truly love. To be able to enjoy
          work, and come home to such a beautiful, happy family at home, I just
          cant ask for more.
        </p>
        <h3>Lacking Experience.</h3>
        <p>
          Becoming a father can, for some, be more terrifying than terrific.
          Thankfully, that is not the case for me, and I have my wife to thank
          for that. Being the youngest of four boys, I never had much experience
          with children outside of a few cousins here and there, and the growing
          number of friends having children of their own over the years. Even
          still, my experience was lacking, and my confidence quickly followed
          suit.
        </p>
        <h3>I Have His Mother to Thank.</h3>
        <p>
          This, however is where my wife comes in. Seeming like Superwoman in
          comparison, she has worked in childcare for nearly a decade, having
          seen and learned first hand, things that I can only imagine. She has
          been there for me throughout this learning journey, and has taught me
          some amazing things about my son that would have taken more than a few
          headaches to figure out.
        </p>
        <div className="post__body-image">
          <Image
            src="https://storage.googleapis.com/tobyhagan_post_images/bpQenVj.jpg"
            alt="test"
            height={13.5}
            width={9}
            layout="responsive"
          />
          <figcaption>SuperMom</figcaption>
        </div>
      </div>
    </div>
  );
}
