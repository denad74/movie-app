import React from 'react';
import './styles.css';
import { Outlet } from 'react-router-dom';
// import Input from '../../components/sherad/Input';
import { NavLink } from 'react-router-dom';

const HomeLayout = (): JSX.Element => {
  return (
    <div className="container">
      <div className="home-header">
        <div className="home-header__buttons">
          <NavLink className={`link ${(isActive: boolean) => (isActive ? 'active' : '')}`} to="/">
            TV SHOWS
          </NavLink>
          <NavLink
            className={`link ${(isActive: boolean) => (isActive ? 'active' : '')}`}
            to="/movies"
          >
            MOVIES
          </NavLink>
        </div>
        {/* <Input placeholder="Search movie" type="search" /> */}
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
