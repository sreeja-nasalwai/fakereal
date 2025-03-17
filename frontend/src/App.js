import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUpComponent from './Components/SignupComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import LoginComponent from './Components/LoginComponents';
import JobFormComponent from './Components/JobFormComponent';
import JobDisplayComponent from './Components/JobDisplayComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import UserDashboardComponent from './Components/UserDashboardComponent'; // Fixed import casing
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LoginComponent />} /> {/* Recommended Home Route */}
        <Route path="/sign" element={<SignUpComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/job" element={<JobFormComponent />} />
        <Route path="/about" element={<AboutUsComponent />} />
        <Route path="/display" element={<JobDisplayComponent />} />
        <Route path="/userdashboard" element={<UserDashboardComponent />} /> {/* Fixed Route Path */}
      </Routes>
      <ToastContainer />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;

