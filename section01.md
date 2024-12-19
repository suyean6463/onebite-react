# 01. JavaScript 기본

## Web 페이지를 개발하기 위해 필요한 언어

- HTML : 요소들의 배치나 모양을 정하기 위해 사용하는 언어, 색상이나 디자인 등은 수정 불가
- CSS : 요소들의 색상, 크기 등의 스타일 설정
- JavaScript : 웹 내부에서 발생하는 다양한 기능을 만들 수 있는 언어, 웹을 동적으로 움직이게 해줌

## 변수와 상수
> 값을 저장하는 저장소
<br>예로들어, `let age = 27` (age:변수명, 27:변수값) → 이를 **변수 선언 및 초기화** 라고 함

### 변수 let 
- 선언된 블록 범위 내에서만 접근 가능 
- 초기화 안 해도 가능하며 저장된 값을 바꿀 수 있음, 결과는 `undefined`
```
let greeting = "say Hi";
greeting = "say Hello instead";
```
- 중복 선언 불가
```
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```
- 동일변수가 다른 범위에서 정의된다면 중복 선언 가능
```
let greeting = "say Hi";
if(true) {
  let greeting = "say Hello instead";
  console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
```

### 상수 const 
- 선언된 블록 범위 내에서만 접근 가능 
- 선언된 변수의 값이 해당 범위 내에서 동일하게 유지
- 초기화 필수, 저장된 값을 바꿀 수 없음
- const 객체인 경우, 객체는 업데이트 불가하지만 객체의 속성은 업데이트 가능
```
const greeting = {
  message : "say Hi",
  times  : 4
}

greeting = {
  words : "Hello"
} // error : Assignment to constant variable.

gretting.messae = "Say Hello";
```

## 자료형(type)
> 동일한 속성이나 특징을 가진 원소들을 묶은 것
- 원시타입 : 기본형 타입이라고도 불리며 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미
  <br>`Number` `String` `Boolean` `Null` `Undefined`
- 객체타입 : 여러가지 값을 동시에 저장할 수 있는 자료형
  <br>`Object` `Array` `Function` `RegexExp`

### 원시타입
#### ➊ Number 타입 
- 모든 숫자 값 포함, 모든 사칙연산 및 모듈러 연산(%, 나머지) 지원
- `Infinity` 무한대 , `-Infinity` 음수무한대 , `NaN` 수치연산이 실패했을 때의 결과값
#### ➋ String 타입 
- 문자열 타입
- `''`, `""` 로 무조건 감싸줘야함
- 덧셈 연산 지원
```
let myName = "임수연";
let myJob = "개발자";
let introduce = myName + myJob;

console.log(introduce); // 임수연 개발자
```
- 템플릿 리터럴 문법 : 백틱(`)을 이용해서 문자열을 만드면 ${변수명} 을 통해서 변수의 값을 동적으로 문자열에 포함 가능
```
let myName = "임수연";
let myJob = "개발자";
let introduceText = `${myName}의 직업은 ${myJob}입니다.`;

console.log(introduceText); //임수연의 직업은 개발자입니다
```
#### ➌ Boolean 타입
- true이거나 false 인 값을 저장하는 타입, 현재의 상태를 저장하는데 주로 사용
#### ➍ Null 타입
- 아무것도 없다라는 뜻으로 변수에 지금 어떠한 값도 담겨있지 않음을 표현
#### ➎ Undefined 타입
- undefined라는 단 하나의 값만 포함하는 특수한 타입
- 어떠한 변수를 선언하고 그 변수에 어떠한 값도 집어넣지 않았을 때 할당되는 값 (변수 선언 후 초기화가 안 되었을 때)

**❇︎ Null과 Undefined 차이**
<br>: undefined는 어떠한 변수를 선언하고 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값인데
<br>null은 직접 명시적으로 변수에 할당을 해주어야 함
```
// Null Type
let empty = null;

// Undefined Type
let none;
console.log(none); //undefined
```
