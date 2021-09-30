import React, { useState } from "react";
import Axios from "axios";
import {Image} from 'cloudinary-react';
//import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media } from 'reactStrap';
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
        <div>
            <h1>Post A Recipe</h1>
            <form onSubmit = {recipeFormHandler}>
                <div>
                    <label htmlFor="recipeTitle">Recipe Title:</label>
                    <input
                    placeholder = "Recipe Title"
                    name = "recipeTitle"
                    type = "recipeTitle"
                    id = "recipeTitle"

                    />
                </div>
                <div>
                    <label htmlFor="recipeTest">Recipe Ingredients:</label>
                    <input 
                    placeholder = "Recipe Ingredients"
                    name = "recipeText"
                    type = "recipeText"
                    id = "recipeText"

                    />
                </div>
                <div>
                    <label htmlFor="createdBy">Created By:</label>
                    <input
                    placeholder = "Created By"
                    name = "createdBy"
                    type = "createdBy"
                    id = "createdBy"
                    
                    />
                </div>
                <div>
                    <button type = "submit">Submit</button>
                </div>
            </form>

            <h1>Add A Comment</h1>
            <form onSubmit = {commentFormHandler}>
                <div>
                    <label htmlFor="commentBody">Comment:</label>
                    <input
                    placeholder = "Comment"
                    name = "commentBody"
                    type = "commentBody"
                    id = "commentBody"

                    />
                </div>
                <div>
                    <label htmlFor="writtenBy">Comment Written By:</label>
                    <input 
                    placeholder = "Comment Wriitten By"
                    name = "writtenBy"
                    type = "writtenBy"
                    id = "writtenBy"

                    />
                </div>
                <div>
                    <button type = "submit">Submit</button>
                </div>
            </form>

            <h1>Add A Reply</h1>
            <form onSubmit = {replyFormHandler}>
                <div>
                    <label htmlFor="replyBody">Add Reply:</label>
                    <input
                    placeholder = "Add Reply"
                    name = "replyBody"
                    type = "replyBody"
                    id = "replyBody"

                    />
                </div>
                <div>
                    <label htmlFor="writtenBy">Reply Written By:</label>
                    <input
                    placeholder = "Reply Written By"
                    name = "writtenBy"
                    type = "writtenBy"
                    id = "writtenBy"

                    />
                </div>
                <div>
                    <button type = "submit">Submit</button>
                </div>
            </form>
            <div>
                <input
                    type="file"
                    onChange={(event) => {
                        setImageSelected(event.target.files[0]);
                    }}
                />
                <button onClick={uploadImage}> Upload Image</button>
                <Image
                    cloudName="dt8vj9whj" publicId="" />
                {/* in the publicId the url for the image goes there */}
            </div>
            <form onSubmit={logoutFormHandler}>
                <div>
                    <label htmlFor="logoutButton">Logout</label>
                    <input
                    placeholder = "logout"
                    name = "logout"
                    type = "logout"
                    id = "logout"
                    />
                </div>
            </form>
        </div>

    )
}

export default LoggedIn