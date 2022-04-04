import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from '../hook/useReview';

const Review = () => {

        const [reviews] = useReview();
    return (
        <div className='container'>
            <h2 className='mb-3'>What our customers say!</h2>
            <hr className='w-100 mx-auto'/>
            <div className='row row-cols-1 row-cols-md-3 g-5 mt-3 mb-5'>
            {
                reviews.map(review => <CustomerReview key={review.id}
                review={review}></CustomerReview>)
            }
            </div>
        </div>
    );
};
export default Review;