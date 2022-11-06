import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <img className='w-full gradient-mask-b-0 z-[-1] mb-[-150px]' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />


            <div className='flex z-10 mx-[5px]' >
                <Product
                    id="1234"
                    title="Apple iPhone 13 Pro (128GB) - Gold"
                    price={11.96}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg"}
                />
                <Product
                    id="1234"
                    title="Apple iPhone 13 Pro (128GB) - Gold"
                    price={11.96}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg"}
                />
            </div>

            <div className='flex z-10 mx-[5px]'>
                <Product
                    id="1234"
                    title="Apple iPhone 13 Pro (128GB) - Gold"
                    price={11.96}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg"}
                />
                <Product
                    id="1234"
                    title="Apple iPhone 13 Pro (128GB) - Gold"
                    price={11.96}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg"}
                />
                <Product
                    id="1234"
                    title="Apple iPhone 13 Pro (128GB) - Gold"
                    price={11.96}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg"}
                />
            </div>
            <div>
                <Product
                    id="1234"
                    title="Apple iPhone 13 Pro (128GB) - Gold"
                    price={11.96}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg"}
                />
            </div>
        </div>
    )
}

export default Home
