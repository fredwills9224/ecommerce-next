import { FC } from 'react';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import s from './Layout.module.css';

const Layout: FC  = ({ children })=> {

    return(
        <div className={s.root}>
            <Navbar/>
            <Sidebar>
                <CartSidebar/>
            </Sidebar>
            <main className ='fit'>
                { children }
            </main>
            <Footer/>
        </div>
    );

};

export default Layout;