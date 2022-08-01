import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import China from './components/pages/China';
import France from './components/pages/France';
import Germany from './components/pages/Germany';
import Italy from './components/pages/Italy';
import Mexico from './components/pages/Mexico';
import Spain from './components/pages/Spain';
import Thailand from './components/pages/Thailand';
import Turkey from './components/pages/Turkey';
import UnitedKingdom from './components/pages/UnitedKingdom';
import UnitedStates from './components/pages/UnitedStates';

import ReactDOM  from 'react-dom/client';

function Direct() {
  return (
    <div className='Direct'>

    
<>
<BrowserRouter>
    
      <Routes>
        <Route index element={<Blog />}/>
       <Route path='/China' element={<China />} />
       <Route path='/France' element={<France />} />    
      <Route path='/Germany' element={<Germany />} />
      <Route path='/Italy' element={<Italy />} />
      <Route path='/Mexico' element={<Mexico />} />
      <Route path='/Spain' element={<Spain />} />
      <Route path='/Thailand' element={<Thailand />} />
      <Route path='/Turkey' element={<Turkey />} />
      <Route path='/UnitedKingdom' element={<UnitedKingdom />} />
      <Route path='/UnitedStates' element={<UnitedStates />} />
      </Routes>
      
      </BrowserRouter>
      
</>
</div>
  );
}

export default Direct;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Direct/>);
