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
    console.log('ciao' + id);
    setListOfToDo((prevTodo) =>
      prevTodo.map((el) => {
        if (el.id === id) {
          console.log('dentro if---->' + el.id + '====' + id);
          console.log('1' + el.isComplete);
          el.isComplete = !el.isComplete;
          console.log('2' + el.isComplete);
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
              <li key={el.id}>
                {el.isComplete && (
                  <span
                    style={{ textDecoration: 'line-through' }}
                    className="todo-link"
                  >
                    {el.text}
                  </span>
                )}
                {!el.isComplete && <span className="todo-link">{el.text}</span>}

                <span
                  onClick={() => handleDelete(el.id)}
                  className="delete-icon"
                >
                  <DeleteIcon />
                </span>
                <span>
                  <input
                    type="checkbox"
                    onChange={() => handlecompleteToDo(el.id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
