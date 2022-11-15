import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreSection from "./components/ExploreSection";
import RestaurantType from "./components/RestaurantType";
import Collections from "./components/Collections";
import PopularLocalities from "./components/PopularLocalities";
import Footer from "./components/Footer";
function App() {
  return (
   <>
   <Header/>
   <RestaurantType/>
   <Collections/>
   <PopularLocalities/>

   <ExploreSection/>
   <Footer/>
   </>
  );
}

export default App;
