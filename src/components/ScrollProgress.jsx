import { useEffect, useState } from "react";

function ScrollProgress(){

const[scroll,setScroll]=useState(0);

useEffect(()=>{

const handle=()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

setScroll((window.scrollY/total)*100);

}

window.addEventListener("scroll",handle);

return()=>window.removeEventListener("scroll",handle);

},[])

return(

<div

className="fixed top-0 left-0 h-1 bg-blue-600 z-[100]"

style={{width:`${scroll}%`}}

>

</div>

)

}

export default ScrollProgress;