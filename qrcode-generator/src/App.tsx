import { useState } from "react";
import { AppContainer } from "./App.style";
import InputCard from "./components/InputCard/InputCard";
import Navbar from "./components/Navbar/Navbar";
function App() {


  const [qrVal, setQRVal] = useState("");

  const generateQRCode = (qrVal: string) => {
    console.log("Generating QR Code");
    console.log("QR:" , qrVal);
    setQRVal(qrVal);
    fetch("https://api.qrserver.com/v1/create-qr-code/?size=170x170&data="+ qrVal)
      .then((response) => {
        console.log("QR Value:", qrVal);
        return response.json();
      })
      .catch();
  };

  return (
    <AppContainer>
      <Navbar />
      <InputCard generateQRCode = {generateQRCode} qrVal = {qrVal}/>
      <h3>{qrVal}</h3>
    </AppContainer>
  );
}

export default App;
