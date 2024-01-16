import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
