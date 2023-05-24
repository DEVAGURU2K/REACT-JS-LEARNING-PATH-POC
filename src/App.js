
import './App.css';
import Login from './Component/AuthComponent/login';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Sidebar from './Component/AuthComponent/DashboardComponent/sidebar';
import Project from './Component/AuthComponent/DashboardComponent/project';

function App() {
  return (
    <div>   
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard/*" element={<Sidebar/>}/>
        </Routes>
      </Router>     
    </div>
  );
} 
export default App;
