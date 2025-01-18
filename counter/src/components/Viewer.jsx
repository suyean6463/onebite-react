const Viewer = function({count}){
  return(
    <div>
      <strong className="tit_counter">현재 카운트</strong>
      <span className="num_counter">{count}</span>
    </div>
  )
}

export default Viewer;