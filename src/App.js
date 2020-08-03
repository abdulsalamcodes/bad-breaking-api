import React, {useState, useEffect} from 'react';
import Header from './component/ui/Header';
import Charactergrid from './component/character/Charactergrid.js';
import Search from './component/ui/Search'
import axios from 'axios'
import './App.css'

const App = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItem = async () => {

      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);


      setItem(result.data);
      setLoading(false)

    }

    fetchItem()
  }, [query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Charactergrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
