import Aos from 'aos'
import React, { useEffect } from 'react'

function Banner() {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <section data-aos="fade-down" data-aos-duration='1000' className='flex flex-col md:flex-row justify-evenly items-center h-screen '>
            <div className="w-full  md:w-1/2  items-center justify-center text-center px-1 flex flex-col gap-4 md:gap-8" >
                <h1 className='text-3xl text-wrap lg:text-6xl font-bold'>Explore Ayurveda Remedies, Your Wellness Journey Begins Here!</h1>
                <p className='md:text-[22px] text-wrap px-3'>Discover Ayurveda solutions that support your health anytime, anywhere, seamlessly and naturally.</p>
                <button className='flex items-center bg-[#FB8E0B] text-white rounded-md py-2 px-4'>Begin Your Wellness Journey Now <span className='text-[25px] text-center'>→</span></button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center ">
                {/* <div className="border border-orange-500 p-5 rounded-full" data-aos="fade-down" data-aos-duration='1000'> */}
                <img className='h-[300px] md:h-[500px]' src='images/Bannerimage.webp' alt="bannerimage" />
                {/* </div> */}
            </div>
        </section>


    )
}

export default Banner
