import React from 'react';
import Banner from '../../Components/Home/Banner/Banner.jsx';
import Service from '../../Components/Home/Service/Service.jsx';
import Reviews from '../../Components/Home/Reviews/Reviews.jsx';
import Support from '../../Components/Home/Support/Support.jsx';
const reviewsPromiss = fetch('/reviews.json')
.then(res=>res.json())
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Support></Support>
            <Reviews reviewsPromiss={reviewsPromiss}></Reviews>
        </div>
    );
};

export default Home;