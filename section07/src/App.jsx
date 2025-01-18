import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. Mount
  useEffect(function(){
    console.log("mount");
  } , [])

  // 2. Update
  useEffect(function(){
    // mount되고나서 업데이트 순간에만 실행하고 싶을 때
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  // 3. UnMount

  useEffect(function(){
    console.log(`count : ${count} / input : ${input}`)
  } , [count , input])

  const onClickButton  = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" onChange={function(e){
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App;
