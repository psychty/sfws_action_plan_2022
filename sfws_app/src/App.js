
import Pages from './pages/pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <h2>Smoke Free West Sussex Partnership</h2>
       <Pages />
    </BrowserRouter>
    </div>
  );
}

export default App;