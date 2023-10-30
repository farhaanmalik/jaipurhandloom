/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ProductCard from "../component/Home/ProductCard"
import Filter from "../component/Filter";
import { getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Loader from "../component/Loader";

const Products = ({ match }) => {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 15000]);
    const [category, setCategory] = useState("")

    const {
        products,
        loading,
        productsCount,
        resultPerPage,
    } = useSelector((state) => state.products);

    const { keyword } = useParams(match);

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    useEffect(() => {
        document.title = 'All Products - Jaipur Handloom Store';
        dispatch(getProduct(keyword, currentPage, price, category));
    }, [dispatch, keyword, currentPage, price, category]);

    return (
        <>
            {loading ? <Loader />
                :
                (
                    <>
                        <div className="bg-[#fff9f2] flex justify-center items-center md:h-28 h-20 w-full">
                            <h1 className="text-center text-xl font-medium uppercase">Shop Now</h1>
                        </div>
                        <section className="text-gray-600 body-font m-auto px-0 md:px-8 max-w-[1350px]">
                            <div className="w-full flex justify-center py-2 md:my-10">
                                <Filter
                                    priceHandler={priceHandler}
                                    price={price}
                                    setCategory={setCategory}
                                />
                                <div className="container mx-auto lg:ml-5">
                                    
                                    {/* Product Cards */}
                                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-3 md:gap-2 gap-0 -px-4">
                                        {products &&
                                            products.map((product) => (
                                                <ProductCard key={product._id} product={product} />
                                            ))}
                                    </div>

                                    {/* Pagination  */}
                                    {resultPerPage < productsCount && (
                                        <div className="mt-10 flex items-center justify-center">
                                            <Pagination
                                                activePage={currentPage}
                                                itemsCountPerPage={resultPerPage}
                                                totalItemsCount={productsCount}
                                                onChange={setCurrentPageNo}
                                                nextPageText="Next"
                                                prevPageText="Prev"
                                                itemClass="px-4 py-2 border hover:bg-gray-100 cursor-pointer"
                                                linkClass="page-link"
                                                activeClass="bg-orange-500 text-white hover:bg-orange-400"
                                                innerClass="flex"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </>
                )}
        </>
    )
}

export default Products
