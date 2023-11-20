import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SignInUpPage from './components/SignInUpPage';
import Footer from './components/Footer'
import {Routes, Route, Navigate} from 'react-router-dom';
import TourDetailPage from './components/TourDetailPage';
import TourBuddyDetail from './components/TourBuddyDetail';
import BookingConfirm from './components/BookingConfirm';
import ToursAdmin from './components/ToursAdmin';
import TravelBuddiesAdmin from './components/TravelBuddiesAdmin';
import BookingsAdmin from './components/BookingsAdmin';
import AddTour from './components/AddTour';
import ApprovedTravelBuddies from './components/ApprovedTravelBuddies';
import PendingTravelBuddies from './components/PendingTravelBuddies';
import AdminPage from './components/AdminPage';
import TopTourSection from './components/TopTourSection';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from './config';

function App() {
  const api = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true,
  })
  const [tourData, setTourData] = useState([]);
  // const [tourCardsElement, setTourCardsElements] = useState();
  
  useEffect(() => {
    api.get('/api/tours')
      .then(response => {
        setTourData(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='main-wrapper'>
        <Routes>
          <Route path='/' element={<TopTourSection tourData={tourData}/>}
          />
          <Route path='/signin' element={<SignInUpPage />} />
          <Route path='/tours/:tourId' element={<TourDetailPage tourData={tourData} />} />
          <Route path='/:tourId/tourbuddy/:tourBuddyId' element={<TourBuddyDetail />} />
          <Route path='/checkout' element={<BookingConfirm />} />
          <Route path='/admin' element={<AdminPage />}>
            <Route index element={<Navigate replace to ='tours' />} />
            <Route path='tours' element={<ToursAdmin />}>
              <Route index element={<Navigate replace to =''/>} />
              <Route path='addTour' element={<AddTour />} />
            </Route>
            <Route path='bookings' element={<BookingsAdmin />}/>
            <Route path='travelBuddies' element={<TravelBuddiesAdmin />}>
              <Route path='approved' element={<ApprovedTravelBuddies />} />
              <Route path='pending' element={<PendingTravelBuddies />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
