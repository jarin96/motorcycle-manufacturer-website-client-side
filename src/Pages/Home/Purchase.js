import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [parts, setParts] = useState({});
    const [dQuantity, setDquantity] = useState(0);
    const [iQuantity, setIquantity] = useState(0);
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState(0);



    useEffect(() => {
        fetch(`https://mysterious-crag-63654.herokuapp.com/parts/${id}`)
            .then(res => res.json())
            .then(data => {
                setParts(data)
                console.log(data);
            });
    }, [id])

    const increaseQuantity = (id) => {
        if (iQuantity > parts?.availablequantity) {
            alert('Available Quantity can not be extended');
            return;
        }
        else {
            const newData = {
                _id: parts?._id,
                name: parts?.name,
                availablequantity: parts?.availablequantity + iQuantity,
                description: parts?.description,
                img: parts?.img,
                minimumquantity: parts?.minimumquantity,
                price: parts?.price,

            }
            // console.log(newData);
            fetch(`https://mysterious-crag-63654.herokuapp.com/updateQuantity/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }


    const decreaseQuantity = (id) => {
        if (dQuantity > parts?.minimumquantity) {
            alert('Minimum Quantity can not be Less than that');
            return;
        }
        else {
            const newData = {
                _id: parts?._id,
                name: parts?.name,
                availablequantity: parts?.availablequantity,
                description: parts?.description,
                img: parts?.img,
                minimumquantity: parts?.minimumquantity - dQuantity,
                price: parts?.price,

            }
            // console.log(newData);
            fetch(`https://mysterious-crag-63654.herokuapp.com/updateQuantity/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    const [user] = useAuthState(auth);
    console.log(user);
    // Place order
    const orderPlace = (e) => {
        const orderInfo = {
            userName: user?.displayName,
            email: user?.email,
            address: address,
            phoneNumber: number,
            productId: parts?._id,
            productName: parts?.name,
            productDescription: parts?.description,
            productPrice: parts?.price,

        }
        fetch('https://mysterious-crag-63654.herokuapp.com/confirmOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order Placed Successfully');
                    e.target.reset();
                }
            })
    }


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

                        <input type="text" onBlur={(e) => setIquantity(parseInt(e.target.value))} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                        <button onClick={() => increaseQuantity(parts?._id)} class="btn btn-outline btn-primary text-center">Increase Order Quantity</button>
                        <p className='mt-5 my-2 text-center'>Decrease Quantity</p>
                        <input type="text" onBlur={(e) => setDquantity(parseInt(e.target.value))} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

                        <button onClick={() => decreaseQuantity(parts?._id)} class="btn btn-outline btn-primary text-center">Decrease Order Quantity</button>

                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <input disabled type="text" value={user?.displayName || ''} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <input disabled value={user?.email || ''} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" class="input input-bordered input-primary w-full max-w-xs" />
                    <input onBlur={(e) => setNumber(e.target.value)} type="number" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                    <button onClick={() => orderPlace()} class="btn btn-active btn-primary">Place Order</button>

                </div>
            </div>
        </div>
    );
};

export default Purchase;