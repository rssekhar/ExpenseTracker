import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { MdDeleteForever } from "react-icons/md";

export default function Home() {
    const { registerData, inc_trans, exp_trans, setIncTrans, setExpTrans } = useContext(AuthContext)
    // console.log('income', inc_trans, exp_trans)

    const totalIncome = inc_trans.reduce((sum, item) => sum + Number(item.amount), 0)
    const totalExpense = exp_trans.reduce((sum, item) => sum + Number(item.amount), 0)
    const balance = totalIncome - totalExpense

    const handleIncDelete = (id) => {
        const newData = inc_trans.filter((eachVal) => {
            return eachVal.id !== id
        })
        const conf = window.confirm("Are you sure you want to delete the transaction?")
        if(conf)
        {
            setIncTrans(newData)
        }
        
    }
    const handleExpDelete = (id) => {
        const newData = exp_trans.filter((eachVal) => {
            return eachVal.id !== id
        })
        const conf = window.confirm("Are you sure you want to delete the transaction?")
        if(conf)
        {
            setExpTrans(newData)
        }
    }

    return (
        <>
            <div className="center_data">
                <div>
                    <h3>Welcome</h3>
                    <p>Email ID : {registerData.email}</p>
                </div>


            </div>
            <div className="home_tracker">

                <div><strong>Total Income:</strong> <br />₹{totalIncome}</div>
                <div><strong>Total Expense:</strong><br /> ₹{totalExpense}</div>
                <div><strong>Balance:</strong> <br /> ₹{balance}</div>

            </div>
            <hr/>
            <div>
                <h3 style={{textAlign:"center"}}>Recent Transactions</h3>
            </div>
            <div className="home_tracker">
                <div>
                    <h3>Income</h3>
                    {
                        inc_trans.length > 0 ? (
                            inc_trans.map((eachVal) => {
                                const { id, amount, date } = eachVal
                                return (
                                    <div key={id}>
                                        <p>Rs (₹) - {amount}</p>
                                        <p>Date - {date}</p>
                                        <button onClick={() => handleIncDelete(id)}><MdDeleteForever /></button>
                                    </div>
                                )
                            })
                        ) : "No Data Found"
                    }
                </div>
                <div>
                    <h3>Expenses</h3>
                    {
                        exp_trans.length > 0 ? (
                            exp_trans.map((eachVal) => {
                                const { id, amount, date, action } = eachVal
                                return (
                                    <div key={id}>
                                        <p>Rs (₹) - {amount}</p>
                                        <p>Date - {date}</p>
                                        <button onClick={() => handleExpDelete(id)}><MdDeleteForever /></button>
                                    </div>
                                )
                            })
                        ) : "No Data Found"
                    }
                </div>
            </div>

        </>
    )
}