import React from 'react';
import { Tabs, Input, Button, Checkbox } from 'antd';
import './App.css';

const onChange = (key) => {
  console.log(key);
};

const App = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Do coding challenges', completed: false },
    { id: 2, text: 'Do coding challenges', completed: false },
    { id: 3, text: 'Do coding challenges', completed: true },
  ]);

  const handleAdd = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleDeleteAll = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const TodoInput = () => {
    const [text, setText] = React.useState('');
    const onSubmit = () => {
      handleAdd(text);
      setText('');
    };
    return (
      <div className="todo-input-container">
        <Input
          placeholder="add details"
          size="large"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onPressEnter={onSubmit}
        />
        <Button type="primary" size="large" className="todo-add-btn" onClick={onSubmit}>
          Add
        </Button>
      </div>
    );
  };

  const TodoItem = ({ todo, onDelete }) => (
    <div className="todo-item-container">
      <Checkbox
        className={`todo-item todo-checkbox-container ${todo.completed ? 'completed' : ''}`}
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
      >
        {todo.text}
      </Checkbox>
      {onDelete && (
        <Button type="text" danger onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      )}
    </div>
  );

  const completedTodos = todos.filter(todo => todo.completed);

  const items = [
    {
      key: '1',
      label: 'All',
      children: (
        <div>
          <TodoInput />
          {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
      ),
    },
    {
      key: '2',
      label: 'Active',
      children: (
        <div>
          <TodoInput />
          {todos.filter(todo => !todo.completed).map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      ),
    },
    {
      key: '3',
      label: 'Completed',
      children: (
        <div className="todo-tab-completed">
          {completedTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
          {completedTodos.length > 0 && (
            <Button
              type="primary"
              danger
              className="todo-delete-all-btn"
              onClick={handleDeleteAll}
            >
              Delete all
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className='todo-box'>
      <h1 className='title'>#todo</h1>
      <Tabs className='todo-tabs' defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default App;