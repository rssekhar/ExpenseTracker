// import CounterApp from "./Projects/CounterApp/CounterApp";
// import DigitalClockApp from "./Projects/DigitalClockApp/DigitalClockApp";

// import ToDoApp from "./Projects/ToDo App/ToDoApp";

// import ColorPicker from "./Projects/ColorPicker/ColorPickerApp";

import { useState } from "react"
import LayOut from "./Projects/ExpenseTracker/LayOut"
import './Projects/ExpenseTracker/style.css'
import { AuthContext } from "./Projects/ExpenseTracker/Context/AuthContext"


export default function App() {
  const [auth, setAuth] = useState(false)
  const [registerData,setRegisterData] = useState([])
  const [inc_trans,setIncTrans] = useState([])
  const [exp_trans,setExpTrans] = useState([])

  const store = {
    auth,
    setAuth,
    registerData,
    setRegisterData,
    inc_trans,setIncTrans,
    exp_trans,setExpTrans
  }
  return (
    <>
      <AuthContext.Provider value={store}>
        {/* <CounterApp/> */}
        {/* <ColorPicker/> */}
        {/* <ToDoApp/> */}
        {/* <DigitalClockApp/> */}
        <LayOut />
      </AuthContext.Provider>

    </>
  )
}