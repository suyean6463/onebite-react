const Controller = function({onClickButton}){
  return(
    <div className="wrap_btn">
      <button type="button" className="btn_counter" onClick={() => {
        onClickButton(-100);
      }}>-100</button>
      <button type="button" className="btn_counter" onClick={() => {
        onClickButton(-10);
      }}>-10</button>
      <button type="button" className="btn_counter" onClick={() => {
        onClickButton(-1);
      }}>-1</button>
      <button type="button" className="btn_counter" onClick={() => {
        onClickButton(1);
      }}>+1</button>
      <button type="button" className="btn_counter" onClick={() => {
        onClickButton(10);
      }}>+10</button>
      <button type="button" className="btn_counter" onClick={() => {
        onClickButton(100);
      }}>+ 100</button>
    </div>
  )
}

export default Controller;

//https://chatgpt.com/g/g-FvT4UOsoA-caesgpt/c/67862712-8c88-800d-bfcc-0298fb837424