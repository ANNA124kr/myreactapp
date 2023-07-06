
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'; // only HashRouter
import './App.css';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import About from './components/About';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

<Menu/>

      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/signIn' element = {<SignIn/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
