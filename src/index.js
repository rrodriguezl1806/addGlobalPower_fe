import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app/app';

const appRoot = document.getElementById('root');
render(<App/>, appRoot);
