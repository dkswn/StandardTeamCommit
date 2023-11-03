// 두개의 객체 배열을 구조분해 할당으로 분해하고 map 메소드를 이용하여 원하는 값만 골라내서 객체로 만든다음 출력하기 코드!!!
import React, { useState } from "react";

function App() {
  const initialState1 = [
    { id: 1, name: "홍길동", age: 25, email: "hong@example.com" },  // item 매개변수 연결 위치
    { id: 2, name: "김철수", age: 28, email: "kim@example.com" },
    { id: 3, name: "이영희", age: 22, email: "lee@example.com" },
  ];

  const initialState2 = [
    { userId: 1, hobbies: ["독서", "게임"] },
    { userId: 2, hobbies: ["여행", "음악 감상"] },
    { userId: 3, hobbies: ["영화 감상", "요리"] },
  ];

  const newState = initialState1.map(function (state1) {  // 두 배열을 합친 함수 선언 하여 순회
    return {
      ...item,  // 구조분해 할당
      ...initialState2.find((state2) => state2.userId === state1.id), // 이니셜스테이트 2도 구조 분해 할당 하고 find 조건으로 찾는다
    };
  });

  // TODO: 여기에서 initialState1, initialState2를 조합하여 state를 만듭니다.
  const [users, setUsers] = useState(newState);

  const handleSelectUser = function (name, hobbies) {
    alert(`${name}님 안녕하세요! ${hobbies}취미는 너무 멋진 것 같아요!`);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleSelectUser(user.name, user.hobbies.join(", "))}
          >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;