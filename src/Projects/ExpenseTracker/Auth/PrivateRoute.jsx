import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

export default function PrivateRoute({ children }) {
    const { auth } = useContext(AuthContext)
    return (
        <>
            {
                auth ? children : <Navigate to="/login" replace/>
            }
        </>
    )
}