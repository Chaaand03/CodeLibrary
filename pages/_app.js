import "@/styles/globals.css";
import Head from "next/head";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from '../context/CartContext';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.png" />
        <title>CODE.LIBRARY</title>
      </Head>
      <Navbar />
      <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
      <Footer/>
    </>
  )
}
