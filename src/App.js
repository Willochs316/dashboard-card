import Home from './Components/Home/Home';
import SideBar from './Components/SideBar/SideBar';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default App;
