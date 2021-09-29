import React from 'react';
//import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media } from 'reactStrap';
function LoggedIn() {
    return (
        <div>
            <h1>Post A Recipe</h1>
            <form onSubmit = {recipeFormHandler}>
                <div>
                    <label htmlFor="recipeTtitle">Recipe Title:</label>
                    <input
                    placeholder = "Repice Title"
                    name = "recipeTitle"
                    type = "recipeTitle"
                    id = "recipeTitle"

                    />
                </div>
                <div>
                    <label htmlFor="recipeText">Recipe Ingredients:</label>
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
                    <label htmlfor="writtenBy">Comment Written By:</label>
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
                    <label htmfor="writtenBy">Reply Written By:</label>
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
        </div>

    )
}

export default LoggedIn