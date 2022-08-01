import './App.css';
import Blog from './components/Blog';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import France from "./components/pages/France";
// import Direct from './components/Direct';
// import Layout from './components/Layout';

function App() {
  return (
   <> 
  <Router>
  <Routes>
  <Route path="/" exact element={<Blog></Blog>}/>
  <Route path="/France" exact element={<France/>}/>
  </Routes>
  </Router></>
  );
}

export default App;