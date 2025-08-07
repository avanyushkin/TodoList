import { useState } from 'react'
import './App.css'
import {Todo} from './components/Todo.jsx'

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'first', checked: false },
    { id: 2, name: 'second', checked: false },
    { id: 3, name: 'third', checked: false }]);
  const [inputValue, setInputValue] = useState('');
  const [editedId, setEditedId] = useState(0);
  const [editedValue, setEditedValue] = useState('');

  const addHandler = () => {
    if (inputValue.length > 0) {
      const newArray = [...todoList, { id: Math.random(), name: inputValue, checked: false }];
      setTodoList(newArray);
      setInputValue('');
    }
  }

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  const deleteHandler = (arg) => {
    //  console.log('click on x', i);
    const newArray = todoList.filter((el) => el.id !== arg);
    setTodoList(newArray);
  }

  const checkHandler = (id) => {
    const newArray = todoList.map((el) => {
      if (el.id === id) {
        el.checked = !el.checked;
      }
      return el;
    })
    setTodoList(newArray);
  }

  const saveEditHandler = (id) => {
    const newArray = todoList.map(el => {
      if (el.id === id) {
        return { ...el, name: editedValue };
      }
      return el;
    });
    setTodoList(newArray);
    setEditedId(0);
  }

  const editHandler = (id, name) => {
    setEditedId(prev => (prev === id ? 0 : id));
    setEditedValue(name);
  }
  // let showInput = false;
  return (
    <div className="App">
      <div>
        <input value={inputValue} onChange={(e) => inputHandler(e)} />
        <button onClick={addHandler}>Добавить</button>
      </div>
      {todoList.map((i) => 
      <Todo 
            id={i.id} 
            name={i.name}
            editedId={editedId}
            editedValue={editedValue}
            setEditedValue={setEditedValue}
            saveEditHandler={saveEditHandler}
            checked={i.checked}
            checkHandler={checkHandler}
            deleteHandler={deleteHandler}
            addHandler={addHandler}
            />)};
    </div>
  );
}

export default App;
