import { FC } from 'react';
import { Footer } from '..';
import s from './Layout.module.css';

const Layout: FC  = ({ children })=> {

    return(
        <div className={s.root}>
            <main className ='fit'>
                { children }
            </main>
            <Footer/>
        </div>
    );

};

export default Layout;