import { Link } from "react-router-dom"
import { useEffect } from 'react';
import CartItems from "../component/CartItem";

const Cart = () => {

    useEffect(() => {
        document.title = 'Your Cart';
    }, []);


    const products = [
        {
            id: 1,
            name: 'Throwback Hip Bag',
            href: '#',
            color: 'Salmon',
            price: '$90.00',
            quantity: 1,
            imageSrc: 'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/handloom-products-that-are-perfect-for-the-home/Title-Hathkargha-yellow5657.jpg',
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        {
            id: 2,
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: '$32.00',
            quantity: 1,
            imageSrc: 'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/handloom-products-that-are-perfect-for-the-home/Title-Hathkargha-yellow5657.jpg',
            imageAlt:
                'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
        {
            id: 3,
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: '$32.00',
            quantity: 1,
            imageSrc: 'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/handloom-products-that-are-perfect-for-the-home/Title-Hathkargha-yellow5657.jpg',
            imageAlt:
                'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        },
        // More products...
    ]

    return (
        <>
            <div className="md:py-8 py-2 max-w-4xl m-auto px-2">
                <div className="bg-gray-100 w-full md:px-6 px-1.5 rounded border">
                    <div className="mx-4 py-6">
                        <h2 className="md:text-3xl text-2xl font-semibold tracking-tight text-gray-900">Your Cart</h2>
                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <CartItems
                                            key={product.id}
                                            name={product.name}
                                            imageSrc={product.imageSrc}
                                            quantity={product.quantity}
                                            price={product.price}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <Link
                                to="/checkout"
                                className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500"
                            >
                                Checkout
                            </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                <span>or </span>
                                <button type="button" className="font-medium text-blue-600 hover:text-gray-700">
                                    <Link to="/">
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </Link>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Cart