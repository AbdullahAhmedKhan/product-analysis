import React from 'react';
import banner from '../../../images/mouse.jpg';
import './About.css';
const About = () => {
    return (
        <div className='d-lg-flex container justify-content-center align-items-center bg-light rounded'>
            <div className='w-75 mx-auto product-img'>
                <img className="img-fluid rounded" src={banner} alt="" />
            </div>
            <div className='p-5'>
                <h2>Razer DeathAdder V2 Pro</h2>
                <h5 className='text-success'>Best Wireless Gaming Mouse</h5>
                <ul className='product-details'>
                    <li>20K DPI Optical Sensor</li>
                    <li>3X Faster Than Mechanical Optical Switch</li>
                    <li>Chroma RGB Lighting</li>
                    <li>70 Hr Battery Life</li>
                    <li>8 Programmable Buttons</li>
                    <li>Classic Black</li>
                </ul>
            </div>

        </div>
    );
};

export default About;