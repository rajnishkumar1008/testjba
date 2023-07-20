import React from 'react';
import ProductMainDetails from '../../components/ecommerce/ProductMainDetails';
import Link from 'next/link';
// import Breadcrumb from '../../components/layout/Breadcrumbjs';

const Slug = () => {
    return (
        <>
          <div className='page-header breadcrumb-wrap'>
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/"><a>
                            Home
                        </a>
                        </Link>
                        <span></span>Shop
                        <span></span>Melee Diamonds
                    </div>
                </div>
            </div>
            <ProductMainDetails />
        </>
    );
}

export default Slug;
