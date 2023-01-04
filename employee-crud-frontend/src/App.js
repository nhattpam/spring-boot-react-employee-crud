import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmp from './components/AddEmp';
import EditEmp from './components/EditEmp';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addEmployee' element={<AddEmp />}></Route>
            <Route path='/editEmployee/:id' element={<EditEmp />}></Route>
        </Routes>
    </div>
  );
}

export default App;
