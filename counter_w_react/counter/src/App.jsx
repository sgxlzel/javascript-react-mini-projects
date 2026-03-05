import { useState } from 'react'
import './App.css'
import MyComponents from './MyComponents.jsx';
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx';
import CarComponents from './CarComponents.jsx';
import ToDoList from './ToDoList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Counter />
        <MyComponents /> 
        <ColorPicker />   */}
        {/* <CarComponents />   */}
        <ToDoList />
    </>
  )
}

export default App
