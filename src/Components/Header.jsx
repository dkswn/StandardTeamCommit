import React, { useState } from 'react';
import styled from 'styled-components';


const HeaderStyled = styled.header`
background-color: #282c34;
min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin: 10px;
`;
const TitleInput = styled.input`
    padding: 10px;
    
    
`;
const ContentsInput = styled.input`
    padding: 10px;
`;
const FormTagContainer = styled.form`
    
`;
const ButtonaddClick = styled.button`
    padding: 10px;
`;
function Header() {
    const [todos , setTodos] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return (
    <div>
        <HeaderStyled>
        MyTodolist
        <FormTagContainer onSubmit={(event)=>{
            event.preventDefault();
            const newTodos = {
            
                title,
                content,
                isDone:true,
            };
            setTodos([...todos,newTodos]);
        }}>
            <div>
      <TitleInput type="text" value={title} placeholder="제목을 입력하세요" onChange={(event)=>{
        setTitle(event.target.value);
      }}
      />
      </div>
      <div>
      <ContentsInput type="text" value={ content} placeholder="내용 입력" onChange={(event)=>{
        setContent(event.target.value);
      }} />
        </div>
        <div>
            <ButtonaddClick type="submit">등록하기</ButtonaddClick>
        </div>
        </FormTagContainer>
        </HeaderStyled>
    </div>  
    )  
}

export default Header;