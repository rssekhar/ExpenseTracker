import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { AuthContext } from "../Context/AuthContext"

export default function Register() {
    const navigate = useNavigate()
    const { setAuth ,setRegisterData} = useContext(AuthContext)
    const userInfo = {
        email: useRef(),
        password: useRef(),
        cpassword: useRef()
    }

    const [data, setData] = useState([])
    const [showPassword, setShowPassword] = useState(false) // <-- State for show/hide password

    const handleSubmit = (e) => {
        e.preventDefault()

        if (userInfo.password.current.value !== userInfo.cpassword.current.value) {
            alert("Password and Confirm Password should be same")
            return
        }

        const newUser = {
            id: uuidv4(),
            email: userInfo.email.current.value,
            password: userInfo.password.current.value,
            cpassword: userInfo.cpassword.current.value
        }
        setData([...data, newUser])
        alert("User Register Successfully")
        // setAuth(true)
        navigate('/login')
    }

    useEffect(()=>{
        setRegisterData(data)
    },[data])

    // Toggle password visibility
    const handleCheckbox = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <>
            <div className="register">
                <form method="post" onSubmit={handleSubmit}>
                    <h2 className="form_title">Create Account</h2>

                    <div className="form_input">
                        <label htmlFor="email">User Name (Email)</label>
                        <input type="email" name="email" id="email" required ref={userInfo.email} />
                    </div>

                    <div className="form_input">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            required
                            ref={userInfo.password}
                        />
                    </div>

                    <div className="form_input">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="cpassword"
                            id="cpassword"
                            required
                            ref={userInfo.cpassword}
                        />
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="show_psd"
                            id="show_psd"
                            onChange={handleCheckbox}  // Correctly call the function here
                            checked={showPassword}
                        />{" "}
                        &nbsp;
                        <label htmlFor="show_psd">Show Password</label>
                    </div>

                    <div className="form_input">
                        <button type="submit">Submit</button>
                    </div>

                    <div className="form_input">
                        <p>
                            Already Have an Account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}
