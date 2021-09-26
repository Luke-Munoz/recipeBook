import React from 'react';
// import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function Login(props){
    const clickEventHandler = (e) => {
        props.handlePageChange('LoggedIn')
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit = {Login}>
                <div className="flex-row space-between">
                    <label htmlFor="email">Email address:</label>
                    <input
                    placeholder="youremail@gmail.com"
                    name="email"
                    type = "email"
                    id = "email"

                    />

                </div>
                <div className="flex-row space-between">
                    <label htmlFor="pwd">Password:</label>
                    <input
                    placeholder="**********"
                    name = "password"
                    type = "password"
                    id = "pwd"

                    />
                </div>
                {/*{error ? (*/}

                {/*    <div>*/}
                {/*        <p>Either the email or password are incoorrect.</p>*/}
                {/*    </div>*/}
                {/*) : null}*/}
                <div>
                <button type = "submit">Submit</button>
              </div>
            </form>
        </div>
    )
}

export default Login
