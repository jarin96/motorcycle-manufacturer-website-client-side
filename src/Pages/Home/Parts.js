import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div>
            <h2 className='text-center font-bold text-4xl mt-6'>PARTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-5 mt-2 px-12'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;