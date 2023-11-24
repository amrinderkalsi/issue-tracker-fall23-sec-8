import { Component } from 'react';
import IssueFilter from './IssueFilter';
import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';
class IssueList extends Component {

  constructor() {
    super();
    this.state = {
      issues: [],
      name: 'Issue Tracker'
    }
  }

  loadData = () => {
    fetch('/graphql', { 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query {
            issueList {
              completionDate
              created
              effort
              id
              owner
              status
              title
            }
          }
        `
      })
    }).then(res => res.json())
    .then(body => {
      body.data.issueList.forEach(issue => {
      issue.created = new Date(issue.created);
      if (issue.completionDate) {
        issue.completionDate = new Date(issue.completionDate);
        }
      });
      this.setState({issues: body.data.issueList})
    });
  }

  componentDidMount() {
    this.loadData();
  }

  createIssue = (issue) => {
    // GraphQL Mutation for creating the issue
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation Mutation($issue: IssueInputs) {
          issueAdd(issue: $issue) {
            completionDate
            created
            effort
            id
            owner
            status
            title
          }
        }`,
        variables: { issue },
      }),
    })
      .then((res) => res.json())
      .then((body) => {
        body.data.issueAdd.created = new Date(body.data.issueAdd.created);
        if (body.data.issueAdd.completionDate) {
          body.data.issueAdd.completionDate = new Date(body.data.issueAdd.completionDate);
        }
        const { issues } = this.state;
        const newIssueArray = [...issues, body.data.issueAdd];
        this.setState({ issues: newIssueArray });
      });
  }

  filterIssue = (filter) => {
    if (filter.status || filter.effort) {
      const filteredIssue = this.state.issues.filter(issue => {
        return issue.status === filter.status || issue.effort === Number(filter.effort)
      });
      this.setState({issues: filteredIssue});
    } else  {
      this.loadData();
    }
  }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <IssueFilter filterIssue={this.filterIssue}/>
                <hr />
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd createIssue={this.createIssue}/>
            </div>
        );
    }
}

export default IssueList;