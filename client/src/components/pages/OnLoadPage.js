
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const OnLoadPage = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Welcome to Recipe Book!!!!</h1>
                    <p className="lead">This is a blog dedicated to the sharing of your favorite recipes with other foodies! </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default OnLoadPage;