import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'


const Subtotal = () => {
    const [{cart}, dispatch] = useStateValue()


    return (
        <div className='flex flex-col justify-between w-[300px] h-[150 px] p-[20px] bg-[#f3f3f3] border border-solid border-[#DDDDDD] rounded' >
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items) :
                            <strong>
                                {value}
                            </strong>
                        </p>
                        <small className="flex item-center">
                            <input className='mr-[5px]' type="checkbox" />
                            This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button className='bg-[#f0c14b] rounded-sm w-full h-[30px] border border-solid border-[#000000] mt-[10px] text-[#111]'>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
