import React from 'react';
import './style/main.scss';
import Header from './components/Header/index';
import {Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import AboutMePage from './components/AboutMePage';
import WorkPage from './components/WorkPage';
import Footer from './components/Footer';
import CONTENT from './data.json';

const App = () => {
  return (
    <div className="App">
      <div className="App__wrap">
      <Header/>
      <div className="content">
      <Route exact path='/' component={MainPage}/>
      <Route path='/about' component={props => <AboutMePage {...props} content={CONTENT.content}/>}/>
      <Route path='/works' component={props => <WorkPage {...props} content={CONTENT.works} />}/>
      </div>
      <Footer content={CONTENT.footer}/>
      </div>
    </div>
  );
}

export default App;
