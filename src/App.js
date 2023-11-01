
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PackageCard from './components/PackageCard';

function App() {
  return (
    <div className="App">
      <Header />
      <PackageCard
        title="Granville Island Beer Hopping"
        location="Granville Island, Vancouver"
        desc="Nestled in the heart of Vancouver, Granville Island is a thriving cultural enclave. This unique destination boasts a dynamic blend of art, culinary delights, and outdoor beauty. Explore the vibrant arts scene in galleries and theaters. Savor local seafood and gourmet treats at the bustling Public Market. Discover one-of-a-kind treasures in artisan boutiques. Enjoy scenic waterfront views, embark on outdoor adventures, and immerse yourself in the island's rich history. Family-friendly and hosting events year-round, Granville Island is a captivating, multi-faceted destination where urban charm meets creative spirit, offering an unforgettable taste of Vancouver's diversity and vitality."
        id="1" />
    </div>
  );
}

export default App;
