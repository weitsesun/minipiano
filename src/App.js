import React from 'react';
import './App.css';

import notes from './NotesCollector'

function playSound(e) {
  const key = e.target
  let index = e.target.dataset.note;
  let noteForPlay = new Audio(notes[index])
  noteForPlay.currentTime = 0;
  key.style.opacity = 0.8;
  noteForPlay.play();
  noteForPlay.addEventListener('ended', ()=> {
    key.style.opacity = 1;
  })
}

function App() {
  return (
    <div className="App">
      <div className="key white" 
            data-note='0' 
            onClick={(e) => { playSound(e) }}>
        <div className="hotkey">z</div>
      </div>
      <div className="key black" data-note='1' onClick={(e) => { playSound(e) }}>
        <div className="hotkey">s</div>
      </div>
      <div className="key white" data-note='2' onClick={(e) => { playSound(e) }}>
        <div className="hotkey">x</div>
      </div>
      <div className="key black" data-note='3' onClick={(e) => { playSound(e) }}>
        <div className="hotkey">d</div>
        </div>
      <div className="key white" data-note='4' onClick={(e) => { playSound(e) }}>
        <div className="hotkey">c</div>
        </div>
      <div className="key white" data-note='5' onClick={(e) => { playSound(e) }}>
        <div className="hotkey">v</div>
        </div>
      <div className="key black" data-note='6' onClick={(e) => { playSound(e) }}>
        <div className="hotkey">g</div>
      </div>
      <div className="key white" data-note='7' onClick={(e) => { playSound(e) }}>
      <div className="hotkey">b</div>
      </div>
      <div className="key black" data-note='8' onClick={(e) => { playSound(e) }}>
      <div className="hotkey">h</div></div>
      <div className="key white" data-note='9' onClick={(e) => { playSound(e) }}>
      <div className="hotkey">n</div>
      </div>
      <div className="key black" data-note='10' onClick={(e) => { playSound(e) }}>
      <div className="hotkey">j</div>
      </div>
      <div className="key white" data-note='11' onClick={(e) => { playSound(e) }}>
      <div className="hotkey">m</div>
      </div>

    </div>
  );
}

export default App;
