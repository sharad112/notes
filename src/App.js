import LeftNav from "./Comps/Left/LeftNav";
import logo from './Comps/images/logo.png';
import Account from "./Comps/Left/Account";
import Middle from "./Comps/Middle/subcomps/Middle";
import Analysis from "./Comps/Middle/subcomps/Analysis";
import Teams from "./Comps/Middle/subcomps/Teams";
import Documents from "./Comps/Middle/subcomps/Documents";
import Settings from "./Comps/Middle/subcomps/Settings";
import {Route,Routes} from 'react-router-dom';
import Right from "./Comps/Right/Right";
function App() {
  return (
     <div className="main-wrapper">
       <div className="left-nav">
       <div className="logo">
          <img src={logo} alt="logo"/>
       </div>
         <LeftNav/>
         <Account/>
       </div>

       <div className="middle">
        <Routes>
          <Route path="/" element={<Middle/>}/>
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/members" element={<Teams/>}/>
          <Route path="/documents" element={<Documents/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
       </div>

      
     </div>
  );
}

export default App;
