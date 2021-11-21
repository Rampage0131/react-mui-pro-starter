import { Route, Switch } from 'react-router-dom';
import { Welcome, About, Tools, User, NotFound } from '../views';
import { PrivateLayout } from './Layout';

/**
 * List of routes available only for authenticated users
 * Also renders the "Private Layout" composition
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tools">
          <Tools />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </PrivateLayout>
  );
};

export default PrivateRoutes;
