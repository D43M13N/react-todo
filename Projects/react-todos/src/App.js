import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;