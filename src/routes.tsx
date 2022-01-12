import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartProvider } from './hook/useCart';
import Checkout from './pages/Checkout';
import ComicPage from './pages/Comic';
import Home from './pages/Home';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Checkout} />
          <Route path="/comic/:id" component={ComicPage} />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default Routes;
