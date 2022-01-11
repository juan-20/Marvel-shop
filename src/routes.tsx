import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import ComicPage from './pages/Comic';
import Home from './pages/Home';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Checkout} />
        <Route path="/comic/:id" component={ComicPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
