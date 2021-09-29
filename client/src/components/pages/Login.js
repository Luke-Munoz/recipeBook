import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


function Login(props){
    const clickEventHandler = (e) => {
        props.handlePageChange('LoggedIn')
    }


    return (
        <Container className="forms-background">
            <h2 className="header-2" >Login</h2>
            <Form onSubmit = "">
                <Row form>
                    <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}}>
                        <FormGroup className="flex-row space-between">
                            <Label htmlFor="email">Email address: </Label>
                            <Input
                            placeholder="youremail@gmail.com"
                            name="email"
                            type = "email"
                            id = "email"
                            onChange = ""
                            />

                        </FormGroup>
                        <FormGroup className="flex-row space-between">
                            <Label htmlFor="pwd">Password: </Label>
                            <Input
                            placeholder="**********"
                            name = "password"
                            type = "password"
                            id = "pwd"
                            onChange = ""
                            />
                        </FormGroup>
                        {/*{error ? (*/}

                        {/*    <div>*/}
                        {/*        <p>Either the email or password are incoorrect.</p>*/}
                        {/*    </div>*/}
                        {/*) : null}*/}
                        
                        <FormGroup className="buttonDiv">
                            <Button className="submitBtn" type="submit">Submit</Button>{' '}
                        </FormGroup>
                        
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Login
