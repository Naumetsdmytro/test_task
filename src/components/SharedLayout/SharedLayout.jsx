import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthNav } from 'components/AuthNav';

import style from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={style.header}>
        <AuthNav />
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
