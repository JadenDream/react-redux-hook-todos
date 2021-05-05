import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const App = () => (
  <div>
    <h1>Todos V1</h1>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App
