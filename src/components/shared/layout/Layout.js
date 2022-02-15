import React from 'react';

import Header from './Header';
import Footer from './Footer'
import '../../../assets/css/layout.css';

function Layout({ children, title, accesGranted}) {
    return(
    <div className="layout">
        <Header className="layout-header bordered" accesGranted={accesGranted} />
        <main className="layout-main bordered">
        <h2 className="layout-title bordered title is-4">{title}</h2>
        <hr className="separator-layout"/>
            <section className="layout-content">{children}</section>
        </main>
        <Footer />
    </div>
    );
}

export default Layout;