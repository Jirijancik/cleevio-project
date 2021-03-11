import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'views/PageNotFound/PageNotFound';
import { HomePage } from './views/HomePage/HomePage';
import { NewTrip } from './views/NewTrip/NewTrip';
import { GlobalStyle } from './assets/css/global.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/new-trip" component={NewTrip} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
