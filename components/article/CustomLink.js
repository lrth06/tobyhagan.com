import Link from 'next/link'
export default function CustomLink({ children }) {
    const href = children.props.href;
    const as = children.props.as;
    return (
        <Link href={href} as={as}>
            {children}
        </Link>
    )
}