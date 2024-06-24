import { useState } from 'react';
import './App.css';
import SnuffleForm from './components/SnuffleForm';
import Sort from './components/Sort';
import SortForm from './components/SortForm';
import { Meow } from './components/meow';

function App() {
  const [array, setArray] = useState<number[]>([]);

  return (
      <>  
      <Meow />
        <SnuffleForm setArray={setArray} />
        <SortForm array={array} setArray={setArray} />
        <Sort array={array} />
      </>
  );
}

export default App
