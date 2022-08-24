/* eslint-disable */
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './ToDoList.scss';

function createToDo(text) {
  return {
    text,
    id: Date.now(),
    isComplete: false,
  };
}

function ToDoList() {
  const [listOfToDo, setListOfToDo] = useState([]);
  const [text, setText] = useState('');

  const handleToDo = (e) => {
    if (e.key === 'Enter' && text !== '') {
      setListOfToDo((prevTodo) => prevTodo.concat(createToDo(text)));
      // eslint-disable-next-line
      console.log(listOfToDo);
      setText('');
    }
  };

  const handlecompleteToDo = (id) => {
    setListOfToDo((prevTodo) =>
      prevTodo.map((el) => {
        if (el.id === id) {
          el.isComplete = !el.isComplete;
        }
        console.log(el);
        return el;
      }),
    );
  };

  const handleDelete = (id) => {
    setListOfToDo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  return (
    <>
      <div className="container">
        <div className="container-body">
          <h1 className="title-webpage">To do List</h1>
          <input
            type="text"
            onKeyDown={handleToDo}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="todo-input"
          />
          <ul className="todo-list">
            {listOfToDo.map((el) => (
              <li
                key={el.id}
                style={{
                  backgroundColor: el.isComplete ? 'lightgreen' : 'transparent',
                }}
              >
                <div className="container-li">
                  <span
                    style={{
                      textDecoration: el.isComplete ? 'line-through' : null,
                    }}
                    className="todo-link"
                  >
                    {el.text}
                  </span>
                  <span className="delete-icon">
                    <DeleteIcon onClick={() => handleDelete(el.id)} />
                    <input
                      type="checkbox"
                      onChange={() => handlecompleteToDo(el.id)}
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
