import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  //todo配列オブジェクトの更新用に用意。プロパティはinputValue, id, checkedの３つを更新する。

  type Todo = {
    inputValue: string;
    id: number; //keyを指定するため
    checked: boolean;
  };

  // eの方は暗黙の型になってしまうのでfixed 機能で直してあげる
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // 新しいTodoを作成 以前作った型を指定してあげる
    const newTodo: Todo = {
      inputValue: inputText,
      id: todos.length,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
    setInputText("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    // const の左辺右辺の型が等しくないのでエラーが吐かれていた
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div>
        <h2>Todoリスト with TypeScript</h2>
        <form onSubmit={() => {}}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
          ></input>
          <input
            value="作成"
            type="submit"
            onChange={(e) => handleSubmit(e)}
            className="submitButton"
          ></input>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                className="inputText"
                value={todo.inputValue}
              />
            </li>
          ))}
        </ul>
        {/* <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.inputValue}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default App;
