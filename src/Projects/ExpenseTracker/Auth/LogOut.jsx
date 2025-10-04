import { Link } from "react-router-dom"
export default function LogOut() {
    return (
        <>
            <div className="logout">
                <h3>LogOut Successfully Please <Link to="/login">Login</Link> Again.</h3>
            </div>
        </>
    )
}