import { useState } from 'react';
import './App.css';
import './Component/Header.jsx';
import Header from './Component/Header.jsx';
import './Component/InputComponent.jsx';
import InputComponent from './Component/InputComponent.jsx';
import React, { useState } from "react";


function EventHandler () {
    const titleOnchangeHandler =((event) =>{
        setTitle(event.target.value);
    });
    const myContnentHandler = ((event) =>{
        setContents(event.target.value);
    }); 
    const AddEventHandler = ((event) =>{
     const AddTodo = {
        id: todos.length + 1,
        title,
        contents,
     }
    if(title === "" || contents === "" ) {
        alert("내용을 입력하세요");
        event.preventdefault();
    }
})
    return EventHandler();
    
    
}
export default EventHandler;