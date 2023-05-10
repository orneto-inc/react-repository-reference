
import './App.css';
import Navbar from './menuByJson/Navbar';
import Parent from './apiIntegration/Parent';
import MainTweetPage from './miniTwiter/MainTweetPage';
import CardDesign from './sliderCardDesignOne/Card';

function App() {
  return (
    <div className="app">
      
      {/* Menu Data by Local JSON */}
      <Navbar />

      {/* APi Data Integration through Axios */}
      {/* <Parent /> */}
      
      {/* MIni Twitter Design */}
      {/* <MainTweetPage /> */}


      {/* Slider image 360 View Card Design */}
      {/* <CardDesign /> */}
    </div>
  );
}
export default App;