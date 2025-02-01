import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = function(){
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if(search === ""){
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredTodos = getFilteredData();

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {totalCount, doneCount, notDoneCount}
  }, [todos])

  return (
    <div className="list">
      <h4>할 일 목록 ✅</h4>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <ul className="list_todo">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />
        })}
      </ul>
    </div>
  )
}

export default List;