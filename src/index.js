import React from 'react' ;
import ReactDOM from 'react-dom' ;
import App from './component/App';

import { createStore, applyMiddleware } from 'redux' ;
import rootReducers from './reducers' ;
import { Provider } from 'react-redux' ;

import { fetchMemes } from './actions' ;

import thunk from 'redux-thunk' ;

const store = createStore(rootReducers,applyMiddleware(thunk)) ;

store.subscribe( ()=> console.log('state', store.getState()) ) ;
store.dispatch(fetchMemes()) ;

ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>,
    document.getElementById('root')    
);