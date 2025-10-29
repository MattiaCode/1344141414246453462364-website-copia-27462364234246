// Protezione contro Developer Tools e Inspect Element
(function() {
  'use strict';

  // Disabilita F12
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I (Ispeziona elemento)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+C (Ispeziona elemento)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+K (Console Firefox)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
    // Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
    // Ctrl+P (Print)
    if (e.ctrlKey && e.keyCode === 80) {
      e.preventDefault();
      return false;
    }
    // Cmd+Option+I (Mac - Ispeziona)
    if (e.metaKey && e.altKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
    // Cmd+Option+J (Mac - Console)
    if (e.metaKey && e.altKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }
    // Cmd+Option+C (Mac - Ispeziona elemento)
    if (e.metaKey && e.altKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
    // Cmd+Option+K (Mac - Console)
    if (e.metaKey && e.altKey && e.keyCode === 75) {
      e.preventDefault();
      return false;
    }
    // Cmd+U (Mac - View Source)
    if (e.metaKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
    // Cmd+S (Mac - Save)
    if (e.metaKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
    // Cmd+P (Mac - Print)
    if (e.metaKey && e.keyCode === 80) {
      e.preventDefault();
      return false;
    }
  }, false);

  // Disabilita click destro
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  }, false);

  // Disabilita selezione drag
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  }, false);

  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  }, false);

  // Rileva se DevTools è aperta (metodo dimensioni)
  const detectDevTools = function() {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
      // DevTools aperta - azione preventiva
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:system-ui;"><div style="text-align:center;"><h1>⚠️</h1><p>Developer tools detected.</p></div></div>';
    }
  };

  // Controlla ogni 500ms
  setInterval(detectDevTools, 500);

  // Disabilita console log override
  if (typeof console !== 'undefined') {
    const noop = function() {};
    const methods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace', 'dir', 'dirxml', 'group', 'groupCollapsed', 'groupEnd', 'clear', 'count', 'countReset', 'assert', 'profile', 'profileEnd', 'time', 'timeLog', 'timeEnd', 'timeStamp', 'context', 'memory'];

    for (let i = 0; i < methods.length; i++) {
      console[methods[i]] = noop;
    }
  }

  // Disabilita debugger
  setInterval(function() {
    debugger;
  }, 100);

})();
