import React from 'react';
// import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';



const Navigation = (props) => {




    const tabs = ['Recipes', 'Login',]


    return (
    <ul className="nav nav-tabs">
        {tabs.map(tab => (
            <li className="nav-item" key={tab}>
                <a
                    href={'#' + tab.toLowerCase()}
                    // Whenever a tab is clicked on,
                    // the current page is set through the handlePageChange props.
                    onClick={() => props.handlePageChange(tab)}
                    className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }>
                    {tab}
                </a>
            </li>
        ))}
    </ul>
    );
}

export default Navigation;