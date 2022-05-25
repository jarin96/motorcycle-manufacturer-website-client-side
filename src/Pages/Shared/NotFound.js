import React from 'react';
import Notfound from '../../images/Banner/20945761.jpg';

const NotFound = () => {
    return (
        <div>
            <div>
                <h2 className='text-primary text-center'>Page not Found</h2>
                <img className='w-50 h-50 bg-cover' src={Notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;