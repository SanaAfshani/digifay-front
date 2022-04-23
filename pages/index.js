import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/template.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from '../Components/product';
import {useSelector} from "react-redux";
import axios from "axios";
import {useState} from "react";
//
// export async function getServerSideProps(Lang) {
//     let res = await axios.get("https://1d961432-e87f-44ca-8123-78c940f8e2bc.mock.pstmn.io/Product/1156")
//     return {
//         props: {data: res.data}
//     }
// }


  export default function Home({data}) {
    const state = useSelector(state => state.toolsReducer)
    return (
        <>
            <SingleProduct/>
        </>
    )
}