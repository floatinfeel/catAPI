
import React, {useState} from 'react'

import './App.css';
import ListCat from './components/ListCat'
import Navbar from './components/Navbar'


function App() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <div className="App">
      <Navbar/>
      <ListCat
        loading={loading}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
