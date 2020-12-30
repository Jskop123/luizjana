import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products'
import Photos from '../Photos/Photos'
import GlobalStyle from '../../theme/GlobalStyle'
import ProductDetails from '../Products/ProductDetails';

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/id" component={ProductDetails} />
      <Route path="/photos" component={Photos} />
    </Switch>
  </BrowserRouter>
);

export default Root;
