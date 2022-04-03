import React from 'react';
import banner from '../../images/mouse.jpg'
import './Home.css'
import Review from './Review/Review';
const Home = () => {
    return (
        <div>
            <div className='container-body d-flex my-5 mx-auto justify-content-center align-items-center flex-sm-row flex-md-row'>
                <div className='p-5'>
                    <h2>Razer DeathAdder V2 Pro</h2>
                    <h4 className='text-success'>Best Wireless Gaming Mouse</h4>
                    <ul className='details'>
                        <li>20K DPI Optical Sensor</li>
                        <li>3X Faster Than Mechanical Optical Switch</li>
                        <li>Chroma RGB Lighting</li>
                        <li>70 Hr Battery Life</li>
                        <li>8 Programmable Buttons</li>
                        <li>Classic Black</li>
                    </ul>
                    <button className='btn btn-success rounded px-3 mt-5'><span className='text-light fw-bold'>Live demo</span></button>
                </div>
                <div className='img-container'>
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </div>
            <div>
                <h3>Customer Review</h3>
                <hr className='w-50 mx-auto'/>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;