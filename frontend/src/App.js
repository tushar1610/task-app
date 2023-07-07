import './App.css';
import Home from './components/Home';
import { AppProvider } from './context/FetchContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home/>
      </div>
    </AppProvider>
  );
}

export default App;
