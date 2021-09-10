import { AppProps } from 'next/app';
import { FC } from 'react';

// wrapper [FC] that has no operation other than passing [children]
    const Noop: FC = ({ children })=> <>{children}</>
// wrapper [FC] that has no operation other than passing [children]

function MyApp({ Component, pageProps }: AppProps & {Component: {Layout: FC} }) {

    // wrap components in [Layout] component if it is defined if not wrap in [Noop] Component
        const Layout = Component.Layout ?? Noop;
    // wrap components in [Layout] component if it is defined if not wrap in [Noop] Component
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;