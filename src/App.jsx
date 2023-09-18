import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";
import PriceOptions from "./assets/components/priceOptions/PriceOptions";

function App() {
  return (
    <body className="min-h-screen">
      <header
        className="bg-neutral-200 text-black/80"
        style={{ fontFamily: "work sans" }}
      >
        <Navbar></Navbar>
      </header>
      <main className="p-3 lg:px-12 md:py-5 text-black/80">
        <PriceOptions></PriceOptions>
      </main>
    </body>
  );
}

export default App;
