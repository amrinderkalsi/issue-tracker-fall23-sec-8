import { Component } from 'react';
import IssueRow from './IssueRow';

class IssueTable extends Component {
    render() {
    const { issues } = this.props;
    console.log(issues); 

    const issuesRow = issues.map(issue => {
        return(
            <IssueRow issue={issue} key={issue.id}/>
        );
    });

        return(
            <div>
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Owner</th>
                            <th>Created</th>
                            <th>Effort</th>
                            <th>Completion Date</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issuesRow}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueTable;