import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useTab } from '../../context/TabContext/useTab';
import Input from '../../components/shared/Input';
import './styles.css';

const HomeLayout = (): JSX.Element => {
  const { selectedTab } = useTab();
  const placeholder = selectedTab === 'movie' ? 'Search movie' : 'Search Tv Shows';

  return (
    <div className='container' data-testid='home-layout'>
      <div className='home-header'>
        <div className='home-header__buttons'>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'pending link' : isActive ? 'active link' : 'link'
            }
            to='/'
          >
            Tv shows
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'pending link' : isActive ? 'active link' : 'link'
            }
            to='/movies'
          >
            Movies
          </NavLink>
        </div>
        <Input placeholder={placeholder} type='search' />
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
