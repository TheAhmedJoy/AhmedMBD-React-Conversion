import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App;
