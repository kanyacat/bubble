import { useState } from 'react';
import './App.css';
import SnuffleForm from './components/SnuffleForm';
import Sort from './components/Sort';
import SortForm from './components/SortForm';
import { Meow } from './components/meow';

function App() {
  return (
      <>  
      <Meow />
        <SnuffleForm />
        <SortForm />
        <Sort />
      </>
  );
}

export default App
