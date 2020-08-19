import React, { Component } from 'react';
import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators';
import TodoListUI from './TodoListUI'
// import axios from 'axios'
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        //console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtbClick = this.handleBtbClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange); //state改变
    }
    render() {
        return (<TodoListUI
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtbClick={this.handleBtbClick}
            list={this.state.list}
            handleItemDelete={this.handleItemDelete}
        />)
    }
    componentDidMount() {
        // axios.get('/api/todolist')
        //     .then((res) => {
        //         console.log(res);
        //         const data = res.data;
        //         const action = initListAction(data);
        //         store.dispatch(action);
        //     })
        //     .catch((error) => {
        //
        //     })
        const action = getTodoList();
        store.dispatch(action);

    }
    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    handleStoreChange() { //store改变就赋值回来给state
        //console.log('store changed');
        this.setState(store.getState())
    }
    handleBtbClick() {
        // const action = {
        //     type: ADD_TODO_ITEM,
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(idx) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     idx: idx
        // }
        const action = getDeleteItemAction(idx);
        store.dispatch(action);
    }


}
export default TodoList;
