import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/auth/Login.jsx';
// import SignUp from './pages/auth/SignUp.jsx';
import MemberEntryForm from './MemberEntryForm.jsx';

const App = () => {
  return (
    <MemberEntryForm />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<SignUp />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;