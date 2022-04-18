import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import SocilLogin from "../SocilLogin/SocilLogin";
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef=useRef('')
    const navigate=useNavigate()
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleLogin=e=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        // console.log(email,password)
    }
    if(user){
      navigate(from, { replace: true });
    }
    
    let errorelement;
    if (error) {
        errorelement=<p>Sorry!! User not found</p>  
      }
      const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

  return (
    <div className="form-container">
        <Form  onSubmit={handleLogin} className="w-50 mx-auto mt-20px">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="mt-5">Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      <p style={{color:'red'}}>{errorelement}</p>
      <Button className="btn-login" variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p className="new-user">
        New User? <Link className="from-link" to='/register'>Create New Account</Link>
    </p>
    <p className="new-user">
        Forget Password? <button onClick={resetPassword} className="text-primary p-auto">Reset password</button>
    </p>
     <div className="socilLogin">
     <SocilLogin></SocilLogin>
     <ToastContainer />
     </div>
    </div>
  );
};

export default Login;
