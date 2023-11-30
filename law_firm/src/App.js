import './App.css';
import ChooseUs from './Components/ChooseUs';
import LetsIntroduce from './Components/LetsIntroduce';
import TitlePage from './Components/TitlePage';
import Practice from './Components/Practice';

function App() {
  return (
   <div className='page'>    
    <TitlePage />
    <LetsIntroduce />
    <ChooseUs />
    <Practice />
   </div>
  );
}

export default App;
