import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
//css
import './styles.css';
//components
import { useTab } from '../../context/TabContext/useTab';
import Input from '../../components/sherad/Input';

const HomeLayout = (): JSX.Element => {
  const { selectedTab } = useTab();
  const placeholder = selectedTab === 'movie' ? 'Search movie' : 'Search Tv Shows';
  return (
    <div className="container">
      <div className="home-header">
        <div className="home-header__buttons">
          <NavLink className={`link ${(isActive: boolean) => (isActive ? 'active' : '')}`} to="/">
            Tv shows
          </NavLink>
          <NavLink
            className={`link ${(isActive: boolean) => (isActive ? 'active' : '')}`}
            to="/movies"
          >
            Movies
          </NavLink>
        </div>
        <Input placeholder={placeholder} type="search" />
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
