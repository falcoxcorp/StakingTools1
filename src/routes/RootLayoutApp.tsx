import { memo, Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Outlet } from 'react-router-dom';
import { Loader } from '../components/Loading';

const RootLayoutApp = () => {

  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export default memo(RootLayoutApp);
