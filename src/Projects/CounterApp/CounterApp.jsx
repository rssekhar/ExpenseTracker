import { useState } from "react"
import './CounterApp.css'
export default function CounterApp() {
    const [count,setCount] = useState(0)

    const handleIncrement = () =>{
        setCount((prev) =>prev + 1)
    }
    const handleReset = () =>{
        setCount(0)
    }
    const handleDecrement = () =>{
        setCount((prev) => prev -1)
    }
    return (
        <>
            <div className="container">
                <div>
                    <h1 className="title">Counter App</h1>
                </div>
                <div>
                    <div>
                        <h3>{count}</h3>
                    </div>
                    <div>
                        <button onClick={handleIncrement}>Increment</button>
                        <button onClick={handleReset}>Reset</button>
                        <button onClick={handleDecrement}>Decrement</button>
                    </div>

                </div>
            </div>
        </>
    )
}