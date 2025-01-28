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

## useRef
> 컴포넌트 내부에 새로운 Refrence 객체를 생성하는 기능
> 
`const refObject = useRef()`
- refObject는 컴포넌트 내부의 변수로써 일반적인 값 저장 가능
- `console.log(refObj)`의 결과로 `{current : undefined}` (초기값이 없을 경우)
  - 레퍼런스 객체란 current란 프로퍼티에 값을 담아두는 객체
  - 객체 표기법 사용 가능 `refObj.current`
- 컴포넌트를 리렌더링 하지 않기 때문에 컴포넌트 내부에서 렌더링에 영향을 주지 않을 때 주로 사용

### useRef 와 useState
- useRef는 Refrence 객체를 생성, useState는 State를 생성
- 공통점 : 컴포넌트 내부의 변수로 활용 가능
- 차이점 : useRef는 값이 변해도 리렌더링을 유발하지 X , useState는 값이 변하면 리렌더링을 유발

## React Hooks
> 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 해주는 메서드
- useRef와 useState 모두 react hooks
  - react hooks는 이름 앞에 동일한 접두사 use 붙음
  - 각각의 메서드는 Hook이라 불림
  - 함수 컴포넌트 내부에서만 호출 가능
  - 조건문 또는 반복문에서는 호출 불가
  - 커스텀 훅 만들 수 있음

## 리액트 컴포넌트의 라이프사이클
> Mount - Update - UnMout
- Mount(탄생) : 컴포넌트가 탄생하는 순간, 화면에 처음 렌더링되는 것을 말함
  - 서버에서 데이터를 불러오는 작업 가능
- Update(변화) : Mount 이후 컴포넌트가 리렌더링되는 것을 말함
  - 어떤 값이 변경되었는지 출력하는 기능 가능
- UnMout(죽음) : 컴포넌트가 화면에서 사라지는 순간, 렌더링에서 제외되는 것을 말함
  - 컴포넌트가 사용하던 메모리 정리 가능

 ### 라이프사이클 제어
 > 컴포넌트의 라이프사이클 단계별로 컴포넌트들이 각각 다른 작업들을 수행하도록 만드는 것을 의미, useEffect 사용

## useEffect
> 리액트 컴포넌트의 사이드 이펙트를 제어하는 새로운 React Hooks<br>사이드 이펙트란 컴포넌트의 동작에 따라 파생되는 여러가지 효과
```
useEffect(() => {
  ...
}, [])
```
- 배열을 의존성 배열이라고 부르며, dependency array 줄여서 deps라고 함
- 여러개 선언 가능 [count, input]...

### useEffect로 라이프사이클 제어하는 방법
- Mount를 제어하는 방법
```
useEffect(() => {
  console.log("mount")
}, [])  
```
 - useEffect는 deps에 있는 값이 변화되어야 실행되기때문에 처음 mount 되고나서 한번만 실행되고 그 이후에는 실행 안 됨
- Update를 제어하는 방법
```
useEffect(() => {
  console.log("update")
})  
```
 - deps를 생략하면 mount될 때 한번 실행되고 리렌더링 즉 업데이트 될 때마다 실행됨
- UnMount를 제어하는 방법
```
useEffect(function(){
  // 클린업, 정리함수
  return() => {}
},[]) 
```
 - useEffect 콜백함수 내에서 리턴으로 또 새로운 함수를 반환하는 함수를 클린업, 정리함수라고 함
 - 종료가 되는 시점에 정리함수를 반환

## useReducer
> 컴포넌트 내부에서 새로운 State를 생성하는 React Hooks, 모든 useState는 useReducer로 대체 가능<br>
상태 관리 코드를 컴포넌트 외부로 분리 가능
