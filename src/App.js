
import './App.css';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<NewsContainer key="general"  category={'general'} />} />
        <Route exact path="/business" element={<NewsContainer key="business"  category={'business'}  />} />
        <Route exact path="/entertainment" element={<NewsContainer key="entertainment"  category={'entertainment'} />} />
        <Route exact path="/health" element={<NewsContainer key="health"  category={'health'} />} />
        <Route exact path="/science" element={<NewsContainer key="science"  category={'science'} />} />
        <Route exact path="/sports" element={<NewsContainer key="sports"  category={'sports'} />} />
        <Route exact path="/general" element={<NewsContainer key="general"  category={'general'} />} />
        <Route exact path="/technology" element={<NewsContainer key="technology"  category={'technology'} />} />
        
        </Routes>

      </Router>
        
      </>
    )
  }
}

