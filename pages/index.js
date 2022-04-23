import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/template.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from '../Components/product';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {getData} from './api';
import {setMockData} from "../Redux/Actions/toolsAction";

//
export async function getServerSideProps() {
    let res = await getData(1156)

    if (res && res[0] === 200) {
        return {
            props: {data: res[1].entity}
        }
    } else {
        return {
            //    for redirect to custom error page
            //  yet not created custom error page
            redirect: {
                destination: `/errorpage`,
                permanent: false,
            },
            props: {}
        }
    }

}


export default function Home({data}) {
    //bara gereftan redux
    const state = useSelector(state => state.toolsReducer)
    //bara dispatch kardan
    const dispatch = useDispatch()
    console.log(state,"statestate")
    useEffect(()=>{
        //nahve dispach va set kardane data toye redux
        //az dispatch khat 37 estefade kardim
        //ye function ham toye action ha doros kardim ke miad type va data ro dispatch mikone ke inja esmesh setMockData
        //injori add mishe to redux
        // harja ham ke khasti estefade koni
        //    const state = useSelector(state => state.toolsReducer) injori migirish
        dispatch(setMockData(data))
    },[])

    return (
        <>
            <SingleProduct data={data}/>
        </>
    )
}