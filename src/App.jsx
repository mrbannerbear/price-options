import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";
import PriceOptions from "./assets/components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      <header
        className="bg-neutral-200 min-h-screen text-black/80"
        style={{ fontFamily: "work sans" }}
      >
        <Navbar></Navbar>
      </header>
      <main>
        <PriceOptions></PriceOptions>
      </main>
    </>
  );
}

export default App;
