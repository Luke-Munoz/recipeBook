import React from 'react';
// import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function Login(props){





    async function loginFormHandler(e) {
        e.preventDefault();
        try{

        const email = document.querySelector('input[name= "email"]').value;
        const password = document.querySelector('input[name= "password"]').value;

        const response = await fetch('/api/users/login',{
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            const serverResponse = await response.json()
            if(serverResponse.message){
                new Error(serverResponse);
            }
        } catch(err) {
            console.log(err);
        }
    }




    return (
        <div>
            <h2>Login</h2>
            <form onSubmit = {loginFormHandler}>
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
                    id = "password"

                    />
                </div>

                <div>
                <button type = "submit">Submit</button>
              </div>
            </form>
        </div>
    )
}

export default Login
