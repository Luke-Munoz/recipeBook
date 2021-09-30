import React, {useState, useEffect} from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,Container, Row, Col, Form, FormGroup, Label, Input
} from 'reactstrap';

//import recipes from './//'
//import comments from './///'

import PropTypes from 'prop-types';
import {get} from "mongoose/lib/driver";

// import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media } from 'reactstrap';
function Recipes(props){


const [recipes,setRecipes ] = useState([])
 useEffect(async () => {
    const response = await fetch('/api/recipe/')
        const getRecipes = await response.json()
        console.log(getRecipes)
     setRecipes(getRecipes)
    },[])


async function commentFormHandler (e){
e.preventDefault();
try{
    const commentBody = document.querySelector('input[name = "commentBody"]').value;
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

// async function replyFormHandler(e) {
//     e.preventDefault();
//     try {
//         const replyBody = document.querySelector('input[name = "fillertext"]').value;
//         const writtenBy = document.querySelector('input[name = "fillertext"]').value;
//
//         const response = await fetch('/api/:recipeId/:commentId', {
//             method: 'PUT',
//             body: JSON.stringify({
//                 replyBody,
//                 writtenBy
//             }),
//             headers: {
//                 'Content-Type': 'application.json'
//             }
//         })
//         const serverResponse = await response.json()
//         if (serverResponse.message) {
//             new Error(serverResponse);
//         }
//         console.log(serverResponse)
//     }catch(err){
//         console.log(err)
//     }
// }


    return (

   <Container className="forms-background">
       <Row>
           <Col>
               <h2 className="header-2">Recipe!</h2>
           </Col>
       </Row>
       <div>
           {recipes.length > 0 && recipes.map( (recipe) => (
               <p key ={recipe.title}>
                   {recipe.recipeTitle}

                   {recipe.recipeText}

                   {recipe.comments.map( (comment) =>(
                       <p key = {comment.commentBody }>{comment.commentBody}</p>
                   ))}
                   <Form onSubmit={commentFormHandler}>
                       <Row form>
                           <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}}>
                               <FormGroup>
                                   <Label for = "commentBody">Comment</Label>
                                   <Input
                                       placeholder="Comment"
                                       name = "commentBody"
                                       type = "commentBody"
                                       id = "commentBody"
                                   />
                                   <button  className="submitBtn" type = "submit">Submit</button>
                               </FormGroup>
                           </Col>
                       </Row>
                   </Form>
               </p>
           ))}
       </div>

   </Container>


    );

}

export default Recipes


    


Card.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
  };
  
CardBody.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};
  
CardDeck.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};
  
CardImg.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
    top: PropTypes.bool,
    bottom: PropTypes.bool
};

CardSubtitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};
  
CardText.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};
  
CardTitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};


