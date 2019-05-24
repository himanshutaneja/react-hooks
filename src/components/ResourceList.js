import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {

    const [resources, setResources] = useState([]);

    const fetchResources = async () => {
        const paylod = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(paylod.data);
    }

    useEffect(() => {
        fetchResources()
    }, [resource])

    return (
        <div>{resources.length}</div>
    )
}

export default ResourceList;