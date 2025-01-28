# 02. JavaScript 심화

## 원시타입과 객체타입 차이
> 원시타입과 객체타입으로 구분하는 이유는 값이 저장되거나 복사되는 과정이 다르기 때문임
- 원시타입(불변값) : 값 자체로써 변수에 저장되고 복사
  - 메모리 값 수정이 안되며, 변수 값이 복사되거나 수정되면 메모리에 저장되는 칸이 늘어남
- 객체타입(가변값) : 참조값을 통해 변수에 저장되고 복사
  - 메모리 값 수정 가능하며, 변수 값이 복사되어도 같은 참조값을 가르키고 만약 수정되며 기존 메모리에 저장된 참조값이 수정됨
 
### 객체타입을 다룰 때 주의해야할 점
- 의도치 않게 값이 수정될 수 있음, 하나의 변화가 또 다른 변수의 변화를 가져올 수 있음 → Side Effect
  - 스프레드 연산자를 이용해 새로운 배열이나 객체를 생성하고 내부 프로퍼티만 따로 복사해오는 방식을 이용해야함
- 객체간의 비교는 기본적으로 참조값을 기준으로 이루어짐
  - o1과 o3는 같은 객체이지만 참조값이 서로 다른 객체로 o1과 o3는 서로 다름
  - 참조값이 아닌 프로퍼티를 기준으로 두 객체를 비교하고 싶다면 JSON.stringify() 활용<br>
   ```JSON.stringify()``` 는 자바스크립트 내장 함수로 객체를 문자열로 변환하는 기능
```
let o1 = {name : "임수연"};
let o2 = o1; // 얕은 복사
let o3 = {...o1}; // 깊은 복사

console.log(o1 === o2); // true
console.log(o1 === o3); // false, 얕은 비교
console.log(
  JSON.stringify(o1) === JSON.stringify(o3) // 깊은 비교
);
```
- 배열과 함수도 객체임
  - 프로퍼티나 매서드를 가질 수 있음
  
## 반복문을 이용하여 배열과 객체 순회
> 순회란, 배열과 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 의미

### 배열 순회
- `arr.length` : 모든 배열에는 배열의 길이를 저장하는 length 라는 프로퍼티가 내장되어 있음
- `for of` 반복문은 배열을 순회하기 위해서만 존재하는 반복문
  - of 뒤에 오는 배열의 값을 하나씩 순서대로 변수 item에 저장 (변수명은 바뀔 수 있음) 
```
let arr = [1,2,3];

// for 반복문 (index 활용 가능)
for(let i=0; i<arr.length; i++){
  console.log(arr[i]); // 1,2,3
}

// for of 반복문
for(let item of arr){
  console.log(item);
}
```

### 객체 순회
- `Object.keys` : 객체에서 key 값들만 뽑아서 새로운 배열로 반환
- `Object.values` : 객체에서 value 값들만 뽑아서 새로운 배열로 반환
- `for in` 반복문은 객체를 순회하기 위해서만 존재하는 반복문
  - in 뒤에 오는 객체의 프로퍼티의 key를 하나씩 순서대로 변수 key에 저장 (변수명은 바뀔 수 있음) 
```
let person = {
  name : "임수연",
  age : 28
};

// Object.keys 사용
let keys = Object.keys(person);
console.log(keys); // [name, age]

for(let i=0; i<keys.length; i++){
  console.log(key[i]); // name, age
}
for(let key of keys){
  const value = person[key];
  console.log(key, value); // name 임수연, age 28
}

// Object.values 사용
let values = Object.values(person);
console.log(values); // ["임수연", 28]

for(let value of values){
  console.log(value); // 임수연, 28
}

// Object.values 사용
for(let key in person){
  console.log(key); // name, age
}
```

## 배열 메서드

### 메서드 종류
- `push` : 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
- `pop` : 배열의 맨 뒤에 있는 요소를 제거하고 반환하는 메서드
- `shift` : 배열의 맨 앞에 있는 요소를 제거하고 반환하는 메서드
- `unshift` : 배열의 맨 앞에 새로운 요소를 추가하는 메서드
- `slice` : 배열의 특정 범위를 잘라내서 새로운 배열로 반환하는 메서드
- `concat` : 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환하는 메서드
```
ler arr = [1,2,3];

// push
const newArr = arr.push(4,5,6);
console.log(newArr); //[1,2,3,4,5,6]

// pop
const poppedArr = arr.pop();
console.log(poppedArr); // 3, [1,2]

// shift
const shiftArr = arr.shift();
console.log(shiftArr); // 1, [2,3]

// unshift
const unshiftArr = arr.unshift(0);
console.log(unshiftArr); // [0,1,2,3]

// slice
let arr2 = [1,2,3,4,5];
const sliceArr = arr2.slice(2,5); //slice(자르기 시작할 인덱스, 잘라낼 범위 끝 인덱스+1)
console.log(sliceArr); // [3,4,5]

const sliceArr2 = arr2.slice(-2); // 뒤에서부터 자르는 경우 -를 붙여주면 됨
console.log(sliceArr2); // [4,5]

// concat
let arrA = [1,2];
let arrB = [3,4];

let concatedArr = arrA.concat(arrB);
console.log(concatedArr); //[1,2,3,4]
```

