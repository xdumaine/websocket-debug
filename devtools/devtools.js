/* global chrome */
/* eslint-env browser */
'use strict';

(() => {
  const createPanel = function (panel) {
    console.log('wsd created panel');
    console.log(arguments);
  };
  chrome.devtools.panels.create('Websocket Debug',
    'devtools/websocket.png', 'devtools/websocket-console.html', createPanel);
})();
