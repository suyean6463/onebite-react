# 02. JavaScript 심화

## Truthy & Falsy
> 자바스크립트는 boolean 타입에 해당하는 참이거나 거짓이지 않아도 상황에 따라 참이나 거짓으로 판단하는 경우가 있음.<br>
참이가 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
- Truthy : 참 같은 값, 참은 아니지만 조건문 내에서 참으로 평가되는 값
  - 아래 7가지 Falsy한 값들을 제외한 모든 값
- Falsy : 거짓 같은 값, 거짓은 아니지만 조건문 내에서 거짓으로 평가되는 값
  - `undefined` `null` `0` `-0` `NaN` `""`(빈문자열) `0n`(Big Integer라는 특수한 자료형, 아주아주 큰 숫자를 저장)
- Javscript의 모든 값은 Truthy 하거나 Falsy 함
```
if(123){
  console.log("123 is true"); // 출력
}else{
  console.log("123 is fasle");
}

if(undefined){
  console.log("undefined is true");
}else{
  console.log("undefined is false"); // 출력
}
```
- 활용사례
```
function printName(person){
  if(!person){
    console.log("person에 값이 없습니다");
    return;
  }
  console.log(person.name);
}

let person = {name : "임수연"};
printName(person);
```

## 단락평가
> AND 나 OR 같은 논리 연산식에서 첫번째 피연산자의 값만으로도 해당 연산의 결과를 확정할 수 있어 두번째 피연산자의 값에 접근하지 않는 자바스크립트의 특징
- ➊의 경우 단락평가 : returnFalse() 함수의 호출 값이 false, AND연산자에서는 false 다음에 오는 어떤 피연산자든 결과값이 false 이기 때문에 두번째 피연산자에 접근 필요가 없어 함수 호출 생략
- ➋의 경우 단락평가 X : returnTrue() 함수의 호출 값이 true, AND연산자에서는 true 다음에 오는 피연산자의 결과값에 따라 true 또는 false로 달라질 수 있기 때문에 두번째 피연산자 호출 필요
- ➌의 경우 단락평가 : returnTrue() 함수의 호출 값이 true, OR 연산자에서는 true 다음에 오는 어떤 피연산자든 결과값이 true 이기 때문에 두번째 피연산자에 접근 필요가 없어 함수 호출 생략
```
function returnFalse(){
  console.log("False 함수");
  return false;
}

function returnTrue(){
  console.log("True 함수");
  return true;
}

➊ console.log(returnFalse() && returnTrue()); // False 함수, false (단락평가)
➋ console.log(returnTrue() && returnFalse()); // True 함수, False 함수, false
➌ console.log(returnTrue() || returnFalse()); // True 함수, true (단락평가)
```
- Truthy 나 Falsy한 값에도 해당
```
function returnFalse(){
  console.log("False 함수");
  return undefined;
}

function returnTrue(){
  console.log("True 함수");
  return 10;
}

console.log(returnTrue() || returnFalse()); // True 함수, 10 (단락평가)
console.log(returnFalse() && returnTrue()); // False 함수, undefined (단락평가)
```
- 활용 사례
  - name 값 undefined, Falsy한 값과 Truthy한 값 OR 연산자 결과 값은 Truthy한 값
  - name 값 임수연, OR 연산자 결과 값 둘 다 Truthy한 값으로 첫번째 피연산자 값 반환<br>반대로 AND 연산자인 경우 두번째 피연산자 값 반환
```
function printName(person){
  const name = person && person.name;
  console.log(name || "person의 값이 없습니다");
}

printName(); // person의 값이 없습니다
printName({name : "임수연"}); // 임수연
```

## 구조 분해 할당
> 배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

### 배열의 구조 분해 할당
```
ler arr = [1,2,3];

let [one, two, three, fout = 4] = arr; // 각각의 변수에 arr 배열 값 할당
console.log(one, two, three); // 1,2,3
console.log(one, two, three ,four); // 1,2,3,4
```

### 객체의 구조 분해 할당
```
let person = {
  name : "임수연";
  age : 28;
}

let {name, age} = person; // 각각의 변수에 person 객체 값 할당
console.log(name, age}; // 임수연, 28
```
- 객체 구조 분해 할당을 이용한 함수의 매개변수를 받는 방법
```
let person = {
  name : "임수연";
  age : 28;
}
const func ({name, age}) => {
  console.log(name,age); // 임수연, 28
};

func(person);
```

## Spread 연산자와 Rest 매개변수

### Spread 연산자
> `...` 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
```
let arrA = [1,2,3];
let arrB = [4,...arrA,5,6];

console.log(arrB); // 4,1,2,3,5,6
```

### Rest 매개변수
> `...rest` 나머지 매개변수

- rest 라는 매개변수에 함수를 호출하면서 전달한 모든 인수들이 배열로 저장
```
let arrA = [1,2,3];
function funcB(...rest){
  console.log(rest); // [1,2,3];
}

funcB(...arrA);
```
- rest 라는 매개변수는 나머지 인수들을 배열에 저장하는 거다보니 뒤에는 추가적으로 매개변수 선언 X
```
let arrA = [1,2,3,4,5,6];
function funcB(one,two,...rest){
  console.log(rest); // [3,4,5,6];
}

funcB(...arrA);
```
