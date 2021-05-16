import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello World !!!</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
};

export default App;
