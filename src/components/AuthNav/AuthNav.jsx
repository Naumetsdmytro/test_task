import { NavLink } from 'react-router-dom';

import style from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/" className={style.navLink}>
        Home
      </NavLink>
      <NavLink to="/tweets" className={style.navLink}>
        Tweets
      </NavLink>
    </nav>
  );
};
