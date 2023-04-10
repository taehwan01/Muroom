import { useAuth } from '../../../context/auth';
import Tabs from '../../../shared/Tabs/Tabs';
import './Dashboard.scss';

const Dashboard = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div className='dashboard'>
      <h1>어서오세요, {auth.user.username}님</h1>
      <Tabs />
      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
    </div>
  );
};

export default Dashboard;
