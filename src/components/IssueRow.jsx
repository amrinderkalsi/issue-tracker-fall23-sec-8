const IssueRow = ({issue}) => {
    return (
        <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.owner}</td>
            <td>{issue.created != null ? issue.created.toDateString() : ''}</td>
            <td>{issue.effort}</td>
            <td>{issue.completionDate != null ? issue.completionDate.toDateString() : ''}</td>
            <td>{issue.title}</td>
        </tr>
    );
}

export default IssueRow;