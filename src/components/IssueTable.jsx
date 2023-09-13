import { Component } from 'react';

class IssueTable extends Component {
    render() {
    const { issues } = this.props;
    console.log(issues); 
    

        return(
            <div>
                <table className="bordered-table">
                    <thead>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        );
    }
}

export default IssueTable;