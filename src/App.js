
import {BrowserRouter} from 'react-router-dom';
import Pages from './pages/Pages';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
