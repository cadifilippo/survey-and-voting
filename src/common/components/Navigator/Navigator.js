import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/auth';

const Navigator = () => {
  const { logout } = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : 'black'
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : 'black'
              };
            }}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
