/* eslint-disable react/prop-types */
import ToggleQuantity from "../component/ToggleQuantity"
import Rating from "../component/Rating";
import { getProductDetails } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader";

const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();
    const { id } = useParams(match);

    const { product, loading } = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {
        document.title = `${product.name} - Jaipur Handloom`;
        
        dispatch(getProductDetails(id));
    }, [dispatch, id, product.name]);

    return (
        <>
            {loading ?
                (<Loader />)
                :
                (<>
                    <section className="max-w-5xl m-auto  text-gray-600 body-font h-[80vh] overflow-hidden flex flex-col justify-center py-10 md:py-5">
                        <div className="container px-8 mx-auto">
                            <div className="mx-auto flex items-center flex-wrap md:flex-nowrap">
                                <img alt="ecommerce" className="md:w-1/2 md:h-96 h-60 w-full border aspect-square shadow-sm object-cover object-center rounded"
                                    src={`${product.images[0].url}`} />
                                <div className="md:w-1/2 w-full md:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">Brand</h2>
                                    <h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1 capitalize">{product.name}</h1>
                                    <div className="my-3">
                                        <Rating />
                                    </div>
                                    <div className="mt-4 border-gray-100 mb-5">
                                        <div className="flex items-center">
                                            <span className="mr-3 font-medium text-black">Stock:</span>
                                            <div className={`relative ${!product.Stock < 1 ? "text-green-600" : "text-red-600"}`}>
                                                {product.Stock > 0 ? "In Stock" : "Out Of Stock"}
                                                {/* In Stock */}
                                            </div>
                                        </div>
                                        <ToggleQuantity />
                                    </div>
                                    <div className="flex items-center border-y py-5">
                                        <span className="title-font font-medium text-2xl  text-orange-500">{`₹${product.price}`}</span>
                                        <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded">Add To Cart</button>
                                    </div>
                                    <div className="mt-4">
                                        <p className="leading-relaxed"><b>Descriptions:</b> {product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>)
            }
        </>
    )
}

export default ProductDetails
