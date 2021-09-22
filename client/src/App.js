import React, {useState} from 'react';
import './App.css';
import Navigation from './components/nav';
import OnLoadPage from './components/on-load-page'


function App() {
const [currentPage, handlePageChange] = useState('OnLoadPage')


  const renderPage = () => {
    switch (currentPage) {
      case 'Navigation':
        return <Navigation/>;

        case '':
          return ;

          default:
            return<OnLoadPage/> ;
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