import React from 'react';
import Banner from '../../Components/Banner/Banner.jsx';
import Service from '../../Components/Service/Service.jsx';
import Reviews from '../../Components/Reviews/Reviews.jsx';
const reviewsPromiss = fetch('/reviews.json')
.then(res=>res.json())
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Reviews reviewsPromiss={reviewsPromiss}></Reviews>
        </div>
    );
};

export default Home;