import './home.scss';
import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/feature/Featured';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured />
        </div>
    )
}

export default Home
