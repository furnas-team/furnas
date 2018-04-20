import React from 'react';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';
import './test.scss';

export function TestPage() {
  return (
    <ThemeProvider value={ThemeName.LIGHT}>
      <Helmet>
        <title>У кого заказать Landing page | Furnas</title>
        <meta name="description" content="Тест из 5-ти вопросов, чтобы лучше понять у кого заказать лендинг" />
      </Helmet>
      <div className="test">
      </div>
    </ThemeProvider>
  );

}