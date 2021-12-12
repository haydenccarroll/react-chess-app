import './css/App.css';
import React from 'react';
import {PlayRandomMoveEngine, PlayOnOwn} from './chessLogic.js'


function App() {
  return (
    <div className="App">
        {PlayOnOwn()}
    </div>
  );
}

export default App;
