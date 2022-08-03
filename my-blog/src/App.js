import './App.css';
import Blog from './components/Blog';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import France from "./components/pages/France";
import Spain from "./components/pages/Spain";
import UnitedStates from "./components/pages/UnitedStates";
import China from "./components/pages/China";
import Italy from "./components/pages/Italy";
import Turkey from "./components/pages/Turkey";
import Mexico from "./components/pages/Mexico";
import Thailand from "./components/pages/Thailand";
import Germany from "./components/pages/Germany";
import UnitedKingdom from "./components/pages/UnitedKingdom";
// import Direct from './components/Direct';
// import Layout from './components/Layout';

function App() {
  return (
   <> 
  <Router>
  <Routes>
  <Route path="/" exact element={<Blog></Blog>}/>
  <Route path="/France" exact element={<France/>}/>
  <Route path="/Spain" exact element={<Spain/>}/>
  <Route path="/UnitedStates" exact element={<UnitedStates/>}/>
  <Route path="/China" exact element={<China/>}/>
  <Route path="/Italy" exact element={<Italy/>}/>
  <Route path="/Turkey" exact element={<Turkey/>}/>
  <Route path="/Mexico" exact element={<Mexico/>}/>
  <Route path="/Thailand" exact element={<Thailand/>}/>
  <Route path="/Germany" exact element={<Germany/>}/>
  <Route path="/UnitedKingdom" exact element={<UnitedKingdom/>}/>
  </Routes>
  </Router></>
  );
}

export default App;