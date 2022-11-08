import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'
import { NumericFormat } from 'react-number-format';


function Subtotal() {
    const [{ cart }, dispatch] = useStateValue()


    return (
        <div className='flex flex-col justify-between gap-2 w-[300px] h-[450 px] p-[20px] bg-[white] border border-solid border-[#DDDDDD] rounded ml-2' >
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items) :
                            <strong className='text-black font-bold'>
                                {value}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={"₹"}
            />
            <button className='bg-[#f0c14b] rounded-md w-full h-[30px] mt-[10px] text-[#111]'>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal



{/* <CurrencyFormat
renderText={(value) => (
    <>
        <p className='text-xs'> <span className='text-[#067D62]'>Your order is eligible for FREE Delivery.</span> <br />  Select this option at checkout. <span className='text-[#067D62]'>Details</span> </p>
        <p className='text-xl'>
            Subtotal ({cart.length} items) :
            <strong className='font-bold'>
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
prefix={"₹"}
/> */}