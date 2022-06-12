import { useEffect, useState } from "react";


const useService = () => {
    const [myServices, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [myServices, setServices];
}
export default useService;