import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { LiaTimesSolid, LiaShoppingCartSolid, LiaUserSolid, LiaSearchSolid } from 'react-icons/lia'
import { Link, NavLink } from 'react-router-dom'
import Search from './Search'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const { isAuthenticated, user } = useSelector(
        (state) => state.user
    );

    const [sideOpen, setSideOpen] = useState(false);
    const [searchInputOpen, setSearchInputOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [userTab, setUserTab] = useState(false)

    const navigate = useNavigate();

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
            setSearchInputOpen(false)
        } else {
            navigate("/products");
        }
    };

    const handleSideBar = () => {
        setSideOpen(true);
    }

    const openSearch = () => {
        setSearchInputOpen(true)
    }

    const openUserTab = () => {
        setUserTab(true)
    }

    return (
        <>
            <header className="text-gray-600 body-font h-[62px] relative">
                <div className='bg-slate-50 border-b fixed w-full px-2 h-16 lg:px-10 z-50'>
                    <div className="container max-w-7xl mx-auto flex py-4 justify-between md:flex-row items-center">
                        <div className='flex items-center'>
                            <div className='mr-4 md:mr-0 flex'>
                                <FaBars className={sideOpen ? 'text-xl hidden md:hidden text-orange-500 cursor-pointer' : 'text-xl block md:hidden text-orange-500 cursor-pointer'} onClick={handleSideBar} />
                                <LiaTimesSolid className={sideOpen ? 'text-xl block font-medium text-orange-500 cursor-pointer' : 'text-xl hidden font-medium text-orange-500 cursor-pointer'} onClick={() => setSideOpen(false)} />
                            </div>

                            <Link to="/" className="title-font font-medium text-gray-900 mr-5">
                                <span className="text-xl">Jaipur Handloom</span>
                            </Link>

                            <div className={`absolute top-[60px] left-0 md:top-0 md:relative md:block pt-1 md:bg-transparent w-full md:w-fit bg-slate-100 md:py-0 md:h-fit 
                            ${sideOpen ? "h-fit" : 'h-0 overflow-hidden'}`}>
                                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:flex-row flex-col flex items-center text-base justify-center py-4">
                                    <NavLink to="/" className="mr-6 hover:text-orange-400 py-3 md:py-0" onClick={() => setSideOpen(false)}>Home</NavLink>
                                    <NavLink to="/products" className="mr-6 hover:text-orange-400 py-3 md:py-0" onClick={() => setSideOpen(false)}>Products</NavLink>
                                    <NavLink className="mr-6 hover:text-orange-400 py-3 md:py-0" onClick={() => setSideOpen(false)}>Categories</NavLink>
                                    <NavLink to="/contact-us" className="mr-6 hover:text-orange-400 py-3 md:py-0" onClick={() => setSideOpen(false)}>Contact Us</NavLink>
                                </nav>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div>
                                <LiaSearchSolid className='text-2xl mr-4 text-black cursor-pointer' onClick={openSearch} />
                                <div className={searchInputOpen ? "block" : "hidden"}>
                                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-[#fffffff7]'>
                                        <div className='absolute right-10 top-10'>
                                            <LiaTimesSolid className='text-orange-500 text-3xl cursor-pointer' onClick={() => setSearchInputOpen(false)} />
                                        </div>
                                        <Search searchSubmitHandler={searchSubmitHandler} setKeyword={setKeyword} />
                                    </div>
                                </div>
                            </div>
                            <Link to="/cart"><LiaShoppingCartSolid className='text-2xl mr-2 text-black cursor-pointer' /></Link>

                            <div className=''>
                                <LiaUserSolid className='text-2xl md:ml-4 ml-2 text-black cursor-pointer' onClick={openUserTab} />
                                <div className={userTab ? "block" : "hidden"}>

                                    {isAuthenticated ? (
                                        <>
                                            <ul className='absolute md:right-2 right-0 top-16 bg-white border w-[150px] shadow rounded text-[15px]'>
                                                <li className='py-2 px-4'>
                                                    {user.name}
                                                </li>
                                                {user.role === "admin" && (
                                                    <li className='py-2 px-4'>
                                                        <Link to="/dashboard" className='hover:text-orange-400 w-full'  onClick={() => setUserTab(false)}>Dashboard</Link>
                                                    </li>)
                                                }
                                                <li className='py-2 px-4'>
                                                    <Link to="/order" className='hover:text-orange-400 w-full'  onClick={() => setUserTab(false)}>Orders</Link>
                                                </li>
                                                <li className='py-2 px-4'>
                                                    <Link to="/account" className='hover:text-orange-400 w-full'  onClick={() => setUserTab(false)}>My Account</Link>
                                                </li>
                                                <li className='py-2 px-4 border-t hover:bg-slate-100'>
                                                    <button className='text-red-500 w-full text-left'  onClick={() => setUserTab(false)}>Logout</button>
                                                </li>
                                            </ul>
                                        </>
                                    ) : (
                                        <>
                                            <ul className='absolute md:right-2 right-0 top-16 bg-white border w-[150px] shadow rounded text-[15px]'>
                                                <li className='py-2 px-4'>
                                                    <Link to="/register" className='hover:text-orange-400' onClick={() => setUserTab(false)}>Sign Up</Link>
                                                </li>
                                                <li className='pb-2 px-4'>
                                                    <Link to="/login" className='hover:text-orange-400' onClick={() => setUserTab(false)}>Login</Link>
                                                </li>
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
