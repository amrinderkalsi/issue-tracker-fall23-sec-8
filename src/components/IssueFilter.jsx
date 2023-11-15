import { Component } from 'react';

class IssueFilter extends Component {
    render() {
        return(
            <div>
                Status
                {' '}
                <select>
                    <option value=""></option>
                    <option value="Open">Open</option>
                    <option value="Assigned">Assigned</option>
                    <option value="New">New</option>
                </select>
                {' '}
                Effort
                {' '}
                <input type="text" />
                {' '}
                <button>Apply</button>
                {' '}
                <button>Reset</button>
            </div>
        );
    }
}

export default IssueFilter;