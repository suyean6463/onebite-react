import { useEffect } from "react";

const Even = function(){
  useEffect(function(){
    return function(){
      console.log("unmount")
    }
  },[])
  return <div>짝수입니다.</div>
}

export default Even;