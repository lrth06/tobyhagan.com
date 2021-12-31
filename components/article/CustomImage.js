import Image from "next/image";

export function CustomImage({ children, ...props }) {
    return (
        <div className="post__body-image">
            <Image
                {...props}
                alt={props.alt}
                src={props.src}
                width={props.width}
                height={props.height}
                layout="responsive"
            />
            <figcaption>{props.alt}</figcaption>
        </div>
    )
}
