
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

function Signup(props) {
//const [formState, setFormState] = useState({email:'', password: ''});
//const handleFormSubmit
//const handleChange









                const [formState, setFormState] = useState ({email: '', password: ''});

        async function signUpFormHandler (e) {
                e.preventDefault();
                try {
                const create_username = document.querySelector('input[name= "username"]').value;
                const create_password = document.querySelector('input[name= "password"]').value;
                const create_user_email = document.querySelector('input[name= "email"]').value;



                console.log(create_username,create_password,create_user_email);
                const response = await fetch('/api/user', {
                        method: 'POST',
                        body: JSON.stringify({
                                username: create_username,
                              password:  create_password,
                              email:  create_user_email
                        }),
                        headers: {
                                'Content-Type': 'application/json'
                        }

                })
        const serverResponse = await response.json()
                            if(serverResponse.message) {
                                    throw new Error(serverResponse);
                            }
                            console.log(serverResponse)


                    }catch (err){
                        console.log(err)
                    }
        }

        return (
                <Container className="forms-background">
                        <Row>
                                <Col>
                                        <h2 className="header-2">Signup</h2>
                                </Col>
                        </Row>
                                <Form onSubmit={signUpFormHandler}>
                                        <Row form>
                                                <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}}>
                                                        <FormGroup>
                                                                <Label for="firstName">First Name: </Label>
                                                                <Input
                                                                placeholder="First Name"
                                                                name = "firstName"
                                                                type = "firstName"
                                                                id = "firstName"
                                                                
                                                                />
                                                        </FormGroup>
                                                        <FormGroup>
                                                                <Label for="lastName">Last Name: </Label>
                                                                <Input
                                                                placeholder="Last Name"
                                                                name = "lastName"
                                                                type = "lastName"
                                                                id = "lastName"
                                                                
                                                                />
                                                        </FormGroup>
                                                        <FormGroup>
                                                                <Label for="email">Email: </Label>
                                                                <Input
                                                                placeholder="youremail@hotmail.com"
                                                                name = "email"
                                                                type = "email"
                                                                id = "email"
                                                                
                                                                />
                                                        </FormGroup>
                                                        <FormGroup>
                                                                <Label for="password">Password: </Label>
                                                                <Input
                                                                placeholder= "*******"
                                                                name = "password"
                                                                type = "password"
                                                                id = "password"
                                                                
                                                                />
                                                        </FormGroup>
                                                        <FormGroup className="buttonDiv">
                                                                <Button color='secondary' className="submitBtn" type = "submit">Submit</Button>
                                                        </FormGroup>
                                                </Col>
                                        </Row>
                                </Form>
                </Container>


        )
}





export default Signup;