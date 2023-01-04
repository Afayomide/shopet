import Aboutus from './components/about us/aboutus';
import Services from './components/Services/Services';
import Header from './components/header/header';
import Footer from "./components/Footer/footer";
import Pricing from "./components/Pricing/pricing";
import Location from './components/Location/location';
import './App.css';


function App() {
  return (<>
  <Header/>
  <div className='content'>
<Aboutus/>
<Services/>
<Pricing/>
<Location/>
</div>
<Footer/>


  </>
  );
}

export default App;
