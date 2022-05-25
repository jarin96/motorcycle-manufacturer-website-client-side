import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProfile = () => {
    const id = useParams()
    const [info, setInfo] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/updateProfile/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInfo(data)
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default UpdateProfile;