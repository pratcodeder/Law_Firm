import './App.css';
import ChooseUs from './Components/ChooseUs';
import LetsIntroduce from './Components/LetsIntroduce';
import TitlePage from './Components/TitlePage';
import Practice from './Components/Practice';
import HappyClients from "./Components/HappyClients"
import OurTeam from "./Components/OurTeam"

function App() {
  return (
   <div className='page'>    
    <TitlePage />
    <LetsIntroduce />
    <ChooseUs />
    <Practice />
    <HappyClients />
    <OurTeam />
   </div>
  );
}

export default App;
