import UserContext from "./context/UserContext";
import Parent from "./components/Parent";
function App() {
const username = "Anusha";
 return (
<div>
 <h1>Context API Example</h1>
 <UserContext.Provider value={username}>
   <Parent />
</UserContext.Provider>
 </div>
);
}
export default App;