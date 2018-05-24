import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './containers/App';
import UITest from './containers/UITest';
import registerServiceWorker from './registerServiceWorker';

render(<UITest />, document.getElementById('root'));
registerServiceWorker();
