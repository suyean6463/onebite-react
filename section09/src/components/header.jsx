const Header = function(){
  var dt = new Date();

  return (
    <div className="header">
      <h3>오늘의 날짜는 📆</h3>
      <h1>{dt.getFullYear()}년 {dt.getMonth()+1}월 {dt.getDate()}일</h1>
    </div>
  )
}

export default Header;