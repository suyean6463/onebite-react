# 03. React.js
> Meta가 개발한 프론트엔드를 위한 오픈소스 javascript 라이브러리.<br>복잡한 대규모 웹 서비스의 UI를 좀 더 편하고 빠르게 개발하기 위해 만들어진 기술.

## React의 기술적인 특징

- 컴포넌트 기반으로 UI를 표현
  - 컴포넌트란 구성요소란 뜻으로, 화면을 구성하는 요소 즉 UI를 구성하는 요소를 말함 
- 화면 업데이트 구현이 쉬움
  - 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용하는 것을 말함
  - 리액트는 선언형 프로그래밍 방식으로 동작하기 때문에 화면 업데이트 구현이 쉬움
    - 선언형 프로그래밍이란 과정은 생략하고 목적만 간결히 명시하는 방법 → 리액트
      - state 변수 값만 바꿔주어도 랜더링 결과가 달라짐
    - 반대로, 목적형 프로그래밍이란 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식 → 자바스크립트
- 화면 업데이트가 빠르게 처리됨
  - 리액트는 Virtual DOM 이라는 가상의 돔을 사용
    - DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판
    - 리액트는 업데이트가 발생하면 실제 DOM이 아닌 Virtual DOM에 먼저 반영
      - 예로 동시에 3개의 업데이트가 발생하면, Virtual DOM에 먼저 반영하고 업데이트가 다 모인 Virtual DOM을 실제 DOM에 한 번에 반영하여 좋은 업데이트 성능을 보여줌

## JSX 란?
> 자바스크립트와 HTML의 장점을 살려 효율적으로 UI 구성하는데 도움을 주며, 확장된 자바스크립트 문법(Javascript Extensions)

### JSX 주의 사항
- 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
- 숫자, 문자열, 배열 값만 랜더링
- 모든 태그는 닫혀있어야 함
- 최상위 태그는 하나여야 함 - <></> 최상위 태그로 빈 태그 사용 가능

## 컴포넌트
> React 는 컴포넌트 기반으로 UI를 표현

- App 컴포넌트는 루트 컴포넌트(부모 컴포넌트)로, default 루트 컴포넌트로 쓰임
- 예로 Header 컴포넌트는 자식 컴포넌트로 컴포넌트 전용.jsx 파일 생성 후 **export default Header;** 를 통해 export
  - 부모 컴포넌트 App.jsx에서 **import Header from './component/Header';** 로 import
 
## 이벤트 핸들러
> 웹 내부에서 발생하는 사용자의 행동을 이벤트라 하며 그것을 처리하는 것을 말함
- 리액트에서 발생하는 모든 이벤트는 이벤트 핸들러 함수를 호출하면서 호출된 이벤트 함수에 매개변수로 이벤트 객체를 제공
- SyntheticBaseEvent(이벤트 객체) 객체가 출력 즉, 합성 이벤트 객체
- 합성 이벤트는 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태로 브라우저 별 스펙이 달라 발생하는 문제인 Cross Browsing Issue를 편리하게 해결해줌
```
function Button({text, color,children}){
  function onClickButton(e){
    console.log(e)
    console.log(text)
  };

  return (
    <button 
    onClick={onClickButton}
    style={{color:color}}
    >
      {text} - {color}
      {children}
    </button>
  );
};

// 기본값 
Button.defaultProps={
  color : "black"
}

export default Button;
```
 
## Props
> 부모 컴포넌트는 자식 컴포넌트에 인수를 전달하듯 원하는 값을 전달할 수 있는데(자식에서 부모로는 불가능), 이 값을 Props라고 함(properties의 줄임말)
- Props는 객체 형태로 묶여서 전달됨 {text: '메일', img: 'mail.png'}
```
function App(){
  return(
    <>
      <Button text={"메일"} img={"mail.png"} />
    </>
  )
}
```
- 객체 형태로 선언 후 스프레드 연산자로 Props 전달 가능
```
const buttonProps = {
  text : "메일",
  color : "red",
  a : 1,
  b : 2,
  c : 3,
}; 

return(
  <>
    <Button {...buttonProps} />
    <Button text={"카페"} />
    <Button text={"블로그"}>
      <div>자식요소</div>
      <Header/>
    </Button>
  </>
); 
```

## State
> 현재 가지고 있는 형태나 모양을 정의하며 변화할 수 있는 동적인 값
- React 컴포넌트의 현재 상태를 보관하는 변수로 State를 갖는 컴포넌트들은 State 값에 따라서 랜더링 되는 UI가 결정
- React 컴포넌트는 여러개의 State를 가질 수 있음
- 배열 형태로 전달하기 때문에 구조분해할당 형태로 전달받는 것이 일반적임.
  - [state , setState] State - 상태 값 / setState - 상태 값을 변경시키는 함수
```
import Bulb from './component/Bulb';
import Counter from './component/Counter'

function App() {
  return(
    <>
      <Bulb/>
      <Counter/>
    </>
  )
}
```
```
import { useState } from 'react';

function Bulb(){
  const [light , setLight] = useState("OFF");
  return(
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor:'orange'}}>ON</h1>
        ) : (
        <h1 style={{backgroundColor:'gray'}}>OFF</h1>
      )}
      <button onClick={function(){
        setLight(light === "ON" ? "OFF" : "ON")
      }}>
        전구 {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
}

export default Bulb;
```
```
import { useState } from "react";

function Counter(){
  const [count , setCount] = useState(0);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={function(){
        setCount(count + 1);
      }}>+</button>
    </div>
  );
}

export default Counter;
```
