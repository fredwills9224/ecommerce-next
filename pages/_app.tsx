import '@assets/main.css';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { UIProvider, useUI } from '@components/ui/Context';

// wrapper [FC] that has no operation other than passing [children]
    const Noop: FC = ({ children })=> <>{children}</>
// wrapper [FC] that has no operation other than passing [children]

function MyApp({ Component, pageProps }: AppProps & {Component: {Layout: FC} }) {

    // wrap components in [Layout] component if it is defined if not wrap in [Noop] Component
        const Layout = Component.Layout ?? Noop;
    // wrap components in [Layout] component if it is defined if not wrap in [Noop] Component
    const ui = useUI();
    console.log(ui);
    return (
        
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>

    );
};

export default MyApp;