import './App.css';
import Bulb from './component/Bulb';
import Counter from './component/Counter'

// App 컴포넌트 - 루트 컴포넌트(부모 컴포넌트)

/* Props : 부모 컴포넌트는 자식 컴포넌트에 인수를 전달하듯 원하는 값을 전달할 수 있는데(자식에서 부모로는 불가능), 이 값을 Props라고 함(properties의 줄임말)
Props는 객체 형태로 묶여서 전달됨 {text: '메일', img: 'mail.png'} */
/*
  function App(){
    return(
      <>
        <Button text={"메일"} img={"mail.png"} />
      </>
    )
  }
*/

/* State - 현재 가지고 있는 형태나 모양을 정의하며 변화할 수 있는 동적인 값 
React 컴포넌트의 현재 상태를 보관하는 변수로 State를 갖는 컴포넌트들은 State 값에 따라서 랜더링 되는 UI가 결정 
React 컴포넌트는 여러개의 State를 가질 수 있음
*/

function App() {
  // 배열 형태로 전달하기 때문에 구조분해할당 형태로 전달받는 것이 일반적임. [state , setState] State - 상태 값 / setState - 상태 값을 변경시키는 함수
  return(
    <>
      <Bulb/>
      <Counter/>
    </>
  )

  /* return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  ) */

  /*const buttonProps = {
    text : "메일",
    color : "red",
    a : 1,
    b : 2,
    c : 3,
  }; */

  /*return(
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header/>
      </Button>
    </>
  ); */
}

export default App