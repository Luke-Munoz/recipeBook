import React from 'react';


function Signup(props) {

    //const [formState, setFormState] = useState({email: '', password: ''});

    async function signUpFormHandler(e) {
        e.preventDefault();
        try {
            const create_username = document.querySelector('input[name= "username"]').value;
            const create_password = document.querySelector('input[name= "password"]').value;
            const create_user_email = document.querySelector('input[name= "email"]').value;


            console.log(create_username, create_password, create_user_email);
            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({
                    username: create_username,
                    password: create_password,
                    email: create_user_email
                }),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const serverResponse = await response.json()
            if (serverResponse.message) {
                //throw?
                new Error(serverResponse);
            }
            console.log(serverResponse)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={signUpFormHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        placeholder="Username"
                        name="username"
                        type="username"
                        id="username"

                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="youremail@hotmail.com"
                        name="email"
                        type="email"
                        id="email"

                    />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="*******"
                        name="password"
                        type="password"
                        id="password"
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    )
}


export default Signup;