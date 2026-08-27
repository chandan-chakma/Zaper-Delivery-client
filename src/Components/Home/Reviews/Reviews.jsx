import React from 'react';
import { use } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard.jsx';
import review from '../../../assets/customer-top.png'

const Reviews = ({ reviewsPromiss }) => {
    const reviews = use(reviewsPromiss);
    console.log(reviews)
    return (
        <div className='my-15'>
            <div>
                <img className='w-[244px] mx-auto' src={review} alt="" />
                <h1 className='text-secondary text-2xl font-bold text-center mt-5'>What our customers are sayings</h1>
                <p className='text-black text-center my-5'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br></br> pain, and strengthen your body with ease!</p>

            </div>
            
            <Swiper
                effect='coverflow'
                spaceBetween= {100}
                centeredSlides={true}
                autoplay={{
                    delay:2000,
                }}
                // loop={true}
                slidesPerView={3}
                coverflowEffect={{
                        rotate: 0,
                        scale:0.8,
                        stretch: "50%",
                        depth: 200,
                        modifier:1,
                        slideShadows:true    
                }}
                breakpoints={{
                    // Mobile
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        coverflowEffect: {
                            rotate: 0,
                            scale: 0.85,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },

                    // Tablet
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        coverflowEffect: {
                            rotate: 0,
                            scale: 0.85,
                            stretch: 20,
                            depth: 150,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },

                    // Desktop
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        coverflowEffect: {
                            rotate: 0,
                            scale: 0.8,
                            stretch: 50,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },
                }}
                modules={[EffectCoverflow,Autoplay]}>
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
              }
            </Swiper>

            <div className='my-10'>
                <h1 className='text-center font-bold text-2xl text-secondary'>Frequently Asked Question(FAQ)</h1>
                <p className='text-center my-5 text-black'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce<br></br>
                    pain, and strengthen your body with ease!</p>
                
                <div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold text-secondary font-semibold">How does this posture corrector work?</div>
                        <div className="collapse-content text-sm text-black font-semibold">Click A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-secondary font-semibold">Is it suitable for all ages and body types?</div>
                        <div className="collapse-content text-sm text-black font-semibold">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-secondary font-semibold">Does it really help with back pain and posture improvement?</div>
                        <div className="collapse-content text-sm text-black font-semibold">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-secondary font-semibold">Does it have smart features like vibration alerts?</div>
                        <div className="collapse-content text-sm text-black font-semibold">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-secondary font-semibold">How will I be notified when the product is back in stock?</div>
                        <div className="collapse-content text-sm text-black font-semibold">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;
