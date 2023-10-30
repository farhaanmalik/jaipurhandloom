/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    return (
        <>

            <div className="w-full md:rounded-lg md:hover:shadow">
                <div className="group hover:border hover:border-orange-200 w-full md:rounded-lg border overflow-hidden">
                    <Link to={`/product/${product._id}`} className="block relative group-hover:opacity-90">
                        <img alt="ecommerce" className="object-cover aspect-square object-center w-full h-full block" src={product.images[0].url} />
                    </Link>
                    <div className="mt-2 px-3 pb-2">
                        <Link to={`/product/${product._id}`}>
                            <h2 className="text-gray-900 title-font md:text-base text-sm font-medium capitalize">{product.name}</h2>
                        </Link>
                        <h3 className="text-gray-500 text-xs tracking-widest title-font my-1 capitalize">{product.category
                        }</h3>
                        <p className="font-medium md:text-xl text-base text-orange-500">{`₹${product.price}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
