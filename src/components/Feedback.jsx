import Aos from 'aos'
import React, { useEffect } from 'react'

function Feedback() {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='space-y-2 md:px-8 mt-5 justify-center items-center grid grid-cols-1  gap-3'>
            <section data-aos="fade-down" data-aos-duration='1000' className=' space-y-2 md:px-5 mt-5 justify-center items-center grid grid-cols-1  gap-3'>
                <div className='flex flex-col text-center bg-[#FB8E0B] p-5 items-center'>
                    <h1 className='text-2xl text-wrap sm:text-4xl text-center font-bold text-white'>What Our Clients Say About Ayurveda 🌿</h1>
                    <div className='flex flex-col md:flex-row mt-5 gap-5'>
                        <div className="w-full md:w-1/2">
                            <div className='border bg-white p-3 rounded'>
                                <h1 className='text-[#FB8E0B] font-bold'>“Transformative Wellness Journey”</h1>
                                <p className='font-semibold text-wrap p-3'>My journey with Ayurveda has been truly transformative. The personalized remedies and guidance provided helped me achieve a balance in my life I didn’t know was possible. Highly recommend this for anyone seeking natural solutions.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 border bg-white p-3 rounded">
                            <div>
                                <h1 className='text-[#FB8E0B] font-bold'>“Authentic and Holistic Care”</h1>
                                <p className='font-semibold text-wrap p-3'>The Ayurvedic experts have brought a sense of calm and healing to my daily routine. Their holistic approach to wellness has improved my energy levels and overall health. Truly a blessing to find such authentic care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-down" data-aos-duration='1000' className='flex justify-center flex-col items-center gap-4 mb-10'>
                <h1 className='text-3xl text-wrap lg:text-5xl font-bold text-center'>
                    Ready to Embrace Natural Healing?
                    Start your Ayurvedic Journey Today
                    and Transform Your Wellness</h1>

                <button className='flex items-center bg-[#FB8E0B] text-white rounded-md py-2 px-4'>
                    Begin Your Journey <span className='text-[25px] text-center'>→</span>
                </button>
            </section>

        </div>

    )
}

export default Feedback
