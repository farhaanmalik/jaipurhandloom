/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const CartItem = (props) => {

    const { imageSrc, name, price, quantity } = props;

    return (
        <>
            <li className="flex py-6">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={imageSrc}
                        alt={name}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <Link to="/">{name}</Link>
                            </h3>
                            <p className="ml-4">{price}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {quantity}</p>

                        <div className="flex">
                            <button
                                type="button"
                                className="font-medium text-gray-800 hover:text-gray-700"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CartItem
