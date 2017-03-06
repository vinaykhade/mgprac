import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import TaskList from './components/TaskList';

const Root = React.createClass({
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={TaskList}/>
        </Route>
      </Router>
    );
  }
});

export default Root;
