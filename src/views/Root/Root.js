import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products'
import Photos from '../Photos/Photos'
import GlobalStyle from '../../theme/GlobalStyle'

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/photos" component={Photos} />
    </Switch>
  </BrowserRouter>
);

export default Root;
