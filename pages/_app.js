import "@/styles/globals.css";
import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';
import SubscribeSection from '../components/SubscribeSection';
import { useEffect } from 'react';
import SignUpPopup from "@/components/SignUpPopup";
import GTMScript from "@/components/GTMScript";

export default function App({ Component, pageProps }) {
  // Clean up any modal containers on route changes
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        const container = document.getElementById('global-modal-container');
        if (container && document.body.contains(container)) {
          document.body.removeChild(container);
        }
      }
    };
  }, []);

  return (
    <>
      <GTMScript />
      <Head>
        <link rel="icon" href="/Image/Codelibraylogo.png" />
        <title>CODE.LIBRARY</title>
      </Head>
        <Navbar />
      <CartProvider>
        <Component {...pageProps} />
        <SignUpPopup />
        <SubscribeSection />
        <Footer />
      </CartProvider>
    </>
  );
}
