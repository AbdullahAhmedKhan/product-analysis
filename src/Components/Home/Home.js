import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../images/mouse.jpg'
import CustomerReview from './CustomerReview/CustomerReview';
import './Home.css'
import useReview from './hook/useReview';
const Home = () => {
    const [reviews] = useReview();
    const navigate = useNavigate();
    const ShowAllReview = () => {
        navigate(`/reviews`);
    }
    return (
        <div>
            <div className='container-body d-lg-flex my-5 mx-auto justify-content-center align-items-center flex-sm-row flex-md-row'>
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
                    <button className='btn btn-success rounded px-3 mt-3 '><span className='text-light fw-bold'>Live demo</span></button>
                </div>
                <div className='img-container'>
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </div>
            <div>
                <h3>Customers Review(3)</h3>
                <hr className='w-75 mx-auto' />
                <div className='row row-cols-1 row-cols-md-3 g-3 mt-3 mb-5 container mx-auto'>
                    {
                        reviews.slice(0, 3).map(review => <CustomerReview key={review.id}
                            review={review}></CustomerReview>)
                    }
                </div>
                <button onClick={ShowAllReview} className='btn mb-5 btn-outline-success rounded px-3'>Show all review</button>
            </div>
        </div >
    );
};

export default Home;