import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");  // 결과물 출력을 위한 스테이트
  const [query, setQuery] = useState("");  // input을 위한 쿼리 State

  const handleForEach = () => {
    let temp = "";
    array.forEach(function (item,index) {
       temp +=`${index}: ${item} /`;
    });
    setResult(temp);
  };
  const handleFilter = () => {
     const Filterd = array.filter((item,index)=>item.includes(query)); // 함수가 한줄이면 중괄호 생략
      //includes(검색어 확인)
      // if(item.includes(query)){
      //   return true;
      // } else {
      //   return false;
      // }
     setResult(Filterd.join(", "));
  };
  const handleMap = () => {
    const Maped = array.map((item,index)=>{
       return item.toUpperCase(); 
    });
    setResult(Maped.join(", "));// Map 결과물 출력 
  };
  const handleReduce = () => {        //reduce 누적하다 -> function(누적된 값, 현재 값) //  다 합침 배열 첫번째 배열 두번째 더함 -> 누적된값 , 다음 값 현재값으로 적용                                    
      const reduced = array.reduce((acc, cur)=>{
        return `${acc} + ${cur}`;
      });
      setResult(reduced);
  };

  const handlePush = () =>{
    if(query.length <= 0){
      alert("추가하실려는 값을 입력하세요."); // 값이 입력됬는지 확인
      return false; 
    }
      // setResult(...array,"test");  
    const newArr = [...array,query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const handlePop = () =>{
   const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };
  const handleSplice = () => {
    const Arrsplice = [...array];
     Arrsplice.splice(1,2);  // 1번째 배열 부터 두번째 배열 제외하고 출력
     setQuery(Arrsplice.setArray);
     setResult(Arrsplice.join(", "));
  };
  const handleIndexof = () => {
    const Ofindex = array.indexOf((item,index) =>{
        setArray(array.slice(Ofindex));
    });
    setResult(Ofindex.join(", "));
  }

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input value={query} onChange={(event)=>{
            setQuery(event.target.value);  // 
      }}/>
      <div>
        <button onClick={ handleForEach}>forEach</button>
        <button onClick={ handleFilter}>Filter</button>
        <button onClick={handleMap}>Map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexof}>indexOf</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
export default App;
