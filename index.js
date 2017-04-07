import React from 'react';
import { render } from 'react-dom';
import 'typeface-istok-web/index.css';
import Canvas from './src/canvas';
import './src/assets/css/reset.css';

const renderApp = () =>
    render(
      <Canvas />,
      document.getElementById('root'),
  );

renderApp();
