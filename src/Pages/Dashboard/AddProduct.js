import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://mysterious-crag-63654.herokuapp.com/parts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div class="">
            <div class="text-center">
                <div className='text-blue-500 mx-auto'>
                    <h1 class="text-5xl font-bold">ADD PRODUCT</h1>
                    <form className='flex flex-col mt-5 caret-pink-500' onSubmit={handleSubmit(onSubmit)}>
                        <input className='md-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <textarea className='md-2' placeholder='Description' {...register("description")} />
                        <input className='md-2' placeholder='Price' type="number" {...register("price")} />
                        <input className='md-2' placeholder='Available Quantity' type="text" {...register("availablequantity")} />
                        <input className='md-2' placeholder='Minimum Quantity' type="text" {...register("minimumquantity")} />
                        <input className='md-2' placeholder='Photo URL' type="text" {...register("img")} />
                        <input className='btn' type="submit" value='Add Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;