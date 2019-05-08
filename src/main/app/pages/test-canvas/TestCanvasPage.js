import React from 'react';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import {Helmet} from 'react-helmet';
import {MainScreen} from '../home/screens/main/MainScreen';

let html2canvas;

if (!SERVER) {
  html2canvas = require('html2canvas');
}


export class TestCanvasPage extends React.Component {

  componentDidMount() {
    html2canvas(window.document.getElementsByClassName('test')[0], {
      ignoreElements: (element) => element.tagName === 'SOURCE'
    }).then(canvas => {

    });
  }

  render() {
    return (
      <ThemeProvider value={ThemeName.LIGHT}>
        <Helmet>
          <title>Дизайн и верстка лендинга в 4 шага | Furnas</title>
          <meta name="description" content="Создаем Landing page поэтапно.  Показываем вам результат на каждом шаге и вы платите только в том случае, если он вам нравится."/>
          <link rel="canonical" href="https://furnas.ru"/>
        </Helmet>
        <div>
          <div className="test">Test</div>
          <input/>
          <input/>
          <MainScreen/>
        </div>
      </ThemeProvider>
    );
  }

}
