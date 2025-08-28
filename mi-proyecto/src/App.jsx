import Navbar from "./Navbar";
import "./Navbar.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Mi Landing Page</h1>
        <p>Bienvenido a mi sitio 🚀</p>
      </main>
    </div>
  );
};

export default App;
