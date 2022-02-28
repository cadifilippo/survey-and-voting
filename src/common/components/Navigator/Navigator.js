import { NavLink } from 'react-router-dom';

const Navigator = () => {
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
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : 'black'
              };
            }}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
