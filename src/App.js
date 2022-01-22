import { useState } from "react";

import Header from "./components/Header/Header"
import Home from "./pages/Home";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalSelected, setModalSelected] = useState("workModal");

  return (
    <div>
      <Header setModalSelected={setModalSelected} setModalShow={setModalShow} />
      <Home
        modalShow={modalShow}
        setModalShow={setModalShow}
        modalSelected={modalSelected}
      />
    </div>
  );
}

export default App;
