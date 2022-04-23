import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/template.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from '../Components/product';
import {useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";
//
export async function getServerSideProps(Lang) {
    let res = await axios.get("https://749ad6cc-6129-4c5d-b84a-3d7592dc87cd.mock.pstmn.io/GetProuct/1156")
    return {
        props: {data:res.data.entity}
    }
}


  export default function Home({data}) {

    const state = useSelector(state => state.toolsReducer)
      console.log(data)
    return (
        <>
            <SingleProduct/>
        </>
    )
}