import { useState } from "react";

// 간단한 회원가입 폼
// ➊ 이름
// ➋ 생년월일
// ➌ 국적
// ➍ 자기소개


const Registerrenew = function(){
  const [input, setInput] = useState({
    name : "",
    birth: "",
    country : "",
    bio : ""
  });

  const onChange = function(e){
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  return(
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={"이름"}></input>
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </div>
  )
}

export default Registerrenew;