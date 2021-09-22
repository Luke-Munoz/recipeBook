import React, {useState} from 'react';
import './App.css';
import Recipes from './components/recipes'
import Navigation from './components/nav';
import OnLoadPage from './components/on-load-page';
import Login from './components/login';

function App() {
const [currentPage, handlePageChange] = useState('Home')


  const renderPage = () => {
    switch (currentPage) {
      case 'Navigation':
        return <Navigation/>;


        case 'Recipes':
          return  <Recipes />;

        case 'Login':
          return  <Login />;

          default:

            return<OnLoadPage currentPage={currentPage} handlePageChange={handlePageChange}/> ;

    }
  }


  return (
    <div className="App">

      <header class = "navigation">
        <Navigation currentPage={currentPage} handlePageChange = {handlePageChange} />
      </header>
        <div> {renderPage(currentPage)}</div>

    </div>
  );
}

export default App;
