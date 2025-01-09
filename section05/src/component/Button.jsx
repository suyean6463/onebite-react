function Button({text, color,children}){
  // 이벤트 객체 - 리액트에서 발생하는 모든 이벤트는 이벤트 핸들러 함수를 호출하면서 호출된 이벤트 함수에 매개변수로 이벤트 객체를 제공
  // SyntheticBaseEvent(이벤트 객체) 객체가 출력 즉, 합성 이벤트 객체
  // 합성 이벤트는 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태로 브라우저 별 스펙이 달라 발생하는 문제인 Cross Browsing Issue를 편리하게 해결해줌
  function onClickButton(e){
    console.log(e)
    console.log(text)
  };

  return (
    <button 
    // Event Handling - 웹 내부에서 발생하는 사용자의 행동을 이벤트라 하며 그것을 처리하는 것을 말함
    onClick={onClickButton}
    //onMouseEnter={onClickButton}
    style={{color:color}
    }>
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