import React from 'react'
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import { Navbar} from './components'; // importing from navbar
import Home from './pages/HomePage/Home';
import ImageApp from './pages/ImageSlider/ImageApp'
import PhotoApp from './pages/PhotosSlider/PhotoApp'
// import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/images" exact component={ImageApp} />
        <Route path="/dogs" exact component={PhotoApp} />
      </Switch>
      
    </Router>
  );
}

export default App;
