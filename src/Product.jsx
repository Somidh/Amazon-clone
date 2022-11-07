import React from 'react'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, image, price, rating }) => {

    const [{ cart } , dispatch] = useStateValue()

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
        <div className='flex flex-col item-center justify-end w-full  max-h-[400px] min-w-[100px] m-[10px] bg-[white] z-[1] p-[20px]'>
            <div className='h-[100px] mb-[15px]'>
                <p>{title}</p>
                <p>
                    <small>$</small>
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
            <img className='w-full max-h-[250px] object-contain mb-[15px]'  src={image} alt="" />
            <button onClick={addToBasket} className=' bg-[#f0c14b] border border-solid border-black'>Add to Cart</button>
        </div>
    )
}

export default Product
