import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'views/PageNotFound/PageNotFound';
import { HomePage } from './views/HomePage/HomePage';
import { GlobalStyle } from './assets/css/global.styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
