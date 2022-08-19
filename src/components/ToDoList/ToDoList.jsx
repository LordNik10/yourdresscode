import { useState } from 'react';
/* eslint-disable */

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
        return el;
      }),
    );
  };

  const handleDelete = (id) => {
    setListOfToDo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  return (
    <>
      <input
        type="text"
        onKeyDown={handleToDo}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ul>
        {listOfToDo.map((el) => (
          <li key={el.id}>
            <a href="#" onClick={() => handlecompleteToDo(el.id)}>
              {el.text}
              {el.isComplete && '--->done'}
            </a>
            <span onClick={() => handleDelete(el.id)}>Elimina</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
