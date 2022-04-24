import {ThemeProvider} from "next-themes";
import Layout from "../Components/Layout/layout.js";
import style from '../styles/template.module.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "../styles/index.scss"
import {Provider} from "react-redux";
import store from "../Redux/Store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Head from "next/head";


function MyApp({Component, pageProps, isMobile}) {
    return (
        <React.Fragment>

            <Head>
                <title>دیجی فای | تست</title>
            </Head>


            <Provider store={store}>
                <ThemeProvider enableSystem={false}>
                    <Layout isMobile={isMobile}>
                        <Component {...pageProps} isMobile={isMobile}  />
                    </Layout>
                </ThemeProvider>
            </Provider>

        </React.Fragment>
    );
}


MyApp.getInitialProps = async (ctx) => {
    const userAgent =
      typeof window === "undefined"
        ? ctx.ctx.req.headers["user-agent"]
        : window.navigator.userAgent;
    let isMobile;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|tablet|playbook/i.test(
        userAgent
      )
    ) {
      isMobile = true;
    } else {
      isMobile = false;
    }
    return {
      isMobile,
    };
  };

export default MyApp;
