import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [parts, setParts] = useState({});
    const [dQuantity, setDquantity] = useState('');
    const [iQuantity, setIquantity] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    const IncreaseQuantity = () => {

    }

    const [user] = useAuthState(auth);
    return (
        <div className='flex justify-center items-center mt-5 my-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={parts?.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2>This is purchase page</h2>
                    <p>{user?.displayName || ''}</p>
                    <p>{user?.email || ''}</p>
                    <h2 class="card-title">Name: {parts?.name}</h2>
                    <p>Description: {parts?.description}</p>
                    <p>Minimum Quantity: {parts?.minimumquantity}</p>
                    <p>Available Quantity: {parts?.availablequantity}</p>
                    <p>Price:{parts?.price}</p>
                    <div class="card-actions justify-center">
                        <p className='text-center'>Increase Quantity</p>

                        <input type="text" onChange={(e) => setIquantity(e.target.value)} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                        <button class="btn btn-outline btn-primary text-center">Increase Order Quantity</button>
                        <p className='mt-5 my-2 text-center'>Decrease Quantity</p>
                        <input type="text" onChange={(e) => setDquantity(e.target.value)} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

                        <button class="btn btn-outline btn-primary text-center">Decrease Order Quantity</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;