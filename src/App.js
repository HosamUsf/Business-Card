import Info from './component/Info';
import Footer from './component/Footer';
import About from './component/About';
import Interests from './component/Interests';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
