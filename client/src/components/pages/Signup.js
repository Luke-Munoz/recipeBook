import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

        function Signup(props) {
        //const [formState, setFormState] = useState({email:'', password: ''});
        //const handleFormSubmit
        //const handleChange



return(
        <Container className="forms-background">
                <Row>
                        <Col>
                                <h2 className="header-2">Signup</h2>
                        </Col>
                </Row>
                <Form>
                        <FormGroup>
                                <Label for="firstName">First Name: </Label>
                                <Input
                                placeholder="First Name"
                                name = "firstName"
                                type = "firstName"
                                id = "firstName"
                                //onchange
                                />
                        </FormGroup>
                        <FormGroup>
                                <Label for="lastName">Last Name: </Label>
                                <Input
                                placeholder="Last Name"
                                name = "lastName"
                                type = "lastName"
                                id = "lastName"
                                //onChange
                                />
                        </FormGroup>
                        <FormGroup>
                                <Label for="email">Email: </Label>
                                <Input
                                placeholder="youremail@hotmail.com"
                                name = "email"
                                type = "email"
                                id = "email"
                                //onChange
                                />
                        </FormGroup>
                        <FormGroup>
                                <Label for="pwd">Password: </Label>
                                <Input
                                placeholder= "*******"
                                name = "password"
                                type = "password"
                                id = "pwd"
                                //onChange
                                />
                        </FormGroup>
                        <FormGroup>
                                <Button className="submitBtn" type = "submit">Submit</Button>
                        </FormGroup>
                </Form>
        </Container>

)
}




        export default Signup;