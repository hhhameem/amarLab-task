import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthRequiredRoute from "./Components/AuthRequiredRoute/AuthRequiredRoute";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/blogs'
            element={
              <AuthRequiredRoute>
                <Blogs />
              </AuthRequiredRoute>
            }
          />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
