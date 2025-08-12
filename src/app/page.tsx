import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
   <div className="min-h-screen flex flex-col pt-24">
    <Navigation />
    <main className="flex-grow">
      <h1>Welcome to Home Page</h1>
      <Link href="/products" className="text-black-500 underline">Go to Prodcuts</Link>
    </main>
    <Footer />
   </div>
  );
}
