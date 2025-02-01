import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = function({id, isDone, content, date}){
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return(
    <li>
      <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
      <span className="txt_todo">{content}</span>
      <span className="txt_date">{new Date(date).toLocaleDateString()}</span>
      <button type="button" onClick={onClickDeleteButton}>삭제</button>
    </li>
  )
}

export default memo(TodoItem);