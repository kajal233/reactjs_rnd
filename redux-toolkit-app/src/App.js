import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reduxToolkit/counterSlice';

function App() {
  const mystate = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Toolkit Example </h1>
      <input type='text' value={mystate} />
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </div>
  );
}

export default App;
