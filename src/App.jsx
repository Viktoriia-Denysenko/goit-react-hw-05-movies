import { Outlet, NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';

export const App = () => {
  let activeStyle = {
    color: '#ff0000',
    textDecoration: 'none',
  };
  let activeStyleFirstChild = {
    color: '#ff0000',
    textDecoration: 'none',
    marginRight: '20px',
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav
        style={{
          display: 'flex',
          marginTop: '40px',
          marginLeft: '50px',
          fontWeight: 700,
          fontSize: '25px',
        }}
      >
        <NavLink
          style={({ isActive }) =>
            isActive
              ? activeStyleFirstChild
              : { textDecoration: 'none', marginRight: '20px' }
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: 'none' }
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
};
