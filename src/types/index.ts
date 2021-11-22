import { RouteObject } from 'react-router-dom';

export interface AppRouteObject extends RouteObject {
  element: JSX.Element;
}
