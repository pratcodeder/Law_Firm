import './App.css';
import ChooseUs from './Components/ChooseUs';
import LetsIntroduce from './Components/LetsIntroduce';
import TitlePage from './Components/TitlePage';
function App() {
  return (
   <div className='page'>    
    <TitlePage />
    <LetsIntroduce />
    <ChooseUs />
   </div>
  );
}

export default App;
