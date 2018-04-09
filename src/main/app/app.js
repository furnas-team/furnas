import React from 'react';
import {HomePage} from './pages/home/HomePage';
import { Switch, Route } from 'react-router-dom'
import {LearnPage} from './pages/learn/LearnPage';
import {LearnArticlePage} from './pages/learn-article/LearnArticlePage';

export class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/learn' component={LearnPage}/>
        <Route exact path='/learn/:name' component={LearnArticlePage}/>
        <Route path='/' component={HomePage}/>
      </Switch>
    );
  }

}
