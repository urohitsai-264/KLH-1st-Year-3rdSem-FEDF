import {Link,Outlet} from 'react-router-dom';
const Error=()=>{
    return(
        <>
        <h1>404 - Page Not Found</h1>
        <Link to="/">Go to Home</Link>
        </>
    )
}
export default Error;