import React from 'react';
import './CustomerReview';
import './CustomReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const CustomerReview = (props) => {
    const { name, img, review, ratings } = props.review;
    return (

        <div className="col">
            <div className="card card-shadow h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: <span className='text-warning'>{name}</span></h5>
                    <p className="card-text">{review}
                    </p>
                    <small>Ratings:{`  `}
                        {
                            ratings === 5 ? <span>  <FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon><FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon></span> : ''

                        }
                        {
                            ratings === 4 ? <span><FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon></span> : ''
                        }
                        {
                            ratings === 3 ? <span><FontAwesomeIcon className="text-warning" icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon></span> : ''
                        }

                    </small>
                </div>
            </div>
        </div>

    );
};

export default CustomerReview;