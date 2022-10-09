import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
