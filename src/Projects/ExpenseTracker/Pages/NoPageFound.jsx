import { Link } from "react-router-dom"
export default function NoPageFound() {
    return (
        <>
            <div className="not_found">
                <h3>Page Not Found. Go To <Link to="/">Home</Link> Again.</h3>
            </div>
        </>
    )
}