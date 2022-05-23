import React from 'react';

const Part = ({ part }) => {
    const { name, price, img, description, minimumquantity, availablequantity } = part;
    return (
        <div className="card sm:max-w-sm lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold">{name}</h2>
                <p className='text-center font-bold'>Description: {description}</p>
                <p className='text-center'>Minimum Order Quantity: {minimumquantity}</p>
                <p className='text-center'>Available Quantity: {availablequantity}</p>
                <p className='text-center'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Part;