import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

const TodoList = () => {
    // 使用 useSelector 取出 Store 保管的 state
    const tempTodoList = useSelector(state => state.todos);
    const visibilityFilter = useSelector(state => state.visibilityFilter);
    console.log("visibilityFilter:"+visibilityFilter);
    let todoList = getVisibleTodos(tempTodoList, visibilityFilter);

    const dispatch = useDispatch();
    
    return (
        <ul>
            {todoList.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                />
            )}
        </ul>
    );
  };
  
  export default TodoList;