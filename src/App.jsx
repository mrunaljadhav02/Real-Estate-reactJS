
import './App.css';
import Head from './Components/Header/Head'
import Hero from './Components/Hero/Hero'
import './App.css'
import Companies from './Components/Companies/Companies'
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Values/Value';
import Contact from './Components/Contact/Contact'
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Head/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
