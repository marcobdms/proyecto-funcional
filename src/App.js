import './input.css';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Carrusel from './components/Carrusel';
import AboutMe from './components/AboutMe';
import HTB from './components/HTB';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function App() {

  return (
    <div>
      <Navbar />
      <Center />
      <br></br>
      <br></br>
      <br></br>
      <AboutMe />
      <div className='flex justify-center items-center'>
        <MdOutlineKeyboardArrowDown className="arrowdown1" size={50} />
      </div>
      <Carrusel />
      <div className='flex justify-center items-center'>
      <MdOutlineKeyboardArrowDown className="arrowdown2" size={50} />
      </div>
      <HTB />
    </div>
  );
}

export default App;
