import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [education, setEducation] = useState('');
    const [location, setLocation] = useState('');
    const [number, setNumber] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const addInformation = (e) => {
        const info = {
            name: user?.displayName,
            email: user?.email,
            education: education,
            location: location,
            number: number,
            linkedin: linkedIn
        }
        fetch('https://mysterious-crag-63654.herokuapp.com/addInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Info Added Successfully');
                    e.target.reset();
                }
            })
    }
    return (
        <div>
            <h2>This is my Profile</h2>
            <p>{user?.displayName || ''}</p>
            <p>{user?.email || ''}</p>
            <form className='text-center pb-4 mt-4 bg-secondary' onSubmit={addInformation} >

                <br />
                <input type='text' className='w-75 rounded-3   p-2 my-3' placeholder='Education' />
                <br />
                <input type='text' className='w-75 rounded-3   p-2 my-3' placeholder='Location' />
                <br />
                <input type='text' className='w-75 rounded-3   p-2 my-3' placeholder='Phone number' />
                <br />
                <input type='text' className='w-75 rounded-3   p-2 my-3' placeholder='LinkedIn profile link' />
                <br />

                <button className='btn btn-primary px-3 py-2' type='submit'>Post</button>

            </form>
        </div>
    );
};

export default MyProfile;