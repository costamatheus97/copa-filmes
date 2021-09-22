import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Result from '../pages/Result';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/results" component={Result} />
  </Switch>
);

export default Routes;
