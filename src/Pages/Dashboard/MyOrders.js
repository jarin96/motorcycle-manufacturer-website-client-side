import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://mysterious-crag-63654.herokuapp.com/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [user.email])

    const deleteProduct = (id) => {
        console.log(id);
        fetch(`https://mysterious-crag-63654.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Product Deleted Successfully')
                    const newProducts = orders.filter(productss => productss._id !== id)
                    setOrders(newProducts);
                }
            })

    }
    return (
        <div>

            <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td><button onClick={() => deleteProduct(order._id)} className='btn btn-danger' >Cancel</button></td>
                                <td>{(order.productPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}</td>
                                <td>{(order.productPrice && order.paid) && <span className='text-success'>Paid</span>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;