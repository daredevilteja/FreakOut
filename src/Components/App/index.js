import "./styles.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useState } from "react";

function App() {
  const [change, setChange] = useState(false);
  return (
    <div className="App">
      <Header />
      <Main change={change} />
      <Footer />
    </div>
  );
}

export default App;
