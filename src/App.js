import './App.css';
import Home from './Components/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NameForm from './Components/NameForm.js';
import SupportForm from './Components/SupportForm.js';
import { Menu } from './Menu';
import Login from './Components/Login';
// import {renderRoutes} from 'react-router-config';
// import {routes} from '.routes/routes';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/name' element={<NameForm />} />
          <Route exact path='/support' element={<SupportForm />} />
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </header>
    </div>
  );
}

// function App(){
//   return(
//     <div className='App'>
//       {renderRoutes(routes)}
//     </div>
//   );
// }

export default App;
