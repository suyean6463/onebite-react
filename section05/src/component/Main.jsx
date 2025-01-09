// JSX : 자바스크립트와 HTML의 장점을 살려 효율적으로 UI 구성하는데 도움, 즉 확장된 자바스크립트 문법(Javascript Extensions)

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 랜더링
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 하나여야 함 - <></> 최상위 태그로 빈 태그 사용 가능

import './Main.css';

function Main(){
  const user = {
    name : '임수연', 
    isLogin : true
  };

  if(user.isLogin){
    return(<div className='logout'>로그아웃</div>);
  }else{
    return(<div>로그인</div>);
  }
  /* return(
    <>
      {user.isLogin ? (
        <div>로그아웃</div>
      ):(
        <div>로그인</div>
      )}
    </> 
  ); */
}

export default Main;