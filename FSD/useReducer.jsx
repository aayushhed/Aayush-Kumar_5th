import { useReducer } from 'react';

const initialState = { count: 0, status: 'Idle' };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, status: 'Incremented' };
    case 'decrement':
      return { ...state, count: state.count - 1, status: 'Decremented' };
    case 'reset':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count} (Status: {state.status})</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
export default app;
