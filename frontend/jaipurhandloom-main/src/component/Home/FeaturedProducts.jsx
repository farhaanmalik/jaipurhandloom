import { useEffect } from "react";
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";


const FeaturedProducts = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            <section className="text-gray-600 body-font max-w-[1200px] m-auto px-0 md:px-8">
                <div className="container pt-10 pb-16 md:py-20 mx-auto">
                    <div className="flex justify-between items-center mb-4 md:px-2 px-3">
                        <h2 className="md:text-3xl text-2xl font-bold md:text-left text-center">Best Selling</h2>
                        <Link to="/products" className="text-orange-500 text-sm md:text-lg border border-orange-500 px-3 py-1 rounded-md hover:opacity-75">
                            View All
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-3 md:gap-2 gap-0 -px-4 md:mt-8 mt-4">
                        {products &&
                            products.slice(0, 8).map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProducts
