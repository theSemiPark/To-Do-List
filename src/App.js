import React, { Component, Fragment } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import BottomButton from './components/BottomButton';

class App extends Component {
  id = 1
  state = {
    text: '',
    dueDate: '',
    todos: [
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCreate = () => {
    const { text, dueDate, todos } = this.state;
    this.setState({
      text: '',
      dueDate: '',
      todos: todos.concat({
        id: this.id++,
        text: text,
        dueDate: dueDate,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  handleRemoveLast = () => {
    const { todos } = this.state;
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = date.getDate();
    day = day >= 10 ? day : '0' + day;
    date = year + '-' + month + '-' + day;

    this.setState({
      todos: todos.filter(todo => todo.dueDate >= date)
    })
  }
  handleRemoveDone = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => !todo.checked)
    })
  }
  render() {
    const { text, dueDate, todos, keyword } = this.state;
    const filteredTodos = todos.filter(
      todo => todo.text.indexOf(keyword) !== -1
    );
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleRemoveLast,
      handleRemoveDone
    } = this;
    return (
      <Fragment>
        <TodoListTemplate form={(
          <Form
            value={text}
            dueDate={dueDate}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}>
          <TodoItemList todos={filteredTodos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
        <BottomButton removeLast={handleRemoveLast} removeDone={handleRemoveDone} keyword={keyword} onChange={handleChange}/>
      </Fragment>
    );
  }
}

export default App;
