import { useEffect, useState } from 'react';
export function Cookies() {
    const [needsCookies, setNeedsCookies] = useState();

    function fadeOut() {
        const banner = document.querySelector('.cookie-banner');
        if (banner) {
            banner.style.transition = 'all 0.5s ease-out';
            banner.style.transform = 'translateY(100%)';
        }
    }

    useEffect(() => {
        const acceptsCookies = localStorage.getItem('acceptsCookies');
        if (!acceptsCookies) {
            setNeedsCookies(true);
        }
        setTimeout(fadeOut, 4500);
        setTimeout(() => {
            localStorage.setItem('acceptsCookies', true);
            setNeedsCookies(false);
        }, 5000);
    }, [needsCookies]);

    return (
        <div>
            {needsCookies && (
                <div
                    className="cookie-banner"
                    style={{
                        position: 'fixed',
                        zIndex: '99999',
                        bottom: '0',
                        left: '0',
                        backgroundColor: '#333',
                        color: 'white',
                        padding: '1em',
                        textAlign: 'center',
                        width: '100vw',
                    }}
                >
                    <p style={{ width: '70%', margin: 'auto' }}>
                        This website uses cookies to enhance your experience. By continuing
                        to browse the site you are agreeing to our use of cookies.
                    </p>
                    <button
                        style={{
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            margin: '.75em',
                        }}
                        onClick={() => {
                            localStorage.setItem('acceptsCookies', true);
                            setNeedsCookies(false);
                        }}
                    >
                        Accept
                    </button>
                </div>
            )}
        </div>
    );
}