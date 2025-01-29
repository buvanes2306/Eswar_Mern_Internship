import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import User from './user';
import CreateUser from './createuser';
import UpdateUser from './updateuser';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/createuser">Create User</Link>
            </li>
            <li>
              <Link to="/updateuser">Update User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/updateuser" element={<UpdateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;