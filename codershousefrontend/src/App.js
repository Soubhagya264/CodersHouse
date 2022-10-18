import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import {usestate} from 'react';
import Navigation from "./Components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import GuestRoute from "./utils/GuestRoute";
import SemiProctedRoute from "./utils/SemiProtectedRoute";
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Loader from './Components/shared/Loader/Loader'
import ProtectedRoute from "./utils/ProtecetdRoute";

function App() {
  const { loading } = useLoadingWithRefresh();
 
  return loading ?(
   <Loader message="Loading, please wait.." />
  ): 
  <>
  <Router>
  <Navigation />
  <Routes>
   <Route path="/" element={<GuestRoute>
      <Home />
    </GuestRoute>} />
    <Route path="/authenticate" element={<GuestRoute>
      <Authenticate />
    </GuestRoute>} />
    <Route path="/activate" element={<SemiProctedRoute><Activate /></SemiProctedRoute>} />
    <Route path="/rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
  </Routes>
</Router>
</>
    
    
    
  
}





export default App;
