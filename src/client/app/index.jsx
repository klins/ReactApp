import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {allReducers} from './reducers/index.js';
import {Provider} from 'react-redux';
import Page from './components/test.jsx';

require('../styles/style.scss');

const store = createStore(allReducers);

render(<Provider store={store}><Page/></Provider>, document.getElementById('app'));