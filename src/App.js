import Welcome from "./components/welcome";
import About from "./components/about";
import Shop from "./components/shop";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Shop />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
