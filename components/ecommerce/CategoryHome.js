import Link from "next/link";

function CategoryHome() {
   

    return (
        <>
        <div className="category-home-wraper">
                                <div className="pic">
                                  <Link href="/products/"><a><img src="/img/category/pic-1@2x.png" alt="pic" /></a></Link>
                                </div>
                            <div className="pic">
                                 <Link href="/products/"><a><img src="/img/category/pic-2@2x.png" alt="pic" /></a></Link>
                                </div>
                                <div className="pic">
                                 <Link href="/products/"><a><img src="/img/category/pic-3@2x.png" alt="pic" /></a></Link>
                                </div>
                                <div className="pic">
                                 <Link href="/products/"><a> <img src="/img/category/pic-4@2x.png" alt="pic" /></a></Link>
                                </div>
                                <div className="pic">
                                 <Link href="/products/"><a> <img src="/img/category/pic-5@2x.png" alt="pic" /></a></Link>
                                </div>
                            </div>
            
        </>
    );
}
export default CategoryHome;
