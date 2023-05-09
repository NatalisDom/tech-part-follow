import css from './Layout.module.css';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          {' '}
          <NavLink to="/">Home</NavLink>
          <NavLink to="tweets">Tweets</NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
