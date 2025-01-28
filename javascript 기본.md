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

### 형 변환
> 어떤 값의 타입을 다른 타입으로 변경하는 것을 의미
#### 묵시적(암묵적) 형 변환
- 개발자가 직접 설정하지 않아도 자바스크립트 엔진이 형 변환 하는 것을 의미
- 결과값으로 1020 출력, 묵시적 형 변환으로 number 타입인 num이 string 타입으로 변환
```
let num = 10;
let str = "20";

const result = num + str; // 1020
```
#### 명시적 형 변환
- 개발자가 직접 함수 등을 이용해 형 변환을 하는 것
- 결과값으로 10 출력, string 타입을 Number()라는 내장함수를 통해 number 타입으로 변환
```
let str = "10";
const strtoNum = Number(str); // 10
```
- 변수에 숫자가 아닌 문자열을 포함하고 있을 때는 Number()라는 내장함수로는 Nan이라는 값이 출력되어<br>parseInt()라는 내장함수를 통해 형변환을 시켜주어야 10이라는 값이 출력됨
```
let str = "10개";
let strtoNum = parseInt(str); // 10
```
- 숫자 앞에 abc10 이렇게 문자열이 붙는 경우 정상적으로 형변환이 안 이뤄질 수 있음
- String() 내장함수를 통해 number 타입 변수를 string 타입 변수로 변환가능

### 연산자
> 프로그래밍에서 다양한 연산을 위한 기호나 키워드
- 대입연산자 `=` : 변수의 값을 저장할 때 사용하는 기초적인 연산자
- 산술연산자 `+` `-` `*` `/` `%` : 더하기 빼기 곱하기 나누기 모듈러 연산이 가능하게끔 해주는 연산자
- 복합대입연산자 `+=` `-=` `*=` `/=` `%=` : 복합되어 있는 대입연산자란 뜻(산술연산자+대입연산자)
- 증감연산자 `++` `--` : 1씩 줄이거나 1씩 늘릴 때 사용하는 연산자
    - 전위연산 : 변수명 앞에 증감연산자를 붙여서 해당 라인에서 즉시 연산
    - 후위연산 : 변수명 뒤에 증감연산자를 붙여서 다음 라인에서 연산
- 논리연산자 : boolean 타입의 값을 다룰 때 사용하는 연산자
- OR 연산자 `||` : 하나의 값만 참이어도 참
- AND 연산자 `&&` : 모든 값이 참이어야 참
- NOT 연산자 `!` : 참이면 거짓, 거짓이면 참
- 비교 연산자 : 두 개의 값을 비교하는 연산자
    - 동등비교연산자 `===` 비동등비교연산자 `!==` : 두 개의 값이 서로 같은지 다른지 비교하는 연산자
    - 대소비교연산자 `>` `<` `>=` `<=` : 값이 크고 작고 비교
- null 병합 연산자 `??` : 존재하는 값을 추려내는 연산자로, null이나 undefined가 아닌 값을 찾아내는 연산자<br>(만약 값 중 null이나 undefined가 없다면 맨 처음에 적힌 값 반환)
```
let var1;
let var2 = 10;

let result = var1 ?? var2;
console.log(result); // 10
```
- TypeOf 연산자 : 값의 타입을 문자열로 반환하는 연산자
- 삼항 연산자 : 항을 3개 사용하는 연산자

### 조건문
> 특정 조건을 만족했을 때 실행되는 코드를 작성하기 위한 문법으로 `if` `switch` 문이 있음
#### if 문
- if(조건문){실행문} : 조건문이 참이면 실행, 조건문이 거짓이면 실행되지 않음
- if(조건문){실행문a} else {실행문b} : 조건문이 참이면 실행문a 실행, 거짓이면 실행문b 실행
- if(조건문){실행문a} else if(조건문) {실행문b} else {실행문c} : 조건문이 참이면 실행문a 실행, else if 조건문이 참이면 실행문b 실행, 모두 거짓이면 실행문c 실행
#### switch 문
- if문과 기능 자체는 동일하나 다수의 조건을 처리할 때 더 직관적이라는 장점이 있음
- 비교하고 싶은 변수 값과 비교값이 동일하면 해당 실행문이 출력되고 break문을 통해 switch 문 동작 중지
- 만약 비교하고 싶은 변수 값과 동일한 비교값이 없다면 default 문 실행
```
switch(number){
  case '10' : {"숫자 10입니다"; break;}
  case '20' : {"숫자 20입니다"; break;}
  default : {"선언된 숫자가 없습니다.";}
}
```

