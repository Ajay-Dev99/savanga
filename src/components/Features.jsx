import React from 'react'
import { IoIosLeaf, IoIosClock } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";

function Features() {
    return (
        <div className=' flex flex-col justify-center items-center gap-5'>
            <section className='flex flex-col space-y-6' data-aos="fade-down" data-aos-duration='1000'>
                <h1 className='text-2xl text-wrap sm:text-4xl text-center font-bold'>Features for a Healthier Lifestyle</h1>
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 py-5 px-5">
                    <div className="w-full md:w-1/3 px-5 flex flex-col lg:flex-row justify-center items-center space-x-3 text-center space-y-2">
                        <div className='flex'>
                            <div className='bg-[#FFC5A5] rounded-full p-2'>
                                <IoIosLeaf className='text-3xl text-[#F23936]' />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-lg font-bold'>Herbal Remedies</h2>
                            <p className='text-sm text-wrap'>Explore a range of natural remedies to support your well-being effectively and easily.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-5 flex flex-col lg:flex-row justify-center items-center space-x-3 text-center space-y-2">
                        <div className='flex'>
                            <div className='bg-[#DBEDDC] rounded-full p-2'>
                                <IoIosClock className='text-3xl text-[#4DA44E]' />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-lg font-bold'>Time-Saving Solutions</h2>
                            <p className='text-sm text-wrap'>Access Ayurveda-based practices that fit seamlessly into your busy schedule.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-5 flex flex-col lg:flex-row justify-center items-center space-x-3 text-center space-y-2">
                        <div className='flex'>
                            <div className='bg-[#FDD6A7] rounded-full p-2'>
                                <AiOutlineSafety className='text-3xl text-[#FB8E0B]' />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h2 className='text-lg font-bold'>Safe & Personalized Care</h2>
                            <p className='text-sm text-wrap'>Enjoy a secure platform tailored to provide you with personalized Ayurvedic insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-down" data-aos-duration='1000' className='space-y-2 md:px-8 mt-5 justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className="flex justify-center p-0 md:p-5">
                    <img src="/images/featureImage.webp " alt="" className='h-auto md:h-[400px] w-full object-cover rounded-none md:rounded-lg' />
                </div>
                <div className="px-1 lg:px-8 flex flex-col justify-center items-center">
                    <h2 className='text-2xl text-wrap text-center font-bold'>Embrace Wellness with Ayurvedic Insights</h2>
                    <p className='text-center text-wrap'>Discover ancient Ayurvedic practices designed to rejuvenate your mind and body. Experience the harmony of natural remedies tailored for modern living.</p>
                </div>
            </section>



        </div>

    )
}

export default Features
