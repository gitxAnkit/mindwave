import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
const App = () => {
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </Router>
  );
};

export default App;
