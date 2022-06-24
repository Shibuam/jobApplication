
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login';
import { AddDetails } from './Pages/AddDetails'
import { SignUp } from './Pages/SignUp';
import {  User } from './Pages/User';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/applicant_details' element={<AddDetails />} />
          <Route path='/view_applications' element={< User/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
