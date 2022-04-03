import React from 'react';
import banner from '../../images/mouse.jpg'
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='d-flex my-5 mx-auto justify-content-center align-items-center'>
                <div className='p-5'>
                    <h2>Razer DeathAdder V2 Pro</h2>
                    <h4 className='text-success'>Best Wireless Gaming Mouse</h4>
                    <button className='btn btn-success rounded px-3 mt-5'><span className='text-light fw-bold'>Live demo</span></button>
                </div>
                <div className='img-container'>
                    <img src={banner} alt="" />
                </div>
            </div>
            <div>
                <h3>Customer Review</h3>
                <hr className='w-50'/>
            </div>
        </div>
    );
};

export default Home;