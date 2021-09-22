import React from 'react';
// import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function Login(props){
    const clickEventHandler = (e) => {
        props.handlePageChange('LoggedIn')
    }


    return (
        <section>
            <p>HELLLOOOOO this is the login page</p>
            <button onClick = {clickEventHandler} type = "button"> login </button>
        </section>
    )
}

export default Login
