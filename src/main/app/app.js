import React from 'react';
import {HomePage} from './pages/home/HomePage';
import { Switch, Route } from 'react-router-dom'
import {LearnPage} from './pages/learn/LearnPage';
import {LearnArticlePage} from './pages/learn-article/LearnArticlePage';
import Favicon from 'react-favicon';

export class App extends React.Component {

  render() {
    return ([
      <Switch key="1">
        <Route exact path='/learn' component={LearnPage}/>
        <Route exact path='/learn/:name' component={LearnArticlePage}/>
        <Route path='/' component={HomePage}/>
      </Switch>,
      <Favicon key="2" url={require('./images/favicon.ico')}/>
    ]);
  }

}
