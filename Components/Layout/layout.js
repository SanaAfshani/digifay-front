import React from 'react';
import Header from './Header';

export default function Layout ({children , isMobile}) {
    return (
        <React.Fragment>
            <Header isMobile={isMobile}/>
            <main className="container-xxl mt-5">
            {children}
            </main>
        </React.Fragment>
    );
};

