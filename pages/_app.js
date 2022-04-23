import {ThemeProvider} from "next-themes";
import Layout from "../Components/Layout/layout.js";
import "../Components/layout/layout.scss";
import style from '../styles/template.module.scss'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import "../styles/index.scss"
import {Provider} from "react-redux";
import store from "../Redux/Store/store";


function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <ThemeProvider enableSystem={false}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
