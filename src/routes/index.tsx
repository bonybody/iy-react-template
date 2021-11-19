import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Top } from '../components/pages/top';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Top />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
