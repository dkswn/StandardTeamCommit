import { useState } from 'react';
import './App.css';
import './Component/Header.jsx';
import Header from './Component/Header.jsx';
import './Component/InputComponent.jsx';
import InputComponent from './Component/InputComponent.jsx';
import EventHandler from './EventHandler.jsx';
import React, { useState } from "react";


function InputComponent() {
return (
    <div>
    <Header> 
    </Header>
    <EventHandler>
    제목:<input value="title" onChange={titleOnchangeHandler}/>
      내용:<input value="contents" onChange={myContnentHandler}/>
    </EventHandler>
      </div>
)

}

export default InputComponent;