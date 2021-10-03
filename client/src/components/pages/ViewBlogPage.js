import React, {useState, useEffect} from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody,Container, Row, Col, Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import axios from 'axios';


import PropTypes from 'prop-types';

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

    const response = await axios('/api/comment', {
        method:'POST',
        data: ({
            commentBody,
            writtenBy
    })

    })

    console.log(response.data);
}catch(err){
    console.log(err);
}

}

    async function recipeFormHandler(e){

        e.preventDefault();
        try {
            const recipeTitle = document.querySelector('input[name = "recipeTitle"]').value;
            const recipeText = document.querySelector('input[name = "recipeText"]').value;
            const createdBy = document.querySelector('input[name = "createdBy"]').value;



            const response = await axios ({
                url: '/api/recipe/',
                method: 'POST',
                data: {
                    recipeTitle,
                    recipeText,
                    createdBy
                }

            })
          console.log(response.data);
        } catch (err){
            console.log(err)
        }
    }


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

                        <strong>{recipe.recipeTitle}</strong>
                            <p>

                        {recipe.recipeText}
                            </p>

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
                                        <Button  className="submitBtn" type = "submit">Submit</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </p>
                ))}
                <Row>
                    <Col>
                        <h3 className="header-3">Post a Recipe</h3>
                    </Col>
                </Row>
                <Form onSubmit = {recipeFormHandler}>
                    <Row>
                        <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}}>
                            <FormGroup>
                                <Label htmlFor="recipeTitle">Recipe Title:</Label>
                                <Input
                                    placeholder = "Recipe Title"
                                    name = "recipeTitle"
                                    type = "recipeTitle"
                                    id = "recipeTitle"

                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}}>
                            <FormGroup>
                                <Label htmlFor="recipeText">Recipe Ingredients:</Label>
                                <Input
                                    placeholder = "Recipe Ingredients"
                                    name = "recipeText"
                                    type = "recipeText"
                                    id = "recipeText"

                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}}>
                            <FormGroup>
                                <Label htmlFor="createdBy">Created By:</Label>
                                <Input
                                    placeholder = "Created By"
                                    name = "createdBy"
                                    type = "createdBy"
                                    id = "createdBy"

                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup className="buttonDiv">
                                <Button className="submitBtn" type = "submit">Submit</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
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


