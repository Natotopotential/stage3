import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ConnectWallet from './pages/ConnectWallet';
import PlaceToStay from './pages/PlaceToStay';
import SharedLayout from './SharedLayout';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='connect' element={<ConnectWallet />} />
            <Route path='places' element={<PlaceToStay />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
