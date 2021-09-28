import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

// import { Nav, NavItem, NavLink, Button, ButtonGroup, Container, Row, Col, Media } from 'reactstrap';
function Recipes(props){
    const response = await fetch('/api/user')

    return (
        <CardDeck>
            <Card>
                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Comment Or Reply</CardSubtitle>
                    <CardText>The content of this section will be for the comments or replies that a person wants to make on a recipe.</CardText>
                    <Button>Button</Button>
                    <Button>Add Comment</Button>
                    <Button>Add Reply</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Comment Or Reply</CardSubtitle>
                    <CardText>The content of this section will be for the comments or replies that a person wants to add.</CardText>
                    <Button>Button</Button>
                    <Button>Add Comment</Button>
                    <Button>Add Reply</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Comment Or Reply</CardSubtitle>
                    <CardText>The content of this section will be for the comments or replies that a person wants to add.</CardText>
                    <Button>Button</Button>
                    <Button>Add Comment</Button>
                    <Button>Add Reply</Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default Recipes