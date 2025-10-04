import { useContext, useEffect, useRef,useState } from "react"
import {v4 as uuidv4} from "uuid"
import { AuthContext } from "../Context/AuthContext"
export default function Expense() {
    const {setExpTrans} = useContext(AuthContext)
    const income = useRef()
    const [amount,setAmount] = useState([])
    const handleSubmit = e =>{
        e.preventDefault()
        const newExp = {
            id : uuidv4(),
            amount : income.current.value,
            action : 'expense',
            date : new Date().toLocaleString()
        }
        setAmount([...amount,newExp])
        alert("Expense Added Successfully")
        income.current.value = ""
    }
    useEffect(()=>{
        setExpTrans(amount)
    },[amount])
    return (
        <>
            <div className="expense">
                <form method="post" onSubmit={handleSubmit}>
                    <h2 className="form_title">Expense</h2>

                    <div className="form_input">
                        <label htmlFor="income">Amount (Rupees)</label>
                        <input type="number" name="income" id="income" required ref={income} />
                    </div>



                    <div className="form_input">
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>

        </>
    )
}