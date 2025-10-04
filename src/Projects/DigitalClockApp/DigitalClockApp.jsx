import { useEffect, useState } from "react";
import './DigitalClockApp.css'
export default function DigitalClockApp() {
    const [timer, setTimer] = useState("")

    useEffect(() => {
        
        setInterval(() => {
            const time = `${new Date().getHours()} Hours : ${new Date().getMinutes()} Minutes :  ${new Date().getSeconds()} Seconds `;
            setTimer(time);
        }, 1000)
        return () => clearInterval()
    }, [timer])
    return (
        <>
            <div className="container">
                <div>
                    <h1>Digital Clock App</h1>
                </div>
                <div>
                    <p>Learning Starts At</p>
                    <h3>{ timer }</h3>
                </div>
            </div>
        </>
    )
}