import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavLink = ({ first, second }) => {
    return (<Link className='text-[white] no-underline' to="/login">
        <div className='flex flex-col mx-[10px]'>
            <span className='text-[10px]'>{first}</span>
            <span className='text-[13px] font-extrabold'>{second}</span>
        </div>
    </Link>)
}

const Header = () => {
    return (
        <div>
            <nav className='bg-[#131921] flex items-center sticky top-0 z-100'>
                <Link>
                    <img className='mx-5 pt-[18px] w-[100px] object-contain' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </Link>

                <div className='flex flex-1'>
                    <input type="text" className='h-[12px] p-[14px] w-full border-none focus:outline-none' />
                    <SearchIcon className='bg-[#cd9042] p-[5px]  ' sx={{ fontSize: "28px" }} fontSize="large" />
                </div>

                <div className='flex justify-space-evenly'>
                    <NavLink
                        first="Hello Somidh"
                        second="Sign In"
                    />
                    <NavLink
                        first="Returns"
                        second="& Orders"
                    />
                    <NavLink
                        first="Your"
                        second="Prime"
                    />


                    <Link to="/checkout" className='text-[white] no-underline'>
                        <div className='flex item-center'>
                            <ShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </Link>
                </div>

            </nav>
        </div>
    )
}

export default Header
