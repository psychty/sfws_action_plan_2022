
import Pages from './pages/pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <h1>Smoke Free West Sussex Partnership</h1>
       <Pages />
    </BrowserRouter>
    </div>
  );
}

export default App;