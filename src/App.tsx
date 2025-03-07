import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="flex flex-row justify-center w-full"
      style={{
        background:
          "linear-gradient(240deg, rgba(37,69,244,0.5) 0%, rgba(255,255,255,0) 100%)",
      }}
    >
      <div className="w-[100%] h-[776px]">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}

export default App;
