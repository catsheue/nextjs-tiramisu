import React, { useState, useContext } from 'react';

const TreeBirdBirdContext = React.createContext(['🌲', '🐦']);

const TreeBirdBridProvider = ({children}) => {
  const [state, setState] = useState(['🌲', '🐦', '🐦'])
  return (
    <TreeBirdBirdContext.Provider value={[state, setState]}>
      {children}
    </TreeBirdBirdContext.Provider>
  )
}
const Controller = () => {
  const [state, setState] = useContext(TreeBirdBirdContext);

  const addBird = () => {
    setState(oldArray => [...oldArray, '🐦']);
  }
  return (
    <>
      <div>{state}</div>
      <button onClick={() => addBird()}>Click Me</button>
    </>
  )
}
const App = () => {
  return (
    <TreeBirdBridProvider>
      <Controller />
    </TreeBirdBridProvider>
  )
}
export default App;
