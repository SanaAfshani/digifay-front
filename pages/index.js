import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/template.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from '../Components/product';
import {useSelector} from "react-redux";
import { useEffect } from 'react';
import { getData } from './api';

//
export async function getServerSideProps(Lang) {
    let res = await getData(1156)
   if(res && res[0] === 200){
       return{
                props: {data: res[1].entity}
            }
       }else{
       return {
        //    for redirect to custom error page
        //  yet not created custom error page
           redirect: {
               destination: `/errorpage` ,
               permanent: false,
           },
           props: {}
       }
   }
    
}


  export default function Home({data}) {
    console.log(data,'dataaaa')
    const state = useSelector(state => state.toolsReducer)
    return (
        <>
            <SingleProduct/>
        </>
    )
}