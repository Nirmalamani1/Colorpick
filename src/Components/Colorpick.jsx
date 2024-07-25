import React,{useState} from 'react'
import './Colorpick.css'

function Colorpick() {
    const [get, setget] = useState("#fffff")
    const myfunc = (e) =>
        {
            setget(e.target.value)
        }
  return (
    <>
    <div className="box" style={{backgroundColor:get}}>
        <p>{get}</p>
    </div>
    <input type="color" value={get} onChange={myfunc} />
    </>
  )
}

export default Colorpick