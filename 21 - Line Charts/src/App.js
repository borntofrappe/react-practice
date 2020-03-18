import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const randomDataPoint = () => ({
    value: Math.floor(Math.random() * 100),
    id: Math.random()
  })

  const addData = () => setData([...data, randomDataPoint()]);
  const removeData = () => setData([...data.slice(0, -2)]);


  return (
    <div>
      <h1>Line Chart</h1>
      <button onClick={() => addData()}>Add data point</button>
      <button onClick={() => removeData()}>Remove data point</button>

      <>
      {
        data.map(({value, id}) => <span key={id}>{value}</span>)
      }
      </>

    </div>
  );
}

export default App;
