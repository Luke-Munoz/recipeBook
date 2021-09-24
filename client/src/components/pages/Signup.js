import React, {useState} from 'react';
import { createUSER } from '../../../../controllers/user-controller'




        function Signup(props) {

                const [formState, setFormState] = useState ({email: '', password: ''});

        async function signUpFormHandler (e) {
                event.preventDefault();

                const create_username = document.querySelector('input[name= "username"]').value;
                const create_password = document.querySelector('input[name= "password"]').value;
                const create_user_email = document.querySelector('input[name= "email"]').value;

                const response = await fetch('/api/user', {
                        method: 'POST',
                        body: JSON.stringify({
                                create_username,
                                create_password,
                                create_user_email
                        }),
                        headers: {
                                'Content-Type': 'application/json'
                        }
                .then(response => response.json())
                            .then(serverResponse => {
                                    if(serverResponse.message) {
                                            throw new Error(serverResponse);
                                    }
                            }).catch(err => {
                                    res.status(404).json({message:'failed'});
                            })
                });


        }

return(
            <div>
        <h2>Signup</h2>
                    <form >
                            <div>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                    placeholder="Username"
                                    name = "username"
                                    type = "username"
                                    id = "username"
                                    //onchange
                                    />
                            </div>
                            <div>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                    placeholder="youremail@hotmail.com"
                                    name = "email"
                                    type = "email"
                                    id = "email"
                                    //onChange
                                    />
                            </div>
                            <div>
                                    <label htmlFor="pwd">Password:</label>
                                    <input
                                    placeholder= "*******"
                                    name = "password"
                                    type = "password"
                                    id = "password"
                                    //onChange
                                    />
                            </div>
                            <div>
                                    <button type = "submit">Submit</button>
                            </div>
                    </form>
            </div>

)
}




        export default Signup;