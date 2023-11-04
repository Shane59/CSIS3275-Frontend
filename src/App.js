import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PackageCard from './components/PackageCard';
import SignInUpPage from './components/SignInUpPage';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <PackageCard />
      <Routes>
        <Route path='/signin' element={<SignInUpPage />} />
      </Routes>
    </div>

  );
}

export default App;
