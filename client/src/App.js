
import React, {useState} from 'react'

import './App.css';
import ListCat from './components/ListCat'
import Navbar from './components/Navbar'

function App() {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  return (
    <div className="App">
      <Navbar 
        search={search}
        setSearch={setSearch}
        setFilteredData={setFilteredData}
      />
      <ListCat
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
