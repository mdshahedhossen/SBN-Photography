import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{img,name,price,description}=service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p className='name-title'>Name: {name}</p>
            <p>Price: Per day ${price}</p>
            <p><small>{description}</small></p>
            <button className='btn'>Booked {name}</button>
        </div>
    );
};

export default Service;