import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/template.module.scss'
import 'bootstrap/dist/css/bootstrap.css';
import SingleProduct from '../Components/product';

export default function Home() {
  return (
      <>
        <SingleProduct/>
      </>
  )
}
