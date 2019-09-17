import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import configureStore from './store/store';
import * as APIUtil from './util/session_api_util';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    const root = document.getElementById('root');
    
    APIUtil.checkSession()
        .then(() => {
            const currentUser = JSON.parse(window.localStorage.getItem('userData'));
            const preloadedState = {
                session: { id: currentUser.id },
                entities: {
                    users: { [currentUser.id]: currentUser }
                }
            };
            store = configureStore(preloadedState);
            ReactDOM.render(<Root store={store} />, root);
            
        })
        .catch(() => {
            window.localStorage.clear();
            store = configureStore();
            ReactDOM.render(<Root store={store} />, root);
        }) 
});