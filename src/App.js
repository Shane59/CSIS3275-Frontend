import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PackageCard from './components/PackageCard';
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


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-wrapper'>
        <Routes>
          <Route path='/' element={<PackageCard
            title="Granville Island Beer Hopping"
            location="Granville Island, Vancouver"
            url="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"
            desc="Nestled in the heart of Vancouver, Granville Island is a thriving cultural enclave. This unique destination boasts a dynamic blend of art, culinary delights, and outdoor beauty. Explore the vibrant arts scene in galleries and theaters. Savor local seafood and gourmet treats at the bustling Public Market. Discover one-of-a-kind treasures in artisan boutiques. Enjoy scenic waterfront views, embark on outdoor adventures, and immerse yourself in the island's rich history. Family-friendly and hosting events year-round, Granville Island is a captivating, multi-faceted destination where urban charm meets creative spirit, offering an unforgettable taste of Vancouver's diversity and vitality."
            id="1" />}
          />
          <Route path='/signin' element={<SignInUpPage />} />
          <Route path='/tours/:tourId' element={<TourDetailPage />} />
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
