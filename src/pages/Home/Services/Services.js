import React from 'react';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [myServices, setServices] = useService();
    return (
        <div>

            <div className='category-title'>
                <h1>Choose Your Flavour</h1>
            </div>
            <div className='services-card'>
                {
                    myServices.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;