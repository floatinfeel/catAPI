
import React, {useState} from 'react'

import './App.css';
import ListCat from './components/ListCat'
import Navbar from './components/Navbar'


function App() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
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
        loading={loading}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
