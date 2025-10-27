import './App.css';
import Footer from './Footer';
import Section from './Section';

function App(){
  return(
    <>
    <div className='Header'>
      <h1>Cart<span> WebPage</span></h1>
      <ul type="none">
        <li>Privacy</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
      
    </div>
    <Section />
    <Footer />
    </>
  )
}
export default App;