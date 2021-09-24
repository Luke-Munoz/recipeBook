import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';


function Login(props){
    const clickEventHandler = (e) => {
        props.handlePageChange('LoggedIn')
    }


    return (
        <Container className="forms-background">
            <h2 className="header-2" >Login</h2>
            <Form onSubmit = "">
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
                <FormGroup>
                    <Button className="submitBtn" type="submit">Submit</Button>{' '}
                </FormGroup>
            </Form>
        </Container>
    )
}

export default Login
