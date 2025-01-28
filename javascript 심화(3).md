# 02. JavaScript 심화

## 동기와 비동기
- 동기 : 여러 개의 작업들을 순서대로 하나씩 처리하는 방식, 자바스크립트는 보통 **동기**적으로 코드 실행
  - 쓰레드(thread) : 작업을 직접 실행하고 처리해주는 역할을 하는 것을 의미
  - **동기적 처리 방식의 단점**
    - 작업 처리 시간이 짧으면 문제가 없지만 만약 작업 처리 시간이 긴 경우,<br>쓰레드가 다음 작업을 처리할 수 없어 전체 프로그래밍 성능 저하
    - 해결방안 : 자바스크립트 엔진은 쓰레드가 1개밖에 없어 멀티쓰레드 활용 불가 → 비동기 방식 사용
- 비동기 : 여러 개의 작업들을 순서대로 처리하지 않는 방식
  - 여러개의 작업이 주어졌을 때 앞선 작업이 종료되지 않아도 다음 작업 동시 진행 가능
  - 각각의 작업에 콜백함수를 붙여서 각각의 작업들의 결과값을 이용해 다른 동작 수행 가능
  - 자바스크립트는 엔진이 1개뿐인데 어떻게 동시에 작업을 처리하는지?
    - 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행되기 때문
    - Web APIs : 웹 브라우저가 직접 관리하는 별도의 영역
```
// 자바스크립트 엔진 실행 ➊
console.log(1);

// Web APIs 실행 → 자바스크립트 엔진 콜백함수 리턴 → 자바스크립트 엔진 콜백함수 실행
setTimeout(function(){
  console.log(2);
},3000);

// 자바스크립트 엔진 실행 ➋
console.log(3);


// 결과 1 - 3 - 2
```

## 비동기 작업 처리하기 ➊ 콜백함수
- 간단한 활용예제
```
function add(a, b, callback){
  setTimeout(() => {
    const sum = a+b; /// 3
    callback(sum);
  }, 3000);
}

add(1, 2, (value)=>{
  console.log(value)
});
```
- 심화 활용 예제
```
// 음식을 주문하는 상황
function orderFood(callback){
  setTimeout(()=>{
    const food = "떡볶이";
    callback(food);
  }, 3000)
}

function cooldownFood(food, callback){
  setTimeout(()=>{
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback){
  setTimeout(()=>{
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500)
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood)=>{
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood)=>{
      console.log(freezedFood);
    })
  });
});


// 결과 : 떡볶이 - 식은 떡볶이 - 냉동된 식은 떡볶이
```

## 비동기 작업 처리하기 ➋ Promise
> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체로, Promise 객체는 비동기 작업을 감싸고 있음
- Promise의 효능
  - 비동기 작업 실행
  - 비동기 작업 상태 관리
  - 비동기 작업 결과 저장
  - 비동기 작업 병렬 실행
  - 비동기 작업 다시 실행
  - 기타 등,,
- Promise의 3가지 상태
  - 대기(prepending) : 아직 작업이 완료되지 않은 상태
    - 대기 → 성공 : 해결(resolve)
    - 대기 → 실패 : 거부(reject)
  - 성공(fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
  - 실패(rejected) : 비동기 작업이 실패한 상태

### 비동기 작업 실행하는 함수 : executor
- 성공 사례
```
const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("안녕");
    resolve("안녕");
  }, 2000)
});

setTimeout(()=>{
  console.log(promise);
}, 3000)


// 결과
➊ 안녕
➋ Promise {<fulfilled>: '안녕'}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : "안녕"
```
- 실패 사례
```
const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("안녕");
    reject("실패한 이유,,");
  }, 2000)
});

setTimeout(()=>{
  console.log(promise);
}, 3000)


// 결과
➊ 안녕
➋ Promise {<fulfilled>: '안녕'}
[[Prototype]] : Promise
[[PromiseState]] : "rejected"
[[PromiseResult]] : "실패한 이유,,"
```
- then 메서드 : executor 함수에서 resolve를 호출하게 되면 그 후에 then 메서드에 전달한 콜백함수 실행
- catch 메서드 : executor 함수에서 reject를 호출하게 되면 그 후에 catch 메서드에 전달한 콜백함수 실행
```
const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const num = 10;

    if(typeof num === 'number'){
      resolve(num + 10);
    }else{
      reject("num이 숫자가 아닙니다");
    }
  }, 2000)
});

// then 메서드
promise.then((value)=>{
  console.log(value);
})

// catch 메서드
promise.catch((error)=>{
  console.log(error);
})


// 결과
num이 숫자인 경우(resolve) : 20
num이 숫자가 아닌 경우(reject) : num이 숫자가 아닙니다
```
- promise chaining : 메서드가 객체를 반환하게 되면 메서드의 반환 값인 객체를 통해 또 다른 함수를 호출할 수 있음
```
promise
  .then((value)=>{
    console.log(value);
  })
  .catch((error)=>{
    console.log(error);
  })
```
- function() 활용
```
function add10(num){
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(typeof num === 'number'){
        resolve(num + 10);
      }else{
        reject("num이 숫자가 아닙니다");
      }
    }, 2000)
  });

  return promise;
}

const p = add10(0);
p.then((result)=>{
  console.log(result);

  const newP = add10(result);
  newP.then((result)=>{
    console.log(result);
  })
});


// 결과 : 10 - 20
```
- function() 활용 : 콜백 지옥 해결
```
const p = add10(0);
p.then((result)=>{
  console.log(result);

  const newP = add10(result);
  return newP;
}).then((result)=>{
  console.log(result);
});


// 간결하게 표기 및 catch 메서드 사용
add10(0).then((result)=>{
  console.log(result);

  return add10(result);
}).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
});
```

## 비동기 작업 처리하기 ➋ Async&Await
- Async : 어떤 함수를 비동기 함수로 만들어주는 키워드, 함수가 promise를 반환하도록 변환해주는 키워드
```
async function getData(){
  return{
    name : '임수연'
  };
}

console.log(getData());
```
- Await : Async 함수 내부에서만 사용이 가능한 키워드, 비동기 함수가 다 처리되기를 기다리는 역할
  - async 붙은 함수 내에서만 사용 가능, 그렇지 않은 경우 오류 발생
```
async function getData(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        name : '임수연',
      });
    }, 1500)
  });
}

async function printData(){
  const data = await getData();
  console.log(data);
}

printData();
```
