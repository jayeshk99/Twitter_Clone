import FacebookIcon from '@mui/icons-material/Facebook';
import { FcGoogle } from 'react-icons/fc';
import { app } from "../firebase/firebaseconfig";
import { GoogleAuthProvider,FacebookAuthProvider,getAuth,signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom';

export const ExternalAuth = ({text})=>{
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    const googleSignup = async()=>{
        await signInWithPopup(auth,googleProvider).then((res)=>{
            sessionStorage.setItem('AuthToken',res);
        })
        const user = sessionStorage.getItem('AuthToken');
        console.log(user);
        if (user){
            navigate('/');
         }else {
             alert('user Credentials is wrong');
         }
    }
    const facebookSignup = async()=>{
       await signInWithPopup(auth,facebookProvider).then((res)=>{
            sessionStorage.setItem('AuthToken',res);
            console.log(res);
        })
        const user = sessionStorage.getItem('AuthToken');
        console.log(user);
        if (user){
            navigate('/');
         }else {
             alert('user Credentials is wrong');
         }
    }
    return (
        <>
            <div className="signup-btns">
                <button onClick={googleSignup}>{text} with Google<FcGoogle style={{
                    width: "25px",
                    height: "auto",
                }}/></button>
                <button onClick={facebookSignup}>{text} With Facebook<FacebookIcon/></button>
            </div>
        </>
    )
}