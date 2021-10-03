import React, { useState } from "react";
import Axios from "axios";
import {Image} from 'cloudinary-react';
<<<<<<< HEAD
import { Button, Container, Row, Col, Form, FormGroup,Label, Input } from 'reactstrap';
=======
import { Button, Container, Row, Col, Form, Input, Label, FormGroup, } from 'reactstrap';
>>>>>>> 3e3e6444f875a0ba5776c80c389cc9835048baa1
function LoggedIn() {


    //creates new recipes
async function recipeFormHandler(e){
    e.preventDefault();
    try {
        const title = document.querySelector('input[name = "recipeTitle"]').value;
        const ingredients = document.querySelector('input[name = "recipeText"]').value;
        const author = document.querySelector('input[name = "createdBy"]').value;


        const response = await fetch('api/recipes', {
            method: 'POST',
            body: JSON.stringify({
                title,
                ingredients,
                author
            }),
            headers: {
                'Content-Type': 'application.json'
            }
        })
        const serverResponse = await response.json()
        if (serverResponse.message) {
            new Error(serverResponse);
        }
        console.log(serverResponse)
    } catch (err){
        console.log(err)
    }
}

    //creates new comment on posts
async function commentFormHandler(e){
    e.preventDefault();
    try{

    const comment = document.querySelector('input[name = "commentBody"]').value;
    const comment_author = document.querySelector('input[name = "writtenBy"]').value;

    const response = await fetch('/api/recipeId', {
        method: 'POST',
        body: JSON.stringify({
            comment,
            comment_author
        }),
        headers: {
            'Content-Type': 'application.json'
        }
    })
    const serverResponse = await response.json()
        if(serverResponse.message){
            new Error(serverResponse)
        }
        console.log(serverResponse);
    } catch (err){
        console.log(err);
    }
}

    //creates a reply on a comment
async function replyFormHandler(e){
    e.preventDefault();
    try {
        const replyBody = document.querySelector('input[name = "fillertext"]').value;
        const writtenBy = document.querySelector('input[name = "fillertext"]').value;

        const response = await fetch('/api/:recipeId/:commentId', {
            method: 'PUT',
            body: JSON.stringify({
                replyBody,
                writtenBy
            }),
            headers: {
                'Content-Type': 'application.json'
            }
        })
        const serverResponse = await response.json()
        if (serverResponse.message) {
            new Error(serverResponse);
        }
        console.log(serverResponse)
    }catch(err){
        console.log(err)
    }
}

    //logs the user out
async function logoutFormHandler(){
    const response = await fetch('api./users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok){
        document.location.replace ('/');
    } else {
        alert(response.statusText);
    }

}


    const [imageSelected, setImageSelected] = useState("");
    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "xqjdk6dx");
        Axios.post(
            "https://api.cloudinary.com/v1_1/dt8vj9whj/image/upload",
            formData
        ).then((response) => {
            console.log(response);
        });
    };

    return (
        <Container>
            <h2 className="header-2">Post A Recipe</h2>
            <Form onSubmit = {recipeFormHandler}>
                <Row form>
                    <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}}>
                        <FormGroup className="flex-row space-between">
                            <Label htmlFor="recipeTitle">Recipe Title:</Label>
                            <Input
                            placeholder = "Recipe Title"
                            name = "recipeTitle"
                            type = "recipeTitle"
                            id = "recipeTitle"

                            />
                        </FormGroup>
                        <FormGroup className="flex-row space-between">
                            <Label htmlFor="recipeText">Recipe Ingredients:</Label>
                            <Input 
                            placeholder = "Recipe Ingredients"
                            name = "recipeText"
                            type = "recipeText"
                            id = "recipeText"

                            />
                        </FormGroup>
                        <FormGroup className="flex-row space-between">
                            <Label htmlFor="createdBy">Created By:</Label>
                            <Input
                            placeholder = "Created By"
                            name = "createdBy"
                            type = "createdBy"
                            id = "createdBy"
                            
                            />
                        </FormGroup>
                        <FormGroup className="buttonDiv">
                            <Button className="submitBtn"type = "submit">Submit</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>

            <h1>Add A Comment</h1>
            <Form onSubmit = {commentFormHandler}>
                <FormGroup>
                    <Label htmlFor="commentBody">Comment:</Label>
                    <Input
                    placeholder = "Comment"
                    name = "commentBody"
                    type = "commentBody"
                    id = "commentBody"

                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="writtenBy">Comment Written By:</Label>
                    <Input 
                    placeholder = "Comment Wriitten By"
                    name = "writtenBy"
                    type = "writtenBy"
                    id = "writtenBy"

                    />
                </FormGroup>
                <FormGroup>
                    <Button type = "submit">Submit</Button>
                </FormGroup>
            </Form>

            <h1>Add A Reply</h1>
            <Form onSubmit = {replyFormHandler}>
                <FormGroup>
                    <Label htmlFor="replyBody">Add Reply:</Label>
                    <Input
                    placeholder = "Add Reply"
                    name = "replyBody"
                    type = "replyBody"
                    id = "replyBody"

                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="writtenBy">Reply Written By:</Label>
                    <Input
                    placeholder = "Reply Written By"
                    name = "writtenBy"
                    type = "writtenBy"
                    id = "writtenBy"

                    />
                </FormGroup>
                <FormGroup>
                    <Button type = "submit">Submit</Button>
                </FormGroup>
            </Form>
            <div>
                <Input
                    type="file"
                    onChange={(event) => {
                        setImageSelected(event.target.files[0]);
                    }}
                />
                <Button onClick={uploadImage}> Upload Image</Button>
                <Image
                    cloudName="dt8vj9whj" publicId="" />
                {/* in the publicId the url for the image goes there */}
            </div>
            <Form onSubmit={logoutFormHandler}>
                <FormGroup>
                    <Label htmlFor="logoutButton">Logout</Label>
                    <Input
                    placeholder = "logout"
                    name = "logout"
                    type = "logout"
                    id = "logout"
                    />
                </FormGroup>
            </Form>
        </Container>

    )
}

export default LoggedIn