import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home/index'
import About from './containers/about/index'
import Resume from './containers/resume/index'
import Skills from './containers/skills/index'
import Portfolio from './containers/portfolio/index'
import Contact from './containers/contact/index'
import Navbar from './components/navBar';
import particles from './utils/particles';
import Journals from './containers/journal';

function AppContent() {

  const location = useLocation()
  console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === '/'

  return (
    <div className="App">
      
      {/* particle js */}

      {renderParticleJsInHomePage && (
           <Particles id='particles' options={particles} init={handleInit}/>
      )}
      {/* navbar */}
      <Navbar/>
      {/* main page content */}
      <div className='app__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/journal' element={<Journals/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
