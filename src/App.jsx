import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";

function App() {

  // if(ReactDOM.(document.getElementById()))
  return (
    <body className="min-h-screen">
      <header
        className="bg-neutral-200 text-black/80"
        style={{ fontFamily: "work sans" }}
      >
        <Navbar></Navbar>
      </header>
      <main className="p-3 lg:px-12 md:py-5 text-black/80">
    {  <Outlet></Outlet> ? <Outlet></Outlet> : <div className="flex justify-center">
         <div
           className="loading loading-spinner
            w-[30px]"
         ></div>
       </div> }
      </main>
    </body>
  );
}

export default App;
