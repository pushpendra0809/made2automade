import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Dashboard from "./components/Dashboard";
import ECommerceListing from "./components/ECommerceListing";
import Barcode from "./components/Barcode";
import AddProduct from "./components/AddProduct";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/orders"element={<Orders />}/>
            <Route exact path="/dashboard"element={<Dashboard />}/>
            <Route exact path="/barcode"element={<Barcode />}/>
            <Route exact path="/eCommerceListing"element={<ECommerceListing />}/>
            <Route exact path="/home" element={<Home showAlert={showAlert} />} />
            <Route exact path="/addproduct"element={<AddProduct />}/>
            <Route exact path="/login"  element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup"  element={<Signup showAlert={showAlert} />} />
            <Route exact path="/" element={<Home />}/>
          </Routes>
          </div>
       </Router>
       </NoteState>
    </>
  );
}

export default App;





