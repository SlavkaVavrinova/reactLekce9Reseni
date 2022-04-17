import React from 'react';
import { render } from 'react-dom';
import WorldTime from './components/WorldTime';
import './style.css';

const App = () => <WorldTime />;

render(<App />, document.querySelector('#app'));
