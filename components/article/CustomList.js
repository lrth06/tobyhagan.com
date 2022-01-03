import ArrowRight from '../../icons/arrow-right.svg';

export function CustomList({ children, ...props }) {
    console.log(children,)
    const listItems = children.map(item => {
        return (
            <li className="post__list-item">
                <ArrowRight />

                {item.props.children}
            </li>
        )
    })

    return (
        <ul className="post__list">
            {listItems}
        </ul>
    )
}