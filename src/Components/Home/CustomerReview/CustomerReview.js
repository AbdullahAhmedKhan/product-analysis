import React from 'react';
import './CustomerReview';
import './CustomReview.css'
const CustomerReview = (props) => {
    const { name, img, review, ratings } = props.review;
    return (

        <div className="col">
            <div className="card card-shadow h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: <span className='text-warning'>{name}</span></h5>
                    <p className="card-text">{review}</p>
                    <small>Ratings: {ratings}</small>
                </div>
            </div>
        </div>

    );
};

export default CustomerReview;