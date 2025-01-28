import TodoItem from "./TodoItem";
import { useState } from "react";

const List = function({todos, onUpdate, onDelete}){
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

  return (
    <div className="list">
      <h4>할 일 목록 ✅</h4>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <ul className="list_todo">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} onUpdate={onUpdate} onDelete={onDelete} {...todo} />
        })}
      </ul>
    </div>
  )
}

export default List;