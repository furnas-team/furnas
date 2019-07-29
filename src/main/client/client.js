import React from 'react';
import '../../3rd-part/adobe-animation';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from '../app/app';
import './client.scss';
import mixpanel from 'mixpanel-browser';
import 'whatwg-fetch';

window.mixpanel = mixpanel;
mixpanel.init('89c5c0bb6af5172d87b01e9e06839b2e');

//yandex metrika
if (typeof Ya !== 'undefined') {
  window.yaCounter = new Ya.Metrika({
    id: 48461990,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });
}

//mouseflow
window._mfq = window._mfq || [];
(function () {
  var mf = document.createElement("script");
  mf.type = "text/javascript";
  mf.async = true;
  mf.src = "//cdn.mouseflow.com/projects/355b66e5-d2a4-4c4b-8a5e-a0f778ba3dae.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();

try {
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '921776094824729');
  fbq('track', 'PageView');
} catch {
  
}

hydrate((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById("root"));
