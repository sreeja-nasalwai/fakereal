
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import SignUpComponent from './Components/SignupComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import LoginComponent from './Components/LoginComponents';
import JobFormComponent from './Components/JobFormComponent';
import JobDisplayComponent from './Components/JobDisplayComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import { ToastContainer } from 'react-toastify';
function App() {
  return(
  <BrowserRouter>
  <HeaderComponent/>
  <Routes>
  <Route path="/sign" exact element={<SignUpComponent/>}></Route>
  <Route path="/login" exact element={<LoginComponent/>}></Route>
  <Route path="/job" exact element={<JobFormComponent/>}></Route>
  <Route path="/about" exact element={<AboutUsComponent/>}></Route>
  <Route path="/display" exact element={<JobDisplayComponent/>}></Route>
  </Routes>
  <ToastContainer />
  <FooterComponent/>
  </BrowserRouter>
  );
}

export default App;
