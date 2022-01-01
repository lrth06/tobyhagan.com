import '../styles/globals.scss'
import Layout from '../components/Layout';
import { ThemeContext } from '../context/ThemeContext';
import { Cookies } from '../components/Cookie';
import { useEffect, useMemo, useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(null);
  const themeValue = useMemo(() => ({ dark, setDark }), [dark, setDark]);

  useEffect(() => {
    const darkPreference = localStorage.getItem('dark');

    if (!darkPreference) {
      const systemPreference = window.matchMedia(
        '(prefers-color-scheme: dark)',
      );
      if (systemPreference.matches) {
        setDark(true);
        localStorage.setItem('dark', true);
      } else {
        setDark(false);
        localStorage.setItem('dark', false);
      }
    } else {
      if (darkPreference === 'true') {
        setDark(true);
      } else if (darkPreference === 'false') {
        setDark(false);
      }
    }
  }, [setDark]);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('dark', true);
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('dark', false);
    }
  }, [dark, setDark]);
  return (
    <ThemeContext.Provider value={themeValue}>
      <div className="app__container">
        <Layout>
          <Component {...pageProps} />
          <Cookies />
        </Layout>
      </div>
    </ThemeContext.Provider>)
}

export default MyApp
