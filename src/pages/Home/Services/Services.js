import React from 'react';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const [myServices, setServices] = useService();
    return (
        myServices.map(service => <Service
            key={service.id}
            service={service}
        ></Service>)
    );
};

export default Services;