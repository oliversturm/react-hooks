import { useState } from 'react';
import './App.css';

import StandaloneCounter from './StandaloneCounter';
import FunctionalCounter from './FunctionalCounter';
import withCounter from './CounterHOC';
import StandardHookCounter from './StandardHookCounter';
import CustomHookCounter from './CustomHookCounter';

import Debounce from './Debounce';
import useWindowInfo from './WindowInfo';

const HocCounter = withCounter(FunctionalCounter);

function App() {
  const [editVal, setEditVal] = useState('');
  const [editVal2, setEditVal2] = useState('');
  const edit2Change = (e) => setEditVal2(e.target.value);

  const windowInfo = useWindowInfo();

  return (
    <div>
      <div className="windowInfo">{`Window is ${windowInfo.width}x${windowInfo.height}, a ${windowInfo.layout} layout.`}</div>

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
