import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BooksView from './components/BooksView';
import CheckStatus from './components/Categories';

function App() {
  const books = [
    {
      Title: 'Book 1',
      Author: 'Alan Turing',
    },
    {
      Title: 'Book 2',
      Author: 'Alan Turing',
    },
    {
      Title: 'Book 3',
      Author: 'Alan Turing',
    },
    {
      Title: 'Book 44',
      Author: 'Alan Turing',
    },
    {
      Title: 'Book 5',
      Author: 'Alan Turing',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>BookStore</h1>
        <nav className="App-navigation">
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<BooksView books={books} />} />
        <Route path="/categories" element={<CheckStatus />} />
      </Routes>
    </div>
  );
}

export default App;
