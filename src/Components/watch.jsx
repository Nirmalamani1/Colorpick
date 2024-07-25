import React, { useState, useRef } from 'react'

function Watch() {
    const [start, setstart] = useState("")
    const [stop, setstop] = useState("")
    const [restart, setrestart] = useState("")
    const time = useRef("")

    const timeStart = () => {
        setstart(Date.now());
        setstop(Date.now());

        clearInterval(time.current);
        time.current = setInterval(()=> {
            setstop(Date.now())
        },10);
    }

    const timeStop = () => {
        clearInterval(time.current);
        setstop(Date.now());
    }
        let pass = 0;
        if(start != 0 && stop != 0)
            {
                pass = (stop - start) / 1000;
            }
    
            const reStart = () => {
                setrestart(restart)
                let pass = 0;
            }
    return (
        <div>
            <h1>Time Start : {pass.toFixed(3)}</h1>
            <button onClick={timeStart}>Start</button>
            <button onClick={timeStop}>Stop</button>
            <button onClick={reStart}>Restart</button>
        </div>
    )
}

export default Watch