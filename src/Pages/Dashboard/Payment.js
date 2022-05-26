import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0kN0AmPT6tBrpd4HNH6yc40CaUiVQ5S51bpFqKTttxXlIFec4SWNPpDmxuTe58DIurkizfAjp2ILmeEBbtLyRh00UDykWaRk');



const Payment = () => {
    const { id } = useParams();
    const url = `https://mysterious-crag-63654.herokuapp.com/myOrder/${id}`;

    const { data: orders, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()))
    console.log(orders);
    const [user] = useAuthState(auth);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='font-bold text-xl text-cyan-600'>Hello, {user?.displayName || ''}</p>
                    <h2 class="card-title">{orders.price}</h2>
                    <p>Please Pay For Your ordered Product</p>
                    <p></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;