### 순회와 탐색
- `forEach` : 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
- `includes` : 배열에 특정 요소가 있는지 확인하는 메서드
- `indexOf` : 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
- `findIndex` : 특정 요소의 인덱스(위치)를 반환하는 메서드, 모든 요소를 순회하면서 콜백함수를 만족하는 메서드
- `find` : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 그대로 반환
```
let arr = [1,2,3];

// forEach
arr.forEach(function(item, index){
  console.log(index + ":" + item*2); // 0:2 , 1:4, 2:6
})

// includes
let isInclude = arr.includes(3);
console.log(includes); // true

// indexOf (얕은 비교)
let indexA = arr.indexOf(2);
let indexB = arr.indexOf(20);
console.log(indexA); // 1
console.log(indexB); // -1 (존재하지 않음을 의미)

// findIndex (깊은 비교)
const findedIndex = arr.findIndex(function(item){
  if(item === 2) {return true;}
})
console.log(findedIndex); // 1

// find
let person = [
  {name : "임수연"},
  {name : "홍길동"}
]
const finded = person.find(function(item){
  if(item.name === "임수연"){return true;}
})
console.log(finded); // {name : "임수연"}
```

### 배열 변형
- `filter` : 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환하는 메서드
- `map` : 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환하는 메서드
- `sort` : 배열을 사전 순으로 정렬하는 메서드
- `toSorted` : 원본 배열을 놔두고 정렬된 새로운 배열을 반환하는 메서드
- `join` : 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
  - 구분자를 바꿔주고 싶으면 `join("-")` `join(" ")` `join("|")` 등 사용 가능
```
let person = [
  {name : "임수연" , hobby : "테니스"},
  {name : "이정환" , hobby : "테니스"},
  {name : "홍길동" , hobby : "독서"}
];

// filter
const tennisPeople = person.filter(function(item){
  if(item.hobby === "테니스"){return true;}
})
console.log(tennisPeople); // [{name : "임수연" , hobby : "테니스"}, {name : "이정환" , hobby : "테니스"}]

// map
let arrA = [1,2,3];
const mapResult = arrA.map(function(item){
  return item*2;
})
console.log(mapResult); [2,4,6]

let names = person.map(function(item){
  return item.name;
})
console.log(names); // [임수연, 이정환, 홍길동]

// sort
// 문자열 사전 순으로 정렬
let arrB = ['b','c','a'];
arrB.sort();

console.log(arrB); // ['a','b','c']

// 숫자 크기 순으로 정렬 (오름차순, 내림차순인 경우는 반대로)
let arrC = [10,3,5];
arrC.sort(function(a,b){
  if(a>b){return 1;} // b가 a 앞으로 정렬
  else if(a<b){return -1;} // a가 b 앞으로 정렬
  else{return 0;} // a,b 자리 그대로 유지
})
console.log(arrC); // [3,5,10]

// toSorted
let arrD = ['c','a','b'];
const sortedArr = arrD.toSorted();

console.log(arrD); // ['c','a','b']
console.log(sortedArr); // ['a','b','c']

// join
let helloArr = ['hi', 'hello'];
const joined = helloArr.join();

console.log(joined); // hi, hello
```

## Date 객체와 날짜

### Date 객체를 생성하는 방법
```
let date1 = new Date(); // 생성자
```
- 생성자 내부가 비어있으면 default로 현재 시간 출력
- Date 객체를 특정 날짜나 특정 시간을 기준으로 생성하고 싶으면 생성자 내부에 특정 날짜나 시간 표기
  - `new Date("1997/07/09")`
- Date 객체는 날짜 정보 뿐만 아니라 시간 정보도 함게 설정 가능
  - `new Date("1997/07/09/10:10:10")`

### 타임 스태프
> 특정 시간이 "1970년 1월 1일 00시 00분 00초" 인 UTC 기준으로 몇 ms가 지났는지 의미하는 숫자값
- `getTime` : date 객체 안에 저장되어 있는 시간에 해당하는 타임스태프를 반환해주는 메서드
```
let ts1 = date1.getTime();
console.log(ts1); 
```

### 시간 요소들을 추출하는 방법
- `getFullYear` : 년도를 추출하는 메서드
- `getMonth` : 월을 추출하는 메서드
- `getDate` : 일을 추출하는 메서드
- `getHours` : 시간을 추출하는 메서드
- `getMinutes` : 분을 추출하는 메서드
- `getSeconds` : 초를 추출하는 메서드
```
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes() + 1; // index와 동일하게 작동
let second = date1.getSeconds();
```

### 시간을 수정하는 방법
```
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);

// 2023년 3월 30일
```

### 시간을 여러 포맷으로 출력하는 방법
- `toDateString` : 시간 정보는 제외하고 날짜 정보만 문자열로 출력
- `toLocaleString` : toDateString() 과 동일하지만 현지와된 형태로 출력
