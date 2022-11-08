import { nanoid } from 'nanoid'
import React from 'react'
import Product from './Product'
import appleImage from './Images/61jLiCovxVL._SL1500_.png'
import chipImage from './Images/61eime5jNKL._SL1280_.jpg'
import bookImage from './Images/81s6DUyQCZL.png'
import cameraImage from './Images/914hFeTU2-L._SL1500_.png'
import noodleImage from './Images/91pAhAWrXkL._SL1500_.png'
import laptopImage from './Images/61bwqXfWiaL._SL1500_.png'

const Home = () => {
    return (
        <div className='max-w-screen-2xl mx-auto mt-[3.4em] '>
            <img className='w-full gradient-mask-b-0 z-[-1] mb-[-150px]' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />


            <div className='flex z-10 mx-[5px]' >
                <Product
                    id={nanoid()}
                    title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
                    price={38559}
                    rating={5}
                    image={cameraImage}
                />
                <Product
                    id={nanoid()}
                    title="JOYTOSS One Pcs Chips Challenge NEW (Pack of 1)"
                    price={199}
                    rating={5}
                    image={chipImage}
                />
            </div>

            <div className='flex z-10 mx-[5px]'>
                <Product
                    id={nanoid()}
                    title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now Paperback"
                    price={257}
                    rating={5}
                    image={bookImage}
                />
                <Product
                    id={nanoid()}
                    title="Apple iPhone 13 Pro (128GB) - Sierra Blue"
                    price={117900}
                    rating={5}
                    image={appleImage}
                />
                <Product
                    id={nanoid()}
                    title="Samyang 3Xspicy Hot Chicken Ramen (140gx5) Pouch, 700 g"
                    price={540}
                    rating={5}
                    image={noodleImage}
                />
            </div>
            <div>
                <Product
                    id={nanoid()}
                    title="ASUS ROG Strix G17, 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 Ti 4GB Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11//Gray/2.4 kg), G713IE-HX040W"
                    price={93416}
                    rating={5}
                    image={laptopImage}
                />
            </div>
        </div>
    )
}

export default Home
