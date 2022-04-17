import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocilLogin from "../SocilLogin/SocilLogin";
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef=useRef('')
    const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleLogin=e=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        // console.log(email,password)
    }
    if(user){
        navigate('/home')
    }
    
    let errorelement;
    if (error) {
        errorelement=<p>Sorry!! User not found</p>  
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
     <div className="socilLogin">
     <SocilLogin></SocilLogin>
     </div>
    </div>
  );
};

export default Login;
