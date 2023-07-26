import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
// import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({
    // totalCartItems,
    // totalCompareItems,
     toggleClick,
    // totalWishlistItems,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area jba-header">
                <div className="Jba-header-top  d-none d-lg-block">
                    <div className="container">
                        <div className="Jba-header-wrap">
                            <div className="logo jba-logo-width">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/img/themepic/jbalogo.png"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="jba-header-right">
                                <div className="jba-search-head">
                                    <Search />
                                </div>
                                <div className="jba-header-action-right">
                                <div className="hotline d-none d-lg-flex">
                                <img
                                    src="/img/themepic/icons/icon-headphone.svg"
                                    alt="hotline"
                                />

                                <p>
                                987 654 3210<span>24/7 Support</span>
                                </p>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="Jba-header-wrap header-space-between position-relative">
                            <div className="logo jba-logo-width d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/img/themepic/jbalogo.png"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="jab-menu jab-menu-padding jab-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                        <li className="position-static">
                                                <Link href="/products/">
                                                    <a>
                                                        Shop All
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            href="/products/"
                                                        >
                                                         Demo Heading
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            href="#"
                                                        >
                                                           Demo Heading
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                  Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                Demo Heading
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a
                                                            className="menu-title"
                                                            href="#"
                                                        >
                                                            Demo Heading
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                Demo Heading
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                Demo Heading
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href="#">
                                                                <img
                                                                    src="/img/banner/prom-banner-1.png"
                                                                    alt="Nest"
                                                                />
                                                                
                                                            </a>
                                                            <div className="menu-banner-content">
                                                                <h4>
                                                                    Hot deals
                                                                </h4>
                                                                <h3>
                                                                    Don't miss
                                                                    <br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">
                                                                        Save to
                                                                        50%
                                                                    </span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="#">
                                                                        Shop now
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>
                                                                        25%
                                                                    </span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/products/">
                                                    <a className="active">
                                                      Rings
                                                    </a>
                                                </Link>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/">
                                                            <a>test</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/index-2">
                                                            <a>test</a>
                                                        </Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li>
                                                <Link href="/shop-grid-right">
                                                    <a>
                                                    Earings
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <a href="#">Bracelets <i className="fi-rs-angle-down"></i></a>
                                            </li>

                                           
                                            <li>
                                                <Link href="/blog-category-grid">
                                                    <a>
                                                    Pendents
                                                    </a>
                                                </Link>
                                               
                                            </li>
                                          
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>Bespoke Jewelery</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>Gifting</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>New Arrival</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>More</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                          
                            <div className="jba-header-action-right">
                                    <div className="jab-header-pic">
                                        {/* <div className="search-location">
                                            <form action="#">
                                                <select className="select-active">
                                                    <option>
                                                        Your Location
                                                    </option>
                                                    <option>Alabama</option>
                                                    <option>Alaska</option>
                                                    <option>Arizona</option>
                                                    <option>Delaware</option>
                                                    <option>Florida</option>
                                                    <option>Georgia</option>
                                                    <option>Hawaii</option>
                                                    <option>Indiana</option>
                                                    <option>Maryland</option>
                                                    <option>Nevada</option>
                                                    <option>New Jersey</option>
                                                    <option>New Mexico</option>
                                                    <option>New York</option>
                                                </select>
                                            </form>
                                        </div> */}
                                        {/* <div className="jba-header-action-icon">
                                            <Link href="/shop-compare">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Evara"
                                                        src="/img/themepic/icons/icon-compare.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalCompareItems}
                                                    </span>
                                                </a>
                                            </Link>
                                            <Link href="/shop-compare">
                                                <a>
                                                    <span className="lable ml-0">
                                                        Compare
                                                    </span>
                                                </a>
                                            </Link>
                                        </div> */}
                                        <div className="jba-header-action-icon">
                                            <Link href="/my-wishlist/">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Evara"
                                                        src="/img/themepic/icons/icon-compare.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                      2
                                                    </span> 
                                                </a>
                                            </Link>
                                            <Link href="/my-wishlist/">
                                                <span className="lable">
                                                    Wishlist
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="jba-header-action-icon">
                                            <Link href="/cart/">
                                                <a className="mini-cart-icon">
                                                    <img
                                                        alt="Evara"
                                                        src="/img/themepic/icons/icon-cart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                      5
                                                    </span> 
                                                </a>
                                            </Link>
                                            <Link href="/cart/">
                                                <a>
                                                    <span className="lable">
                                                        Cart
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="jba-header-action-icon">
                                            <Link href="/page-account"><a>
                                                <img
                                                    className="svgInject"
                                                    alt="Nest"
                                                    src="/img/themepic/icons/icon-user.svg"
                                                />
                                            </a></Link>
                                            <Link href="/myaccounts/"><a>
                                                <span className="lable">
                                                    Account
                                                </span>
                                            </a></Link>
                                            <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                                <ul>
                                                    <li>
                                                        <Link href="/myaccounts/">
                                                             <a>
                                                                <i className="fi fi-rs-user mr-10"></i>
                                                                My Account
                                                            </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/myaccounts/track-order/"><a>
                                                            <i className="fi fi-rs-location-alt mr-10"></i>
                                                            Order Tracking
                                                        </a></Link>
                                                    </li>
                                                    {/* <li>
                                                        <Link href="/page-account"><a>
                                                            <i className="fi fi-rs-label mr-10"></i>
                                                            My Voucher
                                                        </a></Link>
                                                    </li> */}
                                                    <li>
                                                        <Link href="/my-wishlist/"><a>
                                                            <i className="fi fi-rs-heart mr-10"></i>
                                                            My Wishlist
                                                        </a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/myaccounts/edit-profile/"><a>
                                                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                                                            Setting
                                                        </a></Link>
                                                    </li>
                                                    
                                                    <li>
                                                        <Link href="/login/"><a>
                                                            <i className="fi fi-rs-sign-out mr-10"></i>
                                                            Sign out
                                                        </a></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                           

                            <div className="jba-header-action-right d-block d-lg-none">
                                <div className="jab-header-pic">
                                    <div className="jba-header-action-icon">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/img/themepic/icons/icon-compare.svg"
                                                />
                                            <span className="pro-count blue">
                                                   2
                                                </span> 
                                            </a>
                                        </Link>
                                    </div>
                                
                                    <div className="jba-header-action-icon">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="Evara"
                                                    src="/img/themepic/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count blue">
                                                  3
                                                </span> 
                                            </a>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="https://shop.jewelsbyanu.com/media/wysiwyg/smartwave/porto/homepage/Earrings.png"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>Pearl Diamond Ring</a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            ₹3000
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="https://shop.jewelsbyanu.com/media/wysiwyg/smartwave/porto/homepage/Earrings.png"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>Pearl Diamond Ring</a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            ₹3000
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>₹6000</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link href="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jba-header-action-icon d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

// const mapStateToProps = (state) => ({
//     totalCartItems: state.cart.length,
//     totalCompareItems: state.compare.items.length,
//     totalWishlistItems: state.wishlist.items.length,
// });

export default Header;
