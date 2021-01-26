
import React, {useState} from 'react'

import './App.css';
import ListCat from './components/ListCat'
import Navbar from './components/Navbar'


function App() {

  const [catList, setCatList] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <ListCat 
        catList={catList}
        setCatList={setCatList}
        loading={loading}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
