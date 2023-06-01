import "./styles.css";
import { useState } from "react";
import SideMenu from "./SideMenu";
import ContactMenu from "./ContactMenu";

export default function App() {
  const [show, setShow] = useState("Show");
  const [showFlag, setShowFlag] = useState(false);
  const [info, setInfo] = useState("Expand");
  const [infoFlag, setInfoFlag] = useState(false);

  const handleServices = () => {
    setShowFlag(true);
    setShow("Hide");
  };

  const handleInfo = () => {
    setInfoFlag(true);
    setInfo("Hide");
  };

  return (
    <div className="App">
      <h1>Welcome to Shell</h1>
      <div>Home</div>
      <div>Services</div>
      <button onClick={handleServices}>{show}</button>
      {showFlag && <SideMenu />}

      <div>Contact</div>
      <button onClick={handleInfo}>{info}</button>
      {infoFlag && <ContactMenu />}
    </div>
  );
}
