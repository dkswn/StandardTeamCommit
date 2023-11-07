import { useState } from 'react';
import './App.css';
import './Component/Header.jsx';
import Header from './Component/Header.jsx';
import './Component/InputComponent.jsx';
import InputComponent from './Component/InputComponent.jsx';
import React, { useState } from "react";


function Header() {
return  (
    <header className="headerstyle">
        <div>MyTodolist</div>
    </header>
)

}

export default Header;