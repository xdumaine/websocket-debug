/* global chrome */
/* eslint-env browser */
'use strict';

(() => {
  const createPanel = function (panel) {
    console.log('wsd created panel');
    console.log(arguments);
  };
  chrome.devtools.panels.create('Websocket Debug',
    'websocket.png', 'websocket-console.html', createPanel);
})();
