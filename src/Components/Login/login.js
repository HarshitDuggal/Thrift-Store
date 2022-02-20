import { useState } from "react";
import './login.css'
const Login = (props) => {
    const users = props.users;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        // console.log(password);
        users.users.map((user)=>{
            if(user.email===email && user.password===password){
                alert("Logged in")
            }
            else{
                alert("Enter right credentials")
            }
        })
    }
    return (
        <div className="login">
            <div className="form">
            <form onSubmit={handleSubmit}>
                <div classname="label1">
                <label  htmlFor="Email">
                    Email:{"    "}
                </label>
                <input name="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br></br>
                <div className="label2">
                <label htmlFor="Password" >
                    Password:{"    "}
                </label>
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" classname="button">Login</button>
            </form>
            </div>            
        </div>
    );
}

export default Login;