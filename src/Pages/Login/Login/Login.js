import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef=useRef('')
    const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleLogin=e=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
        // console.log(email,password)
    }
    if(user){
        navigate('/home')
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
      <Button className="btn-login" variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p className="new-user">
        New User? <Link className="from-link" to='/register'>Create New Account</Link>
    </p>
    </div>
  );
};

export default Login;
