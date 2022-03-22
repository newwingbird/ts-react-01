import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

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
    console.log(inputText);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }

    // 新しいTodoを作成 以前作った型を指定してあげる
    const newTodo: Todo = {
      inputValue: inputText,
      id: todos.length,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
    console.log(inputText);
    setInputText(inputText);
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
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
          />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        {/* タスク設定が完了したら */}
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Header />
              <input
                type="text"
                value={todo.inputValue}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                disabled={todo.checked}
              />
              {/* <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleChecked(todo.id, todo.checked)}
              />
              <button onClick={() => handleDelete(todo.id)}>消</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
