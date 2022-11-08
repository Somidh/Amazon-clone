import React from 'react'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, image, price, rating }) => {

    const [{ cart }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })

    }


    return (
        <div className='flex flex-col items-start justify-end w-full  max-h-[400px] min-w-[100px] m-[10px] bg-[white] z-[1] py-[20px] '>
            <div className='flex flex-col items-start pl-[20px]'>
                <p className='font-normal '>{title}</p>
                <p>
                    <small>₹</small>
                    <strong >{price}</strong>
                </p>
                <div className='flex'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img className='w-full max-h-[200px] object-contain mb-[25px] ' src={image} alt="" />
            <button onClick={addToBasket} className=' m-auto w-[10em] rounded-2xl bg-[#f0c14b] border border-solid p-[4px]'>Add to Cart</button>
        </div>
    )
}

export default Product
