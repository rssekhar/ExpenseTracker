import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export default function Login() {
    const { setAuth,registerData,setRegisterData } = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(registerData)
    const [showPassword, setShowPassword] = useState(false) // State to toggle password visibility
    const loginData = {
        email: useRef(),
        password: useRef()
    }

    const [login, setLogin] = useState([])

    const handleCheckbox = () => {
        setShowPassword((prev) => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLogin = {
            email: loginData.email.current.value,
            password: loginData.password.current.value
        }

        const registerDetails = registerData.find((eachVal) => {
            if(eachVal.email === newLogin.email && eachVal.password === newLogin.password){
                return eachVal.id
            }
            else
            {
                return eachVal
            }
        })


        if (registerDetails.email === newLogin.email && registerDetails.password === newLogin.password) {
            setLogin([...login, newLogin])
            alert('Please wait redirectiong to Home page')
            navigate('/home')
            setAuth(true)
            setRegisterData(registerDetails)
        }
        else {
            alert("Please check email or password details are wrong")
            navigate('/login')
        }


    }

    return (
        <>
            <div className="login">
                <form method="post" onSubmit={handleSubmit}>
                    <h2 className="form_title">Login</h2>

                    <div className="form_input">
                        <label htmlFor="email">User Name (Email)</label>
                        <input type="email" name="email" id="email" required ref={loginData.email} />
                    </div>

                    <div className="form_input">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"} // Toggle type here
                            name="password"
                            id="password"
                            required
                            ref={loginData.password}
                        />
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            id="show_psd"
                            name="show_psd"
                            onChange={handleCheckbox}
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
                            No Account? <Link to="/register">Create Account</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}
