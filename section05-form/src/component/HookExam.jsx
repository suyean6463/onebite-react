import useInput from "./../hooks/useInput";

// 3가지 hook 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문 또는 반복문으로 호출될 수 없음
// 3. 커스텀 훅 만들 수 있음

const HookExam = function(){
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  )
}

export default HookExam;