import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import IndexRoute from './components/donuts/IndexRoute';
import NewRoute from './components/donuts/NewRoute';
import ShowRoute from './components/donuts/ShowRoute';
import EditRoute from './components/donuts/EditRoute';
import Home from './components/common/Home';

import 'bulma';
import './assets/scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <main>
          <Navbar />
          <section className="section">
            <Switch>
              <Route path="/donuts/:id/edit" component={EditRoute} />
              <Route path="/donuts/new" component={NewRoute} />
              <Route path="/donuts/:id" component={ShowRoute} />
              <Route path="/donuts" component={IndexRoute} />
              <Route path="/" component={Home} />
            </Switch>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
