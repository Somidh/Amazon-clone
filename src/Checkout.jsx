import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {

    const [{ cart }] = useStateValue()

    return (
        <div className='flex p-[20px] bg-[white] '>
            <div >

                <img className='w-full mb-[10px]' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                {cart?.length === 0 ? (
                    <div>
                        <h2 className='mr-[10px] p-[10px] border-b-[1px] border-solid border-[lightgray]'>Your shopping cart is empty</h2>
                        <p>Check your Saved for later items below or <span>continue shopping</span>.</p>
                    </div>
                ) : (
                    <div>
                        <h2>Your shopping cart</h2>

                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {cart.length > 0 && (
                <div>
                    <Subtotal />
                </div>
            )}
        </div>

    )

}

export default Checkout
