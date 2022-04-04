import React from 'react';
import notfound from '../../../images/notfound.png';
const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={notfound} alt="" />
            <h3>404 Not Found</h3>
        </div>
    );
};

export default NotFound;