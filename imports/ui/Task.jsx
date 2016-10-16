import React, { Component, PropTypes } from 'react';

class Task extends Component {
    render() {
        return (
            <li>{this.props.task.text}</li>
        );
    }
}

Task.protoTypes = {
    task: PropTypes.object.isRequired,
}

export default Task;