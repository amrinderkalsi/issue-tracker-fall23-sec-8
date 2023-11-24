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

    handleSelectChange = (e) => {
        this.setState({ status: e.target.value })
    }

    handleEffortChange = (e) => {
        const effortString = e.target.value;
        if (effortString.match(/^\d*$/)) {
            this.setState({ effort: e.target.value })
        }
    }

    handleApplyClick = () => {
        this.props.filterIssue({status: this.state.status, effort: this.state.effort})
    }

    handleResetClick = () => {
        this.props.filterIssue({status: '', effort: ''})
        this.setState({ status: '', effort: ''});
    }

    render() {
        return (
            <div>
                Status
                {' '}
                <select value={this.state.status} onChange={this.handleSelectChange} >
                    <option value="" />
                    <option value="Open">Open</option>
                    <option value="Assigned">Assigned</option>
                    <option value="New">New</option>
                </select>
                {' '}
                Effort
                <input type="text" value={this.state.effort} onChange={this.handleEffortChange}/>
                {' '}
                <button onClick={this.handleApplyClick} disabled={!(this.state.status || this.state.effort)}>Apply</button>
                {' '}
                <button onClick={this.handleResetClick} disabled={!(this.state.status || this.state.effort)}>Reset</button>
            </div>
        );
    }
}

export default IssueFilter;