### 반복문
> 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법
```
for(초기식; 조건식; 증감식;){반복문}
```

### 함수
#### 함수 선언과 호출
> 자바스크립트에서 모든 함수는 function 객체이므로 함수를 선언할 때 function으로 시작
```
// 함수 선언
function greeting(){
  console.log("안녕하세요!");
}

// 함수 호출
greeting();
```
#### 매개변수와 인수
- 매개변수 : 전달된 인수들을 순서대로 저장하는 특수한 함수의 변수
- 인수 : 함수를 호출하면서 함수에게 동적으로 전달하는 값
- 반환값 : 함수 호출의 결과값
```
function getArea(width, height){
  // 매개변수 width, height
  let area = width * height;
  return area; // 반환값
}

let area = getArea(10,20); // 인수 전달
console.log(area); // 200
```
#### 함수 표현식
- 함수표현식 ➊
```
function funcA(){
  console.log('funcA');
}
let varA = funcA;
varA();
```
- 함수표현식 ➋
```
let varB = function(){
  console.log('funcB');
} 

varB();
```
- 화살표 함수
```
let varC = () => {}
```
#### 콜백함수
> 자신이 아닌 다른 함수에, 인수로써 전달된 함수 의미
```
function main(value){
  console.log(value);
  value();
}

function sub(){
  console.log('i am sub');
}

main(sub);

/* 출력되는 값
function sub(){
  console.group('i am sub');
}
i am sub 
*/
```
- 함수표현식을 통해 간단한게 표현 가능
```
1. main(function(){
  console.group('i am sub');
})

2. main(() => {
  console.group('i am sub');
})
```

### 스코프
> 변수나 함수에 접근하거나 호출할 수 있는 범위로 접근 가능 영역을 스코프라고 부름
- 전역 스코프 : 전체 영역에서 접근 가능 
- 지역 스코프 : 특정 영역에서만 접근 가능

### 객체
> 원시타입이 아닌 객체 타입의 자료형으로 여러가지 값을 동시에 저장할 수 있는 자료형 의미
#### 객체 생성
```
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)
```
#### 객체 프로퍼티 (객체 속성)
- 객체의 정보 값으로 객체의 실질적인 정보를 담고 있음
- 프로퍼티 이름(key) : 프로퍼티 값(value)
```
let person = {
  name = "임수연",
  job = "개발자"
}
```
#### 객체 프로퍼티 다루는 방법
- 특정 프로퍼티 접근(점 표기법, 괄호 표기법)
```
let name = person.name;
let job = person["job"];
```
- 새로운 프로퍼티 추가
```
person.favoriteFood = "떡볶이";
person["age"] = "28";
```
- 새로운 프로퍼티 수정
```
person.favoriteFood = "치킨";
```
- 새로운 프로퍼티 삭제
```
delete person.favoriteFood;
delete person["age"];
```
- 프로퍼티 존재유무 확인 (in 연산자)
  - 객체 안에 프로퍼티 존재 유무에 따라 true, false 값 반환 
```
let result = "name" in person;
```

### 상수 객체
> 상수 const에 저장된 객체
```
const animal = {
  type : "고양이",
  name : "나비"
}
```
- 상수에 선언된 값은 다시 바꿀 수 없음
```
animal = {a:1} // 오류발생
```
- 객체에 프로퍼티를 추가, 수정, 삭제하는 것은 가능
```
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.type; // 삭제
```

### 메서드
> 값이 함수인 프로퍼티
```
const person = {
  name : "임수연",
  // 메서드
  sayHi : function(){console.log("안녕!")}
}
```

### 배열(Array)
> 여러개의 값을 순차적으로 담는 자료형
#### 배열 생성
```
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)
```
#### 배열 요소 접근
- index는 무조건 0으로 시작
```
let item1 = arrA[0];
```
