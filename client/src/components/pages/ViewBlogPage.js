import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
//import recipes from './//'
//import comments from './///'


// import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media } from 'reactstrap';
function Recipes(props){

async function commentFormHandler (e){
e.preventDefault();
try{
    const commentBody = document.querySelector('input[name = "fillertext"]').value;
    const writtenBy = document.querySelector('input[name = "fillertext"]').value;

    const response = await fetch('/api/comment', {
        method:'POST',
        body: JSON.stringify({
            commentBody,
            writtenBy
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
}catch(err){
    console.log(err);
}

}

async function replyFormHandler(e) {
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
    return (

    <div className = "card">
        <div className="img-container">
            <img src={props.img} alt={props.name}/>
        </div>
        <div className = "card-details">
            <h2>{title}</h2>
            <h4>{createdBy}</h4>
            <p>{body}</p>
        </div>
    </div>


        // <CardDeck>
        //
        //     <Card>
        //         <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        //         <CardBody>
        //             <CardTitle tag="h5">Card title</CardTitle>
        //             <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        //             <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        //             <CardSubtitle tag="h6" className="mb-2 text-muted">Comment Or Reply</CardSubtitle>
        //             <CardText>The content of this section will be for the comments or replies that a person wants to add.</CardText>
        //             <Button>Button</Button>
        //             <Button>Add Comment</Button>
        //             <Button>Add Reply</Button>
        //         </CardBody>
        //     </Card>
        // </CardDeck>
    );
}

export default Recipes

