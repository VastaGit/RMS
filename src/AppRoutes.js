import Admin from "./components/Admin";
import Home from "./components/Home";
import ListApplications from "./components/ListApplications";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/applications',
    element: <ListApplications />
  },
];

export default AppRoutes;
