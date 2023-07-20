
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
// import "../public/css/style.css";
import Layout from '../components/layout/Layout';
import "swiper/css";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
  
  return <>
<Layout >
<Component {...pageProps} />
</Layout>
 
 
  </>
}

export default MyApp

