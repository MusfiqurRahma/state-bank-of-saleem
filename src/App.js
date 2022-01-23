import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
