import { Component } from 'react';

class IssueFilter extends Component {

    initialState = {
        status: '',
        effort: ''
    }

    constructor() {
        super();
        this.state = {
            ...this.initialState
        }
    }

    handleStatusChange = (e) => {
        this.setState({status: e.target.value})
    }

    handleEffortChange = (e) => {
        const effortString = e.target.value;
        if (effortString.match(/^\d*$/)) {
            this.setState({effort: e.target.value})
        }
    }

    render() {
        return(
            <div>
                Status
                {' '}
                <select value={this.state.status} onChange={this.handleStatusChange}>
                    <option value=""></option>
                    <option value="Open">Open</option>
                    <option value="Assigned">Assigned</option>
                    <option value="New">New</option>
                </select>
                {' '}
                Effort
                {' '}
                <input type="text"  value={this.state.effort} onChange={this.handleEffortChange}/>
                {' '}
                <button>Apply</button>
                {' '}
                <button>Reset</button>
            </div>
        );
    }
}

export default IssueFilter;