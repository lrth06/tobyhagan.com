import { useState } from 'react';
import Link from 'next/link';
import ThemeSelector from './ThemeSelector';
import ArrowDown from '../icons/arrow-down.svg';
import { useRouter } from 'next/router';
export default function Layout({ children }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const handleNavigationToggle = e => {
        e.preventDefault();
        setOpen(!open);
    };
    const links = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/about',
            label: 'About',
        },
        {
            href: '/blog',
            label: 'Blog',
        },
        {
            href: '/contact',
            label: 'Contact',
        },

    ];

    return (
        <>
            <nav className="navigation">
                <Link href="/">
                    <a className="navigation__logo">{`{TobyHagan}`}</a>
                </Link>

                <ul
                    className={'navigation__list'}
                    style={{
                        top: open ? '50px' : '-1000%',
                    }}
                >
                    {links.map(link => (
                        <li
                            key={link.href}
                            onClick={() => {
                                router.push(link.href);
                                setOpen(false);
                            }}
                            className="navigation__item"
                        >
                            <Link href={link.href}><a className="navigation__link">{link.label}</a></Link>
                        </li>
                    ))}
                    <li className="navigation__item">
                        <ThemeSelector />
                    </li>
                </ul>

                <button
                    aria-label='Toggle navigation'
                    name="navigation-toggle"
                    onClick={handleNavigationToggle}
                    className="navigation__toggle"
                    style={{
                        transition: 'transform 0.5s ease',

                        transform: open ? 'rotateX(180deg)' : 'rotateX(0deg)',
                    }}
                >
                    <ArrowDown />
                </button>
            </nav>
            {children}
        </>
    );
}