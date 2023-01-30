import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className="sticky top-0  z-30 w-full bg-gray-light">
        <Header />
      </div>

      <Content />

      <Footer />
    </div>
  );
}

export default App;
