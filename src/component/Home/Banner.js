import React from 'react'
import { bannerImgOne, saleImgOne, saleImgTwo, saleImgThree } from '../../images'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Banner() {
    return (
        <>
            <div className='banner'>
                <Link to="/offer"><img src={bannerImgOne} alt='Banner 1' /></Link>
            </div>
            <div className='banner-details'>
                <p data-aos="fade-right" data-aos-duration="1500">Two Years Warranty</p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">Free Shopping</p>
                <p data-aos="fade-left" data-aos-duration="1500">Return Policy In 7 Days</p>
            </div>
            <div className='sale-banner'>

                <Link to="/Shopping"><img className='sale-banner-one' src={saleImgOne} alt='Sale banner 1' /></Link>
                <div className='sale-banners-ryt'>
                    <Link to="/Shopping"><img className='sale-banner-other' src={saleImgTwo} alt='Sale banner 2' /></Link>
                    <Link to="/Shopping"><img className='sale-banner-other' src={saleImgThree} alt='Sale banner 3' /></Link>
                </div>
            </div>
        </>
    )
}

export default Banner