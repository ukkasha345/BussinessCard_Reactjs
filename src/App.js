import "./styles.css";
import About from "./components/about";
import Info from "./components/info";
import myimg from "./valuables/mine.jpg";
import mewithout from "./valuables/remini.jpg";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <img src={mewithout} width={"90%"} height={"70%"} />;
      <Info />
      <About />
      <Footer />
    </div>
  );
}
