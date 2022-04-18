import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id,img,name,price,description}=service
    const navigate=useNavigate()
    const navigateServiceDetails=(id)=>{
        navigate(`/service/${id}`)

    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <p className='name-title'>{name}</p>
            <p className='price'>Price: Per day ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateServiceDetails(id)} className='btn'>Booked {name}</button>
        </div>
    );
};

export default Service;