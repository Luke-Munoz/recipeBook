import React, { useState } from 'react;


        function Signup(props) {
        const [formState, setFormState] = useState({email:'', password: ''});


        //const handleFormSubmit
        //const handleChange



return(
            <div>
        <h2>Signup</h2>
                    <form >
                            <div>
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                    placeholder="First Name"
                                    name = "firstName"
                                    type = "firstName"
                                    id = "firstName"
                                    //onchange
                                    />
                            </div>
                            <div>
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                    placeholder="Last Name"
                                    name = "lastName"
                                    type = "lastName"
                                    id = "lastName"
                                    //onChange
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
                                    id = "pwd"
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