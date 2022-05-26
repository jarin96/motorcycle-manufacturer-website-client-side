import React, { useEffect } from 'react';
const Blogs = () => {
    return (
        <div className='container info-background my-5'>
            <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                <div className='col-lg-12 col-md-6 col-12'>
                    <div data-aos="fade-down">
                        <h3 className='text-3xl'>How will you improve the performance of a React Application?</h3>
                        <p>To improve the performance of a react application  we can Keep component in a state local where it is necessary.
                            We can Memorize React components to prevent unnecessary re-renders.We can also do
                            Code-splitting in React using dynamic import
                            Windowing or list virtualization.
                            To improve react application we can lazy load images in React.
                        </p>

                        <h3 className='text-3xl'> What are the different ways to manage a state in a React application?</h3>
                        <p>There are four main types of state to manage react application.They are: Local state, Global state, Server State, URL state. Local state is data that manage in one or another component.
                            Local state used in React by the useState hook.
                            Global state is data that manage across multiple components.
                            Global state is necessary when you want to update our app.Server state is simple, but can be difficult to manage all of our local and global UI state.
                        </p>

                        <h3 className='text-3xl'>How does prototypical inheritance work?</h3>
                        <p>Prototypical inheritance is a feature in javascript to add methods in objects.prototypical inheritance refers to the power to entry object features from another object. We use a JavaScript prototypical inferitance to add new properties to an existing object constructor. We can then basically tell our JS code to inherit features from a prototype. Prototypical inheritance allows to reuse the properties from one JavaScript object to another through a reference pointer function, this is how it works.</p>

                        <h3 className='text-3xl'>Why you do not set the state directly in React?</h3>
                        <p>If you update it directly, calling the setState then that may just replace the update you have done.
                            When you directly update the state, it does not change its state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            You will lose control of the state across all components.</p>
                        <h3 className='text-3xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                        <p>You can find products by filtering so that you can easily use it.Or you can create an array and search for the product from that array.</p>
                        <h3 className='text-3xl'> What is a unit test? Why should write unit tests?</h3>
                        <p>Unit testing is a type of software testing.Where individual units or software components are tested. Its purpose is to ensure that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.There are two type of unit testing one is Manual and another is Automated.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;