import {Outlet} from 'react-router-dom';
import IssueList from "../../components/IssueList";

function Home() {
  return (
    <div className="App">
      <Outlet />
      <IssueList />
    </div>
  );
}

export default Home;
