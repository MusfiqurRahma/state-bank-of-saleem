import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Home/Login/Login';
import CheckBalance from './pages/Home/CheckBalance/CheckBalance';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/checkBalance" element={ <CheckBalance/> } />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;