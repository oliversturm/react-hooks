import StandaloneCounter from './StandaloneCounter';
import FunctionalCounter from './FunctionalCounter';
import withCounter from './CounterHOC';
import StandardHookCounter from './StandardHookCounter';
import CustomHookCounter from './CustomHookCounter';

import './App.css';
import Debounce from './Debounce';
import { useState } from 'react';

const HocCounter = withCounter(FunctionalCounter);

function App() {
  const [editVal, setEditVal] = useState('');
  const [editVal2, setEditVal2] = useState('');
  const edit2Change = (e) => setEditVal2(e.target.value);

  return (
    <div>
      <StandaloneCounter />
      <HocCounter />
      <StandardHookCounter />
      <CustomHookCounter />

      <div className="editor">
        <Debounce value={editVal} onChange={setEditVal}>
          <input type="text"></input>
        </Debounce>
        <div>Value in the editor (debounced): {editVal}</div>
      </div>

      <div className="editor">
        <input type="text" value={editVal2} onChange={edit2Change}></input>
        <div>Value in the editor (updated ASAP): {editVal2}</div>
      </div>
    </div>
  );
}

export default App;
