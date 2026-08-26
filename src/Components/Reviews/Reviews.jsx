import React from 'react';
import { use } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard.jsx';
import review from '../../assets/customer-top.png'

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
                    delay:800,
                }}
                // loop={true}
                slidesPerView={3}
                coverflowEffect={{
                        rotate: 0,
                        scale:1.10,
                        stretch: 0,
                        depth: 100,
                        modifier:1,
                        slideShadows:false    
                }}
                modules={[EffectCoverflow,Autoplay]}
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
              }
               
                    </Swiper>

            </div>
    );
};

export default Reviews;
