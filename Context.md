# React Context
> props를 대체해서 컴포넌트 간의 데이터를 전달하는 또 다른 방법, 기존의 props가 갖고 있는 단점을 보완해줌

### Props의 단점
- Props Drilling : props는 부모 → 자식으로만 데이터를 전달할 수 있음

## Props의 단점을 해결하는 Context
- Context는 데이터 보관소 역할을 하는 객체로, 자식 컴포넌트에 전달되던 함수들을 Context에 보관해놓으면<br>props를 사용하지 않아도 Context를 통해 자식 컴포넌트에 전달 가능
- Context는 여러개 생성 가능

## 최적화가 풀리는 이유
> Context도 결국 객체이기 때문에 value 값이 변하게되면 결국 props가 변하는 것과 같은 효과로 발생하게 됨
### 최적화 문제를 해결하는 방법
- TodoStateContext : 변경될 수 있는 값
- TodoDispatchContext : 변경되지 않는 값
