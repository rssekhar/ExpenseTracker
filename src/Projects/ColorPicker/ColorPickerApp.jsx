import { useState } from "react";
import './ColorPicker.css'
export default function ColorPicker()
{
    const [color,setColor] = useState("")
    const inputHandler = (e) =>{
        setColor(e.target.value);
    }
    document.body.style.backgroundColor = color
    
    return (
        <>
        
        <div className="container">
            <div>
                <h1>Color Picker App</h1>
            </div>
            <div>
                
                <input type="color" name="app_color" id="app_color" onChange={inputHandler} value={color}/>
            </div>
            <div>
                <h3>{color}</h3>
            </div>
        </div>
        </>
    )
}