import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';

const App = (props: AppProps) => {
    const { pageProps, Component } = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            // @ts-ignore
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
