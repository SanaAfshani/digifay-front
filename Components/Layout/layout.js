import React from 'react';
import Header from './Header';

export default function Layout ({children}) {
    return (
        <div className="container-xxl">
            <Header/>
            <main>
            {children}
            </main>
        </div>
    );
};

