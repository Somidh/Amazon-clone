import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{cart}, dispatch] = useStateValue()
    

const removeFromCart = () => {
    dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
    })
}

    return (
        <div className='flex my-[20px]'>
            <img className='object-contain w-[180px] h-[180px] ' src={image} alt="" />
            <div className='pl-[20px]'>
                <p className='text-base font-extrabold'>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='flex'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>

                <button onClick={removeFromCart} className='bg-[#f0c14b] border border-solid mt-[10px] font-[#111]'>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
