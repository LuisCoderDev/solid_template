import { Component } from 'solid-js';

import './app.scss';
import Logo from './logo.svg?component-solid';

const App: Component = () => (
  <div class='app'>
    <header class='header'>
      <Logo class='logo' />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        class='link'
        href='https://github.com/solidjs/solid'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn Solid
      </a>
    </header>
  </div>
);

export { App };