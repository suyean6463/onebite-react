import { memo } from "react";

const TodoItem = function({id, isDone, content, date, onUpdate, onDelete}){
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

// export default memo(TodoItem, (prevProps, nextProps)=>{
//   if(prevProps.id !== nextProps.id){return false}
//   if(prevProps.isDone !== nextProps.isDone){return false}
//   if(prevProps.content !== nextProps.content){return false}
//   if(prevProps.date !== nextProps.date){return false}

//   return true;
// });

export default memo(TodoItem);