import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// const NavLink = ({ first, second, login }) => {

//     const [{ user }] = useStateValue()



//     return (<Link className='text-[white] no-underline' to={!user && "/login"}>
//         <div onClick={login} className='flex flex-col mx-[10px]'>
//             <span className='text-[10px]'>{`${first} ${user && user}`}</span>
//             <span className='text-[13px] font-extrabold'>{`${second} ${user ? 'Sign Out' : 'Sign In'}`}</span>
//         </div>
//     </Link>)
// }

const Header = () => {

    const [{ cart, user }] = useStateValue()

    const login = () => {
        if (user) {
            auth.signOut()
        }
    }

    const index = user?.email.indexOf('@')

    return (
        <div>
            <nav className=' w-full bg-[#131921] flex items-center fixed top-0 z-50 px-[10px] py-1'>
                <Link to='/'>
                    <img className='mx-5 pt-[18px] w-[100px] object-contain' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </Link>

                <div className='flex flex-1'>
                    <div className='flex items-center justify-center gap-2'>

                        <LocationOnOutlinedIcon  className='text-white' />
                        <p className=' text-white text-[13px] font-extrabold'> <span className='font-medium text-[11px]'>Deliver to</span>  {user?.email.slice(0, index)}</p>
                    </div>
                    <input type="text" className='h-[15px] p-[18px] w-full border-none focus:outline-none rounded-l' />
                    <SearchIcon className='rounded-r bg-[#cd9042] p-[5px]  ' sx={{ fontSize: "36.5px" }} fontSize="large" />
                </div>

                <div className='flex justify-space-evenly items-center'>
                    <Link className='text-[white] no-underline' onClick={login} to={!user && './login'} >
                        <div className='flex flex-col mx-[10px]'>
                            <span className='text-[11px] font-medium'>Hello, {user?.email.slice(0, index)} </span>
                            <span className='text-[13px] font-extrabold'>{user ? "Sign Out" : "Sign In"}</span>
                        </div>
                    </Link>

                    <Link className='text-[white] no-underline'>
                        <div className='flex flex-col mx-[10px]'>
                            <span className='text-[11px] font-medium'>Returns</span>
                            <span className='text-[13px] font-extrabold'>& Orders</span>
                        </div>
                    </Link>

                    <Link className='text-[white] no-underline'>
                        <div className='flex flex-col mx-[10px]'>
                            <span className='text-[11px] font-medium'>Your </span>
                            <span className='text-[13px] font-extrabold'>Prime</span>
                        </div>
                    </Link>


                    <Link to="/checkout" className='text-[white] no-underline'>
                        <div className='flex item-center'>
                            <ShoppingCartIcon />
                            <span className='mx-[2px] font-bold'>{cart?.length}</span>
                        </div>
                    </Link>
                </div>

            </nav>
        </div>
    )
}

export default Header







