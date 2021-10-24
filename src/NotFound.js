import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>EROOR 404 </h2>
            <br></br>
            <p>Sorry,Page not Found</p>
            <br></br>
            <Link to='/'>
                <button> Back to home page</button> 
           </Link>
        </div>
     );
}
 
export default NotFound;