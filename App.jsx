import './App.css'
import Home from './components/home';
import Login from './components/login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Welcome!</h1>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
  
)
}

export default App
