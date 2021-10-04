import React, {useState} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-route-dom';
import './App.css';
import Recipes from './components/pages/ViewBlogPage'
import Navigation from './components/nav';
import OnLoadPage from './components/pages/OnLoadPage';
import Login from './components/pages/Login';
//import Home from './components/pages/Home';
import Signup from './components/pages/Signup'

function App() {
    const [currentPage, handlePageChange] = useState('Home')


    const renderPage = () => {
        switch (currentPage) {
            case 'LoggedIn':
                return <LoggedIn/>;

            case 'Navigation':
                return <Navigation/>;

            case 'Recipes':
                return <Recipes/>;

            case 'Login':
                return <Login/>;

            default:

                return <OnLoadPage currentPage={currentPage} handlePageChange={handlePageChange}/>;
        }
    }

    return (
        <div>
            <header className="navigation">
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
            <div> {renderPage(currentPage)}</div>

        </div>
    );
}

export default App;
