import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, email, refetch }) => {
    const { name, img, availablequantity, price } = product;

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://mysterious-crag-63654.herokuapp.com/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(data);
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded-xl">
                    <img src={img} alt='name' />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availablequantity}</td>
            <td>${price}</td>
            <td><button onClick={() => handleDelete(product._id)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default ProductRow;