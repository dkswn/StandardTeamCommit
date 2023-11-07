import './App.css';
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
width: 100px;
height: 100px;
border: 1px solid 
${(props) => {
 return props.borderColor;
}};
margin: 20px;
background-color: ${(props)=> {
  return props.backgroundColor;
}};
`;

const boxlist = ['red','blue','green', 'b'];   // 'b'는 case 문의 default

const getBoxName = (color) => {
  switch (color) {
    case  'red':    // 스위치문을 이용해서 'red' 일 경우 "빨간박스" 리턴
    return "빨간박스"
    case 'green':
      return '초록박스'
    case 'blue':
      return '파란박스'
    default: 
    return '검정박스'
}
}
// const stP = styled.p`
// color: blue;
// `;
function App() {
  return  (
  <StContainer>
    {/* <Stbox borderColor="red" backgroundColor="blue">빨간박스</Stbox> */}
    {
      boxlist.map((box) => {
        return <StBox borderColor={box}>{getBoxName(box)}</StBox>
      })
    }
  </StContainer>
  )
}

export default App;
