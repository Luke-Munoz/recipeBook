
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';

const OnLoadPage = (props) => {
    return (
        <Container className="landingContainer">
            <Row>
                <Col>
                    <h1 className="display-3">RecipeBook</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}} lg={{size:'8', offset:'2'}}>
                    <p className="lead">RecipeBook is a place for you to find, share, and try out all kinds of recipes from all kinds of people! Sign in or create an account to start cooking!</p>
                </Col>
            </Row>
            <Login currentPage = {props.currentPage}  handlePageChange = {props.handlePageChange}/>
            <Signup />
        </Container>
        
    );
};

export default OnLoadPage;