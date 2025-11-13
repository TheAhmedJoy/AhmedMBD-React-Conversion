import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MoviesPage from './pages/MoviesPage';
import MovieInfoPage from './pages/MovieInfoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/MoviesPage' exact Component={MoviesPage} />
          <Route path='/MovieInfoPage/:movieID' exact Component={MovieInfoPage} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
