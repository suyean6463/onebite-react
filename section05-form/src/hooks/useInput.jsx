import { useState } from "react";

function useInput (){
  const [input, setInput] = useState('');

  const onChange = function(e){
    setInput(e.target.value);
  }

  return[input, onChange];
}

export default useInput;