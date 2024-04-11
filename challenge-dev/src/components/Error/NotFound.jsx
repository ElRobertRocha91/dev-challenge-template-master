import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div>
            <h1>Error404: Page not found</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default NotFound;