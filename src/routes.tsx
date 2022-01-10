import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Checkout} />
    </Switch>
  );
};

export default Routes;
