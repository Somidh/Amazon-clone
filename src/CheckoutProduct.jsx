import React from 'react'
import { useStateValue } from './StateProvider'
import amazonVerified from './Images/fba-badge_18px._CB485936079_.png'

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ cart }, dispatch] = useStateValue()


    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }

    return (
        <div className='bg-[white] w-[80em] mx-auto'>
            <div className='flex my-[20px] '>
                <img className='object-contain w-[300px] h-[200px] ' src={image} alt="" />
                <div className='px-[30px] py-5 w-full flex flex-col gap-4 '>
                    <div className='flex items-center justify-between  '>
                        <p className='text-base font-medium'>{title}</p>
                        <p className='flex items-center justify-center'>
                            <small className='mr-1 font-medium text-xs'>₹</small>
                            <strong className='text-xl '>{price}</strong>
                        </p>
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                        <p>In stock</p>
                        <p>Eligible for Free Shipping</p>
                        <img src={amazonVerified} alt="" />
                        <small className="flex item-center">
                            <input className='mr-[5px]' type="checkbox" />
                            This will be a gift.
                        </small>
                        
                    </div>

                    {/* <button onClick={removeFromCart} className='bg-[#f0c14b] rounded-sm w-full h-[30px] border border-solid border-[#000000] mt-[10px] text-[#111]'>Remove from cart</button> */}

                    <p onClick={removeFromCart} className="cursor-pointer text-[#0066C0]">Delete <span className='mx-2'>|</span> <span onClick={removeFromCart}>Save for later</span></p>
                </div>

            </div>
        </div>

    )
}

export default CheckoutProduct
