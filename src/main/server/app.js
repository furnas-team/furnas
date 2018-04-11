const express = require('express');
const React = require('react');
const path = require('path');
const {App} = require('../app/app');
const {StaticRouter} = require('react-router-dom');
const {renderToString, renderToStaticMarkup} = require('react-dom/server');

const app = express();
app.use(express.static('public'));

app.get("*", (req, res) => {
  let context = {};

  const appString = renderToString((
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>));

  res.write("<!DOCTYPE html>");
  res.write(renderToStaticMarkup(
    <html>
    <head>
      <meta charSet="utf-8"/>
      <meta name="description" content="Создаем Landing page поэтапно.  Показываем вам результат
      на каждом шаге и вы платите
      только в том случае, если он вам
      нравится." />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="google-site-verification" content="1mW_65D1liOX9N8PT2g81ybfDbx0kTiIljMcbA-gips" />
      <title>Дизайн и верстка Landing pages | Furnas</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"/>
      <link rel="stylesheet" type="text/css" href="/styles.css"/>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={ {__html: appString} }>
    </div>
    <script src="/furnas.client.js"></script>
    </body>
    </html>));
  res.end();
});

export default app;