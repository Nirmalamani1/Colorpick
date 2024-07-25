import React,{useRef} from 'react'
import './New.css';

function New() {
    const myvar  = useRef(0)
    console.log("Hello");
    const myfunc = () =>
        {
            myvar.current =  myvar.current + 1
            alert(`Count ${myvar.current}`)
        }
  return (
    <>
    <button onClick={myfunc}>Click me</button>
    
    </>
  )
}

export default New