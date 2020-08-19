// import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'; //使用redux的中间件
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

const store = createStore(reducer, enhancer);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//store是唯一的
//只有store才能改变store里的内容
//reducer必须是纯函数
export default store;

//redux的核心API
//createStore  创建store
//store.dispatch 派发action
//store.getState 获取store中的数据内容
//store.subscribe 订阅store的改变

