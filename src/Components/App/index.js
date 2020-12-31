import "./styles.css";

import { useState } from "react";
import Login from "../Login";
import AfterLogin from "../AfterLogin";

function App() {
  const [change, setChange] = useState(true);
  return <>{change ? <Login /> : <AfterLogin />}</>;
}

export default App;
