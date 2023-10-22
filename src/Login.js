import Username from "./Username";
import Password from "./Password";
import { Link } from "react-router-dom";
function Login(){
    return(<div>
        <Username />
        <Password />
        <button>Login</button>
        <label>Dont have an account: </label>
        <Link to="/Signup">Sign Up</Link>
    </div>);
}

export default Login;