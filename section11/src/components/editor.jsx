import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = function(){
  const {onCreate} = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit();
    }
  }

  const onSubmit = () => {
    if(content === ''){
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  }

  return (
    <div className="editor">
      <input type="text" ref={contentRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 할일을 등록하세요" />
      <button type="button" onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;