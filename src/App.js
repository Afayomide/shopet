import Aboutus from './components/about us/aboutus';
import Services from './components/Services/Services';
import Header from './components/header/header';
import './App.css';

function App() {
  return (<>
  <Header/>
  <div className='content'>
<Aboutus/>
<Services/>
</div>

  </>
  );
}

export default App;
