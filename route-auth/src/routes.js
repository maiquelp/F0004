import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {isAuthenticated} from './auth';

function PrivateRoute({component: Component, ...rest}){
  return (
    <Route
      {...rest}
      render={props => isAuthenticated() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname: '/', state: {from: props.location}}} />)

      }
    />
  );
}

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <h1>Hello!</h1>} />
        <PrivateRoute path='/app' component={() => <h1>Logado!</h1>} />
      </Switch>
    </BrowserRouter>
  );
}  
