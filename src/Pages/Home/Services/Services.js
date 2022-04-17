import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    
    const[services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='service'>
            <h1 className='title'>Our Services</h1>
            <div className='service-container'>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
           
        </div>
    );
};

export default Services;