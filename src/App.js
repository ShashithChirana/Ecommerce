
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
