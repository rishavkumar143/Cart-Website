import { Link } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Section from './Section'

function App() {
  return (
    <>
      <div className='Head'>
        <h1>Cart<span> WebPage</span></h1>
        <ul type="none">
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/contact">Contact</Link></li> 
          <li><Link to="/help">Help</Link></li>
        </ul>
      </div>
      <Section />
      <Footer />
    </>
  )
}

export default App