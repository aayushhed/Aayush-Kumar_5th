import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <p>Count: {count}</p>
      {/  Use updater function when new state depends on previous state  /}
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
