import React from "react";
import Link from "next/link";
import Head from "next/head";
import BottomServiceList from "../components/elements/BottomServiceList";

const Contactus = () => {
  return (
    <div>
      <Head>
        <title>New contact-us | JBA</title>
        <meta
          name="description"
          content="Loose Diamond Supplier, Manufacturer & Exporter from India"
        />
      </Head>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              <a>Home</a>
            </Link>
            <span></span>Contact US
          </div>
        </div>
      </div>

      <section className="ptb-60">
        <div className="container">
          <div className="row g-0 bg0">
            <div className="col-lg-6 align-self-center">
              <div className="jba-login-page jba-contact-us">
                <div className="socail-log">
                  <h1>Contact Us</h1>
                </div>
                <div className="jab-log-form jab-regi-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        {" "}
                        <input type="text" placeholder="Enter Your Name" />
                      </div>
                      <div className="col-lg-12">
                        {" "}
                        <input type="eamil" placeholder="Enter Your Email Id" />
                      </div>
                      <div className="col-lg-12">
                        {" "}
                        <input
                          type="eamil"
                          placeholder="Enter Your Phone Number"
                        />
                      </div>
                      <div className="col-lg-12">
                        {" "}
                        <textarea
                          name="message"
                          placeholder="Enter Your Message"
                        ></textarea>
                      </div>
                    </div>

                    {/* <p>
                      <a className="forget">Forget Password</a>
                    </p> */}
                    <button type="submit" className="btn btn-warning">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="jba-login-page-img">
                <img src="/img/login/login-pic.png" alt="login-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="new-header">Our Locations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  800 Steeles Ave. W. #B10155 Thornhill, ON. L4J 7L2
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">987 654 3210</div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="content-right"> Mon-Sat: 9 AM - 5 PM</div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">
                  <a href="mailto:info@dynamicssquare.com">
                    info@jewelsbyanu.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomServiceList />
    </div>
  );
};

export default Contactus;
