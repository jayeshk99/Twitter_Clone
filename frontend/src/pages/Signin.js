import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Twitter } from '@material-ui/icons';
import { MdOutlineClear } from "react-icons/md";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { ExternalAuth } from "../components/Externalauth";
import "./styles/signin.css"
export const Signin = ()=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");

    const HandleSignIn = ()=>{
        const auth = getAuth();

       if (email && password){
        signInWithEmailAndPassword(auth,email,password).then((res)=>{
            sessionStorage.setItem('AuthToken',res.user.uid)
        }).catch((err)=>{
            console.log(err.message);
            alert('Wrong user Credentials');
        })
       }
       const user = sessionStorage.getItem('AuthToken');
       if (user){
           navigate('/');
       }
    }
    return (
        <div className="signin-container">
            <div className="inner-wrapper">
                <div className="logo">
                    <button onClick={()=>{
                        navigate('/signup')
                    }}><MdOutlineClear style={{
                        width: "20px",
                        height: "auto",
                        color: "white",
                    }}/></button>
                    <Twitter style={{
                        width: "50px",
                        height: "auto",
                        color: "white",
                    }}/>
                </div>
                <div className="signin-form">
                    <div className="head">
                        <p>Sign in to Twitter</p>
                    </div>
                    <div className="ext-auth">
                        <ExternalAuth text={"Signin"}/>
                    </div>
                    <div className="divider">
                        <div></div>
                        <div>or</div>
                        <div></div>
                    </div>
                    <div className="outer-form">
                        <div>
                            <input type="text" placeholder="Phone,email or username" onChange={(e)=>{
                                setEmail(e.target.value)
                                setPhone(e.target.value);
                            }}/>
                            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                            <button onClick={HandleSignIn}>Sign In</button>
                        </div>
                        <div>
                            <p>Don't have an account? <span onClick={()=>{navigate('/signup')}}>Sign up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}