export default ({ resourcePath }) => {
  const source = `import React from 'react';
import ReactDOM from 'react-dom';
import Component from '${resourcePath}';

function renderApp() {
  const isSSR = window.__ICE_SSR_ENABLED__;
  let comProps = {};
  // process App.getInitialProps
  if (isSSR && window.__ICE_PAGE_PROPS__) {
    comProps = window.__ICE_PAGE_PROPS__;
  }
  ReactDOM[isSSR ? 'hydrate' : 'render'](<Component {...comProps} />, document.getElementById('ice-container'));
}
if (!Component) {
  console.warn('[icejs] You likely forget to export your component at ${resourcePath}');
} else {
  renderApp();
}
`;
  return source;
};
