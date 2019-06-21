const express = require('express');
const React = require('react');
const path = require('path');
const {App} = require('../app/app');
const {StaticRouter} = require('react-router-dom');
const {renderToString, renderToStaticMarkup} = require('react-dom/server');
const {Helmet} = require('react-helmet');
const endsWith = require('lodash/endsWith');

const app = express();
app.get('*.gz', function(req, res, next) {
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use(express.static('public'));

app.get("*", (req, res) => {
  let context = {};

  const appString = renderToString((
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>));

  const helmet = Helmet.renderStatic();

  res.write("<!DOCTYPE html>");
  res.write(renderToStaticMarkup(
    <html>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="google-site-verification" content="1mW_65D1liOX9N8PT2g81ybfDbx0kTiIljMcbA-gips" />
      <meta name="yandex-verification" content="f8959a8f34cd26e8" />
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700,500|Alfa+Slab+One:400|Playfair+Display+SC:700" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"/>
      <link rel="stylesheet" type="text/css" href="/styles.css"/>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={ {__html: appString} }>
    </div>
    <script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>
    <script src="/furnas.client.js.gz"></script>
    </body>
    </html>));
  res.end();
});

export default app;