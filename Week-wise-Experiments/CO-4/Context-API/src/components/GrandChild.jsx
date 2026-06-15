import { useContext } from "react";
import UserContext from "../context/UserContext";
function GrandChild() {
 const username = useContext(UserContext);
 return (
 <div
 style={{
 border: "2px solid red",
padding: "10px",
margin: "10px",
}}
 >
 <h2>GrandChild Component</h2>
<h3>Welcome {username}</h3>
 </div>
 );
}
export default GrandChild;
