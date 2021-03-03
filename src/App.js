import React from 'react'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './App.css';

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchPage from './components/SearchPage/SearchPage'

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          
          <Switch>
            <Route path='/search'>
              <SearchPage />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
            
          </Switch>
          
          <Footer />
        </Router>

          
      
      {/* SearchPage*/}
          {/* Header*/}
          {/* ...*/}


    </div>
  );
}

export default App;
