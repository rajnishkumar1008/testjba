import Head from 'next/head'
import Image from 'next/image'
import Intro1 from "./../components/sliders/Intro1";
import Layout from "./../components/layout/Layout";
import CategoryHome from '../components/ecommerce/CategoryHome';
import SingleProduct from '../components/ecommerce/SingleProduct';
import PromoBannerOne from '../components/elements/PromoBannerOne';
import PromoBannerTwo from '../components/elements/PromoBannerTwo';
import PromoBannerThree from '../components/elements/PromoBannerThree';
import PromoBannerFour from '../components/elements/PromoBannerFour';
import BottomServiceList from '../components/elements/BottomServiceList';
import HomeSlider from '../components/sliders/HomeSlider';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Loose Diamond Supplier, Manufacturer & Exporter from India | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>

     <main>
     <div>

            <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-30">
                            <Intro1 />
                        </div>
                    </div>
                </section>
                <section className="m-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                        <CategoryHome />
                        </div>
                    </div>
                </div>
            </section>
    
          
          <section>
            <div className='container'>
            <div className="section-title">
              <h2>Featured Categories</h2>
              </div>
              <div className="row">
               
                 <div className="col-lg-12">
                    <div className='related-products position-relative'>
                    <HomeSlider />
                    </div>
                 </div>
            
              </div>
            </div>
          </section>

          <section className='p-9'>
        <div className='container'>
        
          <div className='row'>
            <div className='col-lg-12'>
            <PromoBannerOne />
            </div>
            
          </div>
        </div>
      </section>

       

          <section>
            <div className='container'>
            <div className="section-title">
              <h2>New Arrival</h2>
              </div>
              <div className='row'>
                <div className='col-lg-3'>
                  <SingleProduct />
                </div>
                <div className='col-lg-3'>
                  <SingleProduct />
                </div>
                <div className='col-lg-3'>
                  <SingleProduct />
                </div>
                <div className='col-lg-3'>
                  <SingleProduct />
                </div>
              </div>
            </div>
          </section>

          <section className='p-9'>
      <div className='container'>
       <div className='row'>
       <div className="col-lg-6">
        <PromoBannerTwo />
        </div>
        <div className="col-lg-6">
        <PromoBannerThree />
        </div>
       </div>
      </div>
    </section>

    <section className='p-9'>
      <div className='container'>
       <div className='row bg-color-1'>
       <div className="col-lg-12">
        <PromoBannerFour />
        </div>
       </div>
      </div>
    </section>

    <BottomServiceList />

       
      </div>
     </main>

     
    </div>
  )
}
