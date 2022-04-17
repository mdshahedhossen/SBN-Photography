import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";


const Register = () => {
    const navigate=useNavigate()
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef=useRef('')
    const loginnavigate=()=>{
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister=e=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        // console.log(name,email,password) 
        createUserWithEmailAndPassword(email, password)
    }
    if(user){
        navigate('/home')
    }
    

  return (
    <div className="form-container">
      <Form onSubmit={handleRegister} className="w-50 mx-auto mt-20px">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mt-5">Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>

        <Button className="btn-login" variant="primary" type="submit">
          Regsiter
        </Button>
      </Form>
        <p className="new-user">
            Already Register? <Link className="from-link" to='/login' onClick={loginnavigate}>Login</Link>
        </p>
    </div>
  );
};

export default Register;
