import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/template.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from '../Components/product';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {getData} from './api';
import {setMockData} from "../Redux/Actions/toolsAction";

//for handling server side page 
export async function getServerSideProps() {
    let res = await getData(1156)

    if (res && res[0] === 200) {
        return {
            props: {data: res[1].entity}
        }
    } else {
        return {
            //  for redirect to custom error page
            //  yet not created custom error page
            redirect: {
                destination: `/errorpage`,
                permanent: false,
            },
            props: {}
        }
    }

}


export default function Home({data , isMobile}) {
    //for connect redux
    const state = useSelector(state => state.toolsReducer)
    //for dispatch
    const dispatch = useDispatch()
    console.log(state,"statestate")
    

    return (
        <>
            <SingleProduct data={data} isMobile={isMobile}/>
        </>
    )
}