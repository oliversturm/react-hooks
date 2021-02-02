import StandaloneCounter from './StandaloneCounter';
import FunctionalCounter from './FunctionalCounter';
import withCounter from './CounterHOC';
import StandardHookCounter from './StandardHookCounter';
import CustomHookCounter from './CustomHookCounter';

import './App.css';

const HocCounter = withCounter(FunctionalCounter);

function App() {
  return (
    <div>
      <StandaloneCounter />
      <HocCounter />
      <StandardHookCounter />
      <CustomHookCounter />
    </div>
  );
}

export default App;
