import React from 'react';
import './CustomerReview';
import './CustomReview.css'
const CustomerReview = (props) => {
    const { name, img, review, ratings } = props.review;
    return (

        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <p class="card-text">{review}</p>
                    <small>Ratings: {ratings}</small>
                </div>
            </div>
        </div>

    );
};

export default CustomerReview;