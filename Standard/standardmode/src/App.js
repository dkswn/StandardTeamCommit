
import { useState } from 'react';
import './App.css';
import './Component/Header.jsx';
import Header from './Component/Header.jsx';
import './Component/InputComponent.jsx';
import InputComponent from './Component/InputComponent.jsx';
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState(initialState);
  const initialState = [
    {
      id: 1,
      title: "",
      contents: "",
      isDone: false,
    }, {
      id: 2,
      title: "",
      contents: "",
      isDone: false,
    }
  ];
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  
  return (
    <div App className="appComponent">
      <Header/>
      <InputComponent></InputComponent>

    </div>
  )


  
}

export default App;
