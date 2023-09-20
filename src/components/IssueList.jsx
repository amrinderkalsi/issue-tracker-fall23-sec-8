import { Component } from 'react';
import IssueFilter from './IssueFilter';
import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';


const issues = [
  {
    id: 1, 
    status: 'Open', 
    owner: 'Ravan',
    created: new Date('2016-08-15'), 
    effort: 5, 
    completionDate: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, 
    status: 'Assigned', 
    owner: 'Eddie',
    created: new Date('2016-08-16'), 
    effort: 14, 
    completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel',
  },
];
class IssueList extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Issue Tracker',
      issues: []
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({issues: issues});
    }, 500);
  }

  createIssue = (issue) => {
    issue.id = this.state.issues.length + 1;
    const newIssueArray = [...this.state.issues, issue];
    this.setState({ issues: newIssueArray});
  }

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues}/>
                <hr />
                <IssueAdd createIssue={this.createIssue}/>
            </div>
        );
    }
}

export default IssueList;