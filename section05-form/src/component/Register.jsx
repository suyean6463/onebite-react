import { useState } from "react";

// 간단한 회원가입 폼
// ➊ 이름
// ➋ 생년월일
// ➌ 국적
// ➍ 자기소개


const Register = function(){
  const [name, setName] = useState('임수연');// 초기값 useState('임수연') / 없을 경우 빈 태그 useState('')
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('안녕하세요');

  // ➊ 이름을 입력하는 폼에 텍스트를 입력하게되면 onChangeName 실행
  // 현재 input에 입력된 값을 받아와서 setName 함수를 호출해서 name State에 보관
  const onChangeName = function(e){
    // console.log(e); e.target.value를 살펴보면 입력된 값이 들어가있음
    setName(e.target.value);
  }

  // ➋ 생년월일
  const onChangeBirth = function(e){
    setBirth(e.target.value);
  }

  // ➌ 국적
  const onChangeCountry = function(e){
    setCountry(e.target.value);
  }

  // ➍ 자기소개
  const onChangeBio = function(e){
    setBio(e.target.value);
  }

  return(
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"}></input>
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  )
}

export default Register;