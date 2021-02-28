import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products'
import Photos from '../Photos/Photos'
import GlobalStyle from '../../theme/GlobalStyle'
import ProductDetails from '../Products/ProductDetails'
import Cart from '../Cart/Cart'
import Order from '../Order/Order'
import OrderDone from '../OrderDone/OrderDone'
import ScrollToTop from '../../tools/scrollToTop'

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/photos" component={Photos} />
      <Route path="/cart" component={Cart} />
      <Route path="/order" component={Order} />
      <Route path="/orderdone" component={OrderDone} />
    </Switch>
  </BrowserRouter>
);

export default Root;
