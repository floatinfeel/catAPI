
import React, {useState} from 'react'

import './App.css';
import ListCat from './components/ListCat'
import Navbar from './components/Navbar'


function App() {

  const [catList, setCatList] = useState([])
  return (
    <div className="App">
      <Navbar/>
      <ListCat 
        catList={catList}
        setCatList={setCatList}
      />
    </div>
  );
}

export default App;
