import React from 'react'
import axios from 'axios'

class ResourceList extends React.Component {

    state = {
        resources: []
    }

    async componentDidMount() {
        const paylod = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({ resources: paylod.data });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const paylod = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: paylod.data });
        }
    }

    render() {
        return (
            <div>{this.state.resources.length}</div>
        )
    }
}

export default ResourceList;