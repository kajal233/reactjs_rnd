import { createContext } from 'react';
import './App.css';
import CompA from './CompA';

export const NameContext = createContext()
function App() {
  return (
    <div className="App">
      <NameContext.Provider value={'Kajal'}>
      <CompA/>
      </NameContext.Provider>
    </div>
  );
}

export default App;
