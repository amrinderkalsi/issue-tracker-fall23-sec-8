import { Component } from 'react';
import IssueFilter from './IssueFilter';
import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';

class IssueList extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Issue Tracker',
      issues: []
    };
  }

  componentDidMount(){
    // fetch('/api/issues')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
      
    //   data.records.forEach(issue => {
    //     issue.created = new Date(issue.created);
    //     if (issue.completionDate) {
    //       issue.completionDate = new Date(issue.completionDate);
    //     }
    //   });
    //   this.setState({issues: data.records})

    // }).catch(err => console.error(err));

    fetch('/graphql', { 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `query {
          issueList {
            id
            owner
            completionDate
            created
            effort
            status
            title
          }
        }`
      })
    }).then(res => res.json())
    .then(body => {
      console.log(body);
    });

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