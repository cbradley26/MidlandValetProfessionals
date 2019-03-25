import React, { Component } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

class ContactForm extends Component {
    
    ourEmailAddress = "connor@connorbradley.net";
    number;
    theirEmailAddress;
    theirName;

    render() {

        return (
            <section>
                <Card>
                    <Form className="container mt-5 mb-5" >
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter full name" id="name"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter Phone Number" id="number" />
                            <Form.Text className="text-muted">
                                We'll call you back as soon as we can!
                    </Form.Text>
                        </Form.Group>
                        <Button variant="primary" onClick={() => this.constructEmailHref()}>
                            Book Now!
                        </Button>
                    </Form>
                </Card>
            </section>

            
        );
        
    }

    constructEmailHref() {
        this.theirEmailAddress = document.getElementById("email");
        this.theirName = document.getElementById("name");
        this.number = document.getElementById("number");
        window.location.href="mailto:" + this.ourEmailAddress + "?subject=Return Number" + this.number.value; 
    }
}

export default ContactForm;