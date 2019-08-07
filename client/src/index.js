import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import configureStore from './store/store';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    let currentUser = JSON.parse(window.localStorage.getItem('userData'));
    if (currentUser) {
        const preloadedState = {
            session: { id: currentUser.id },
            entities: {
                users: { [currentUser.id]: currentUser }
            }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});