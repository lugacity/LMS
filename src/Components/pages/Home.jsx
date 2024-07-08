import MainContent from "../MainContent/MainContent";
import AvenueImpact from "../AvenueImpact/AvenueImpact";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div >
      <div className='App' id='app_padding'>
      <Navbar/>
      <MainContent/>

      </div>

      <div>

        <AvenueImpact/>

      </div>

    </div>
    
  )
}

export default Home;
