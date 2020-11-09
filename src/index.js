import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App/App';
import Lyrics from './STORE';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <App lyrics = {Lyrics}/>
    </BrowserRouter>,
  document.getElementById('root')
  
)
