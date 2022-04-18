import { Button, Form } from "react-bootstrap";
import {useNavigate, useParams } from "react-router-dom";
import "./ServicesDetails.css";
const ServicesDetails = () => {
    const navigate=useNavigate()
    const handlesubmitForm=()=>{
        alert('Thanks for your details')
        navigate('/home')
    }
  const { serviceid } = useParams();
  return (
    <div className="from-container">
      <h2 className="serviceid">Service id: {serviceid}</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name"  required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Short Working Descripction</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button onClick={handlesubmitForm} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ServicesDetails;
