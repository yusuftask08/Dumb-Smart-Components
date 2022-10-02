import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Books from './Components/Books';
import books from './books.json';
import { useState } from 'react';
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) => {
    return book?.title?.includes(searchQuery);
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Dummy & Smart Components</code>
        </p>
        <Search val={searchQuery} onSearch={(event) => setSearchQuery(event.target.value)} />
        <Books books={filteredBooks} />
      </div>
    </div>
  );
}

export default App;