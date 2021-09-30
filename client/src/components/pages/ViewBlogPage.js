import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

//import recipes from './//'
//import comments from './///'

import PropTypes from 'prop-types';

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
            {/*<h2>{title}</h2>*/}
            {/*<h4>{createdBy}</h4>*/}
            {/*<p>{body}</p>*/}
        </div>
    </div>


    );

}

export default Recipes


    
};

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


