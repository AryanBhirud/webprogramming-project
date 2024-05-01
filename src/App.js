import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
