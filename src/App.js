import React from 'react';
import './App.css';

import notes from './NotesCollector'

function playSound(e) {
  let index = e.target.dataset.note;
  let noteForPlay = new Audio(notes[index])
  noteForPlay.play();

}

function App() {
  return (
    <div className="App">
     <div className="key white" data-note='0' onClick={(e) => {playSound(e)}}></div>
     <div className="key black" data-note='1' onClick={(e) => {playSound(e)}}></div>
     <div className="key white" data-note='2' onClick={(e) => {playSound(e)}}></div>
     <div className="key black" data-note='3' onClick={(e) => {playSound(e)}}></div>
     <div className="key white" data-note='4' onClick={(e) => {playSound(e)}}></div>
     <div className="key white" data-note='5' onClick={(e) => {playSound(e)}}></div>
     <div className="key black" data-note='6' onClick={(e) => {playSound(e)}}></div>
     <div className="key white" data-note='7' onClick={(e) => {playSound(e)}}></div>
     <div className="key black" data-note='8' onClick={(e) => {playSound(e)}}></div>
     <div className="key white" data-note='9' onClick={(e) => {playSound(e)}}></div>
     <div className="key black" data-note='10' onClick={(e) => {playSound(e)}}></div>
     <div className="key white" data-note='11' onClick={(e) => {playSound(e)}}></div>

    </div>
  );
}

export default App;
