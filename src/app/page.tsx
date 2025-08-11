import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
   <div className="min-h-screen flex flex-col">
    Welcome to Storebrand<i className="bx bx-sun"></i>
    <Navigation />
    <Footer />
   </div>
  );
}
