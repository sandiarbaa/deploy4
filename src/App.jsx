import Navbar from "./components/navbar";
import Content from "./components/content";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Content />
      </div>
    </>
  );
}

export default App;
