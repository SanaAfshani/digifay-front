import React from 'react';
import Header from './Header';

export default function Layout ({children}) {
    return (
        <React.Fragment>
            <Header/>
            <main className="container-xxl mt-5">
            {children}
            </main>
        </React.Fragment>
    );
};

