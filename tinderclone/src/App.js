import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MyTinderCard from './MyTinderCard';

import { useState } from 'react';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    <>
    <div className="app">
      <Header />
      <MyTinderCard />
     
      
      <SwipeButtons />
    </div>
    <div>


    </div>
  </>
  );
}

export default App